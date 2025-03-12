import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const WalletMoney = () => {
	const wallet = useWallet();
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
					<button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300">
						Disconnect Wallet
					</button>
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
								<p className="font-medium">458.32 SOL</p>
								<p className="text-sm text-neutral-400">
									$34,891
								</p>
							</div>
						</div>

						<div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
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
						</div>

						<div className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
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
						</div>
					</div>
				</div>

				<div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
					<h3 className="text-lg font-semibold mb-4">
						Quick Transfer
					</h3>
					<form className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-neutral-400 mb-1">
								Token
							</label>
							<select className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
								<option>SOL</option>
								<option>USDC</option>
								<option>RAY</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-neutral-400 mb-1">
								Recipient Address
							</label>
							<input
								type="text"
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
								className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
								placeholder="0.00"
							/>
						</div>
						<button
							type="submit"
							className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
						>
							Send Tokens
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
							</tr>
						</thead>
						<tbody className="divide-y divide-neutral-700/30">
							<tr className="hover:bg-neutral-700/10">
								<td className="p-4">Send</td>
								<td className="p-4">SOL</td>
								<td className="p-4 text-red-500">-1.5 SOL</td>
								<td className="p-4">
									<code className="text-sm">3xk9...8j2m</code>
								</td>
								<td className="p-4">2024-02-20 14:30</td>
								<td className="p-4">
									<span className="px-2 py-1 bg-green-600/20 text-green-500 rounded-full text-sm">
										Confirmed
									</span>
								</td>
							</tr>
							<tr className="hover:bg-neutral-700/10">
								<td className="p-4">Receive</td>
								<td className="p-4">USDC</td>
								<td className="p-4 text-green-500">
									+500 USDC
								</td>
								<td className="p-4">
									<code className="text-sm">7mn2...4p9q</code>
								</td>
								<td className="p-4">2024-02-20 12:15</td>
								<td className="p-4">
									<span className="px-2 py-1 bg-green-600/20 text-green-500 rounded-full text-sm">
										Confirmed
									</span>
								</td>
							</tr>
							<tr className="hover:bg-neutral-700/10">
								<td className="p-4">Swap</td>
								<td className="p-4">RAY → SOL</td>
								<td className="p-4">100 RAY</td>
								<td className="p-4">
									<code className="text-sm">5vb4...2k8l</code>
								</td>
								<td className="p-4">2024-02-19 18:45</td>
								<td className="p-4">
									<span className="px-2 py-1 bg-green-600/20 text-green-500 rounded-full text-sm">
										Confirmed
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
export default WalletMoney;
