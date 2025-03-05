import { useState } from "react";
import { Menu, Wallet } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Auth from "../components/Auth";
import DashboardWidget from "../components/DashboardWidget";
import Defi from "../components/Defi";
import Stake from "../components/Stake";
import Profile from "../components/Profile";
import AdminDashboard from "../components/AdminDashboard";
import Report from "../components/Report";
import WalletMoney from "../components/WalletMoney";

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
