"use client";

import { useState } from "react";
import { Menu, Wallet } from "lucide-react";
import Sidebar from "@/app/components/dashboard/Sidebar";
import Header from "@/app/components/dashboard/Header";
import Auth from "@/app/components/dashboard/Auth";
import DashboardWidget from "@/app/components/dashboard/DashboardWidget";
import Defi from "@/app/components/dashboard/Defi";
import Stake from "@/app/components/dashboard/Stake";
import Profile from "@/app/components/dashboard/Profile";
import AdminDashboard from "@/app/components/dashboard/AdminDashboard";
import Report from "@/app/components/dashboard/Report";
import WalletMoney from "@/app/components/dashboard/WalletMoney";

export default function Dashboard() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activePage, setActivePage] = useState("Dashboard");

	return (
		<div className="min-h-screen bg-neutral-900 text-white">
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700"
			>
				<Menu className="w-6 h-6" />
			</button>

			<Sidebar
				isMenuOpen={isMenuOpen}
				activePage={activePage}
				setActivePage={setActivePage}
			/>
			<div className="lg:pl-64">
				<Header activePage={activePage} />
				{activePage === "Dashboard" && <DashboardWidget />}
				{activePage === "Wallet" && <WalletMoney />}
				{activePage === "DeFi" && <Defi />}
				{activePage === "Stake" && <Stake />}
				{activePage === "Analytics" && <Report />}
				{activePage === "Profile" && <Profile />}
				{activePage === "Admin Dashboard" && <AdminDashboard />}
				{activePage === "Signin" && <Auth />}
			</div>
		</div>
	);
}
