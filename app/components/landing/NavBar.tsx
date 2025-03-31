"use client";

import React, { useEffect, useState } from "react";
import { Home, LogIn, Info } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";

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
		}, 1000);
	}, []);
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<nav
			className={`fixed p-2 top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/30 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center">
				<Link href={'/'} className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-400/70 bg-clip-text text-transparent">BKR DeFi</Link>
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
						<span>
                            Home
                        </span>
					</button>
					<button
						className="text-white flex items-center space-x-1"
						onClick={() => (window.location.href = "#about")}
					>
						<Info className="w-5 h-5" />
						<span>About</span>
					</button>
					<WalletMultiButton
						style={{
							backgroundColor: "gray",
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
