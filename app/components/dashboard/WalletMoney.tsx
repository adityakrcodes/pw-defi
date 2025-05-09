import { useWallet } from "@solana/wallet-adapter-react";
import React, { use } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Connection, LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";

interface TransactionData {
    transactionType: 'SEND' | 'RECEIVE';
    token: string;
    amount: number;
    walletAddress: string;
    createdAt: string;
    transactionStatus: 'completed' | 'pending';
    transactionHash: string;
}

const WalletMoney = () => {
	const wallet = useWallet();
    const connection = new Connection("https://api.devnet.solana.com");
    const serverUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER || "http://localhost:5000";
    const walletAddress = wallet.publicKey ? wallet.publicKey.toString() : null;
    const [transactions, setTransactions] = React.useState<TransactionData[]>([]);
    const [transferAmount, setTransferAmount] = React.useState('');
    const [recipientAddress, setRecipientAddress] = React.useState('');
    const [isTransferring, setIsTransferring] = React.useState(false);

    const handleTransfer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!wallet.publicKey || !wallet.signTransaction) {
            toast.error('Please connect your wallet first');
            return;
        }

        try {
            setIsTransferring(true);
            const recipient = new PublicKey(recipientAddress);
            const amount = parseFloat(transferAmount);
            
            if (isNaN(amount) || amount <= 0) {
                toast.error('Please enter a valid amount');
                return;
            }

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: recipient,
                    lamports: amount * LAMPORTS_PER_SOL
                })
            );

            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = wallet.publicKey;

            const signed = await wallet.signTransaction(transaction);
            const signature = await connection.sendRawTransaction(signed.serialize());
            await connection.confirmTransaction(signature);
            try {
                const response = await fetch(`${serverUrl}/api/createTransaction`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    receiverAddress: recipient,
                    walletAddress: wallet.publicKey.toString(),
                    token: 'SOL',
                    amount: parseFloat(transferAmount) * LAMPORTS_PER_SOL,
                    transactionType: 'SEND',
                    transactionStatus: 'completed',
                    transactionHash: signature
                  })
                });
        
                if (!response.ok) {
                  throw new Error('Failed to save transaction details');
                }
              } catch (error) {
                console.error('Error saving transaction details:', error);
              }
            toast.success('Transfer successful!');
            setTransferAmount('');
            setRecipientAddress('');
            
            // Refresh transactions
            const response = await fetch(`${serverUrl}/api/getTransactions/${walletAddress}`);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error('Transfer failed:', error);
            toast.error('Transfer failed. Please try again.');
        } finally {
            setIsTransferring(false);
        }
    };

    React.useEffect(() => {
        fetch(`${serverUrl}/api/getTransactions/${walletAddress}`)
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data);
            });
    }, [walletAddress]);
    console.log(transactions);


    const [balance, setBalance] = React.useState(0);
    React.useEffect(() => {
        if (wallet.publicKey) {
            connection.getBalance(wallet.publicKey).then((balance) => {
                setBalance(balance / 10 ** 9);
            });
        }
    }
    , [wallet.publicKey]);

    const [solPrice, setSolPrice] = React.useState(0);
    React.useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
            .then((response) => response.json())
            .then((data) => {
                setSolPrice(data.solana.usd);
            });
    }, []);
	return (
		<div id="wallet" className="min-h-screen bg-neutral-900 text-white p-6">
			<ToastContainer />
			<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30 mb-6">
				<div className="flex flex-col lg:flex-row justify-between gap-4">
					<div>
						<h2 className="text-xl font-semibold mb-2">
							Connected Wallet
						</h2>
						<div className="flex items-center gap-2">
							<span className="text-neutral-400">Address:</span>
							<code className="bg-neutral-700/30 px-3 py-1 rounded">
                                {wallet.publicKey ? `${wallet.publicKey.toString().slice(0, 4)}...${wallet.publicKey.toString().slice(-3)}` : 'Not connected'}
							</code>
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
						</div>
					</div>

					<div className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 flex justify-center items-center">
                        {wallet.publicKey ? 
                        <WalletDisconnectButton 
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                                borderRadius: "5px",
                            }}
                        /> :
                        <WalletMultiButton
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                                borderRadius: "5px",
                            }}
                        />}
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
				<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
					<h3 className="text-lg font-semibold mb-4">
						Token Balances
					</h3>
					<div className="space-y-4">
						<div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-blue-600 rounded-full"></div>
								<div>
									<p className="font-medium">SOL</p>
									<p className="text-sm text-neutral-400">
										Solana
									</p>
								</div>
							</div>
							<div className="text-right">
								<p className="font-medium">{walletAddress ? `${balance} SOL` : '0.00 SOL'}
                                </p>
								<p className="text-sm text-neutral-400">
                                    ${(balance * solPrice).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
								</p>
							</div>
						</div>

						{/* <div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-green-600 rounded-full"></div>
								<div>
									<p className="font-medium">USDC</p>
									<p className="text-sm text-neutral-400">
										USD Coin
									</p>
								</div>
							</div>
							<div className="text-right">
								<p className="font-medium">10,234.56 USDC</p>
								<p className="text-sm text-neutral-400">
									$10,234.56
								</p>
							</div>
						</div> */}

						{/* <div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-purple-600 rounded-full"></div>
								<div>
									<p className="font-medium">RAY</p>
									<p className="text-sm text-neutral-400">
										Raydium
									</p>
								</div>
							</div>
							<div className="text-right">
								<p className="font-medium">1,567.89 RAY</p>
								<p className="text-sm text-neutral-400">
									$4,703.67
								</p>
							</div>
						</div> */}
					</div>
				</div>

				<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
					<h3 className="text-lg font-semibold mb-4">
						Quick Transfer
					</h3>
					<form className="space-y-4" onSubmit={handleTransfer}>
						<div>
							<label className="block text-sm font-medium text-neutral-400 mb-1">
								Token
							</label>
							<select className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
								<option>SOL</option>
                                <option disabled>More Available Soon</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-neutral-400 mb-1">
								Recipient Address
							</label>
							<input
								type="text"
								value={recipientAddress}
								onChange={(e) => setRecipientAddress(e.target.value)}
								className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
								placeholder="Enter wallet address"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-neutral-400 mb-1">
								Amount
							</label>
							<input
								type="number"
								value={transferAmount}
								onChange={(e) => setTransferAmount(e.target.value)}
								className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
								placeholder="0.00"
								step="0.000000001"
								min="0"
							/>
						</div>
						<button
							type="submit"
							disabled={isTransferring || !wallet.publicKey}
							className={`w-full px-6 py-3 rounded-lg transition-colors duration-300 ${
								isTransferring || !wallet.publicKey
									? 'bg-blue-600/50 cursor-not-allowed'
									: 'bg-blue-600 hover:bg-blue-700'
							}`}
						>
							{isTransferring ? 'Transferring...' : 'Send SOL'}
						</button>
					</form>
				</div>
			</div>

			<div className="bg-neutral-800 rounded-lg border border-neutral-700/30">
				<div className="p-6 border-b border-neutral-700/30">
					<h3 className="text-lg font-semibold">
						Transaction History
					</h3>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-neutral-700/30">
							<tr>
								<th className="text-left p-4 text-neutral-400">
									Type
								</th>
								<th className="text-left p-4 text-neutral-400">
									Token
								</th>
								<th className="text-left p-4 text-neutral-400">
									Amount
								</th>
								<th className="text-left p-4 text-neutral-400">
									Address
								</th>
								<th className="text-left p-4 text-neutral-400">
									Date
								</th>
								<th className="text-left p-4 text-neutral-400">
									Status
								</th>
                                <th className="text-left p-4 text-neutral-400">
                                    Transaction Hash
                                </th>
							</tr>
						</thead>
						<tbody className="divide-y divide-neutral-700/30">
							{transactions.map((transaction, index) => (
								<tr key={index} className="hover:bg-neutral-700/10">
									<td className="p-4">{transaction.transactionType}</td>
									<td className="p-4">{transaction.token}</td>
									<td className={`p-4 ${transaction.transactionType === 'SEND' ? 'text-red-500' : 'text-green-500'}`}>
										{transaction.transactionType === 'SEND' ? '-' : '+'}{transaction.amount / LAMPORTS_PER_SOL} SOL
									</td>
									<td className="p-4">
										<code className="text-sm">
											{`${transaction.walletAddress.slice(0,4)}...${transaction.walletAddress.slice(-4)}`}
										</code>
									</td>
									<td className="p-4">
										{new Date(transaction.createdAt).toLocaleString()}
									</td>
									<td className="p-4">
										<span className={`px-2 py-1 ${
											transaction.transactionStatus === 'completed' 
												? 'bg-green-600/20 text-green-500'
												: 'bg-yellow-600/20 text-yellow-500'
										} rounded-full text-sm`}>
											{transaction.transactionStatus === 'completed' ? 'Confirmed' : 'Pending'}
										</span>
									</td>
									<td className="p-4">
										<a href={`https://solscan.io/tx/${transaction.transactionHash}?cluster=devnet`} target="_blank" rel="noopener noreferrer">
											<code className="text-sm">
												{`${transaction.transactionHash.slice(0,4)}...${transaction.transactionHash.slice(-4)}`}
											</code>
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
export default WalletMoney;
