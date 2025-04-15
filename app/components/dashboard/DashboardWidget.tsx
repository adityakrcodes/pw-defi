import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { QRCodeSVG } from 'qrcode.react';
import  { SendSol } from "./SendSol";

const DashboardWidget = () => {
	const wallet = useWallet();
    const connection = new Connection("https://api.devnet.solana.com");
    
    const [balance, setBalance] = React.useState(0);
    React.useEffect(() => {
        if (wallet.publicKey) {
            connection.getBalance(wallet.publicKey).then((balance) => {
                setBalance(balance / 10 ** 9);
            });
        }
    }
    , [wallet.publicKey]);
    const walletAddress = wallet.publicKey ? wallet.publicKey.toString() : null;
    React.useEffect(() => {
        if (walletAddress) {
			const backendServer = process.env.NEXT_PUBLIC_BACKEND_SERVER;
			if (!backendServer) {
				console.error("Backend server URL is not defined");
				toast.error("Backend server URL is not defined");
				return;
			}
			fetch(backendServer, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ wallet: walletAddress }),
			})
                .then((response) => response.json())
                .then((data) => {
                    if (!data.exists) {
                        console.log("Wallet Address not in database");
                        window.location.href = "/register";
                    }else if(data.exists) {
                        console.log("Wallet Address exists in database");
                    }
                })
                .catch((error) => {
                    console.error("Error validating wallet address:", error);
                    toast.error("Error validating wallet address");});
        }
    }, [walletAddress]);


    const [solPrice, setSolPrice] = React.useState(0);
    React.useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
            .then((response) => response.json())
            .then((data) => {
                setSolPrice(data.solana.usd);
            });
    }, []);

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState<'send' | 'receive' | 'swap' | null>(null);

    const handleOpenModal = (type: 'send' | 'receive' | 'swap') => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalType(null);
        setIsModalOpen(false);
    };

	return (
		<div
			id="dashboard"
			className="min-h-screen bg-neutral-900 text-white p-6"
		>
			<ToastContainer />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
				<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-neutral-400">Total Profit</h3>
						<svg
							className="w-6 h-6 text-green-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
							/>
						</svg>
					</div>
					<div className="flex items-end gap-2">
						<span className="text-3xl font-bold">
                            ${(balance * solPrice).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                        </span>
						<span className="text-green-500 text-sm">+3.15%</span>
					</div>
				</div>

				<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-neutral-400">Wallet Balance</h3>
						<svg
							className="w-6 h-6 text-blue-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>
					</div>
					<div className="flex items-end gap-2">
						<span className="text-3xl font-bold">
							{balance.toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 5,
							})}{" "}
							SOL
						</span>
						<span className="text-blue-500 text-sm">
                            ${(balance * solPrice).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 5,
                            })}
                        </span>
					</div>
				</div>

				<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
					<h3 className="text-neutral-400 mb-4">Quick Actions</h3>

                    <div className="grid grid-cols-3 gap-2">
                        <button 
                            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                            onClick={() => handleOpenModal('send')}
                        >
                            <span className="block text-xs">Send</span>
                        </button>
                        <button 
                            className="p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300"
                            onClick={() => handleOpenModal('receive')}
                        >
                            <span className="block text-xs">Receive</span>
                        </button>
                        <button 
                            className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300"
                            onClick={() => handleOpenModal('swap')}
                        >
                            <span className="block text-xs">Swap</span>
                        </button>
                    </div>
                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-900">
                                <div className="bg-neutral-800 p-6 rounded-lg w-96">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">
                                            {modalType === 'send' ? 'Send SOL' : 
                                                modalType === 'receive' ? 'Receive SOL' : 'Swap Tokens'}
                                        </h3>
                                        <button onClick={handleCloseModal} className="text-neutral-400 hover:text-white">
                                            ✕
                                        </button>
                                    </div>
									{modalType === 'send' && (
  								<SendSol 
  								  wallet={wallet}
  								  connection={connection}
   								 handleCloseModal={handleCloseModal}
 								 />
					)}
                                    {/* {modalType === 'send' && (
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm text-neutral-400 mb-1">Recipient Address</label>
                                                <input 
                                                    type="text" 
                                                    name="recipient"
                                                    className="w-full bg-neutral-700 rounded p-2" 
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-neutral-400 mb-1">Amount (SOL)</label>
                                                <input 
                                                    type="number" 
                                                    name="amount"
                                                    className="w-full bg-neutral-700 rounded p-2" 
                                                />
                                            </div>
                                            <button 
                                                className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
                                                onClick={async (e) => {
                                                    e.preventDefault();
                                                    if (!wallet.publicKey || !wallet.sendTransaction) {
                                                        toast.error('Wallet not connected!');
                                                        return;
                                                    }
                                                    try {
                                                        const recipient = e.currentTarget.form?.['recipient'].value;
                                                        const amount = parseFloat(e.currentTarget.form?.['amount'].value);
														
														const transaction = new Transaction().add(
															SystemProgram.transfer({
																fromPubkey: wallet.publicKey!,
																toPubkey: new PublicKey(recipient),
																lamports: amount * LAMPORTS_PER_SOL
															})
														);
														
														const signature = await wallet.sendTransaction(
															transaction,
															connection
														);
														
														const latestBlockhash = await connection.getLatestBlockhash();
														await connection.confirmTransaction({
															signature,
															...latestBlockhash
														});
														
														toast.success('Transaction sent successfully!');
														handleCloseModal();
													} catch (error: any) {
														toast.error('Transaction failed: ' + (error.message || 'Unknown error'));
													}
                                                }}
                                            >
                                                Send
                                            </button>
                                        </form>
                                    )} */}

                                    {modalType === 'receive' && (
                                        <div className="text-center">
                                            <div>
                                                <label className="block text-sm text-neutral-400 mb-1">Your Address</label>
                                                <div className="m-2 flex justify-center">
                                                    <QRCodeSVG
                                                        value={wallet.publicKey ? wallet.publicKey.toString() : ''}
                                                        size={256}
                                                        bgColor="#1F2937"
                                                        fgColor="#ffffff"
                                                        className="bg-neutral-700 rounded-lg"
                                                    />

                                                </div>
                                                 <code className="bg-neutral-700/30 px-3 py-1 rounded flex items-center justify-between">
                                                    {wallet.publicKey ? `${wallet.publicKey.toString().slice(0, 23)}...${wallet.publicKey.toString().slice(-3)}` : 'Not connected'}
                                                    <button 
                                                        onClick={() => {
                                                            if (wallet.publicKey) {
                                                                navigator.clipboard.writeText(wallet.publicKey.toString());
                                                                toast.success('Address copied to clipboard!', {
                                                                    position: "top-right",
                                                                    autoClose: 1000,
                                                                    hideProgressBar: false,
                                                                    closeOnClick: true,
                                                                    pauseOnHover: true,
                                                                    draggable: true,
                                                                    progress: undefined,
                                                                    theme: "colored",
                                                                    style: { backgroundColor: '#3b82f6', color: 'white' }
                                                                });
                                                            }
                                                        }}
                                                        className="text-blue-500 hover:text-blue-400"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                            />
                                                        </svg>
                        
                                                    </button>
                                                </code>
                                            </div>
                                            <p className="text-sm text-neutral-400">Share this address to receive SOL</p>
                                        </div>
                                    )}

                                    {modalType === 'swap' && (
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm text-neutral-400 mb-1">From</label>
                                                <input type="number" className="w-full bg-neutral-700 rounded p-2" placeholder="SOL" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-neutral-400 mb-1">To</label>
                                                <input type="number" className="w-full bg-neutral-700 rounded p-2" placeholder="USDC" />
                                            </div>
                                            <button className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded">Swap</button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
				</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-neutral-800 rounded-lg border border-neutral-700/30">
					<div className="p-6 border-b border-neutral-700/30">
						<h3 className="text-xl font-semibold">
							Recent Activity
						</h3>
					</div>
					<div className="p-6">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center">
										<svg
											className="w-5 h-5 text-green-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div>
										<p className="font-medium">
											Staking Reward
										</p>
										<p className="text-sm text-neutral-400">
											Received 0.5 SOL
										</p>
									</div>
								</div>
								<span className="text-sm text-neutral-400">
									2m ago
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
										<svg
											className="w-5 h-5 text-blue-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
											/>
										</svg>
									</div>
									<div>
										<p className="font-medium">
											Token Swap
										</p>
										<p className="text-sm text-neutral-400">
											SOL → USDC
										</p>
									</div>
								</div>
								<span className="text-sm text-neutral-400">
									15m ago
								</span>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center">
										<svg
											className="w-5 h-5 text-purple-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div>
										<p className="font-medium">
											Lending Pool
										</p>
										<p className="text-sm text-neutral-400">
											Deposited 100 USDC
										</p>
									</div>
								</div>
								<span className="text-sm text-neutral-400">
									1h ago
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-neutral-800 rounded-lg border border-neutral-700/30">
					<div className="p-6 border-b border-neutral-700/30">
						<h3 className="text-xl font-semibold">Notifications</h3>
					</div>
					<div className="p-6">
						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center mt-1">
									<svg
										className="w-5 h-5 text-yellow-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg>
								</div>
								<div>
									<p className="font-medium">
										Staking Reward Available
									</p>
									<p className="text-sm text-neutral-400">
										Your staking rewards are ready to claim.
									</p>
									<p className="text-xs text-neutral-500 mt-1">
										Just now
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mt-1">
									<svg
										className="w-5 h-5 text-red-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
								</div>
								<div>
									<p className="font-medium">
										Low Balance Alert
									</p>
									<p className="text-sm text-neutral-400">
										Your USDC balance is below the minimum
										threshold.
									</p>
									<p className="text-xs text-neutral-500 mt-1">
										5m ago
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mt-1">
									<svg
										className="w-5 h-5 text-green-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<p className="font-medium">
										Transaction Confirmed
									</p>
									<p className="text-sm text-neutral-400">
										Your swap transaction has been confirmed
										on the network.
									</p>
									<p className="text-xs text-neutral-500 mt-1">
										30m ago
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DashboardWidget;
