import React, { useEffect } from "react";
import { Home, LogIn, Info } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

declare global {
	interface Window {
		solana?: {
			isConnected: boolean;
		};
	}
}

const NavBar: React.FC = () => {
	useEffect(() => {
        setTimeout(() => {
            if (window.solana?.isConnected) {
                window.location.href = "/dashboard";
            }
        }
        , 1000);
    }, []);

	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white text-xl font-bold">BKR DeFi</div>
				<div className="flex space-x-2 font-semibold">
					<button
						className="text-white flex items-center space-x-1"
						onClick={() => {
							if (window.solana?.isConnected) {
								window.location.href = "/dashboard";
							} else {
								window.location.href = "/";
							}
						}}
					>
						<Home className="w-5 h-5" />
						<span>Home</span>
					</button>
					<button
						className="text-white flex items-center space-x-1"
						onClick={() => (window.location.href = "/about")}
					>
						<Info className="w-5 h-5" />
						<span>About</span>
					</button>
					<WalletMultiButton
						style={{
							backgroundColor: "transparent",
							color: "white",
							borderRadius: "5px",
							padding: "2px 15px",
						}}
						onClick={() => {
							if (window.solana?.isConnected) {
								window.location.href = "/dashboard";
							}
						}}
					/>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
