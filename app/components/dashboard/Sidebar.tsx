import {
  User,
  Home,
  Wallet,
  LineChart,
  BarChart3,
  UserCircle,
  ChevronDown,
  LogOut,
} from "lucide-react";
import React from "react";

interface SidebarProps {
  isMenuOpen: boolean;
  setActivePage: (page: string) => void;
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, setActivePage, activePage }) => {
  const navItems = [
    { name: "Dashboard", icon: Home },
    { name: "Wallet", icon: Wallet },
    { name: "DeFi", icon: LineChart },
    { name: "Stake", icon: LineChart },
    { name: "Analytics", icon: BarChart3 },
    { name: "Profile", icon: UserCircle },
    // { name: "Signin", icon: UserCircle },
    // { name: "Admin Dashboard", icon: UserCircle },
  ];
  return (
    <nav
      className={`fixed z-10 h-screen w-64 bg-neutral-800 border-r border-neutral-700/30 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* App Logo */}
        <div className="p-6 border-b border-neutral-700/30">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DeFi App
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`w-full flex items-center px-6 py-3 text-neutral-300 hover:text-white hover:bg-neutral-700/30 transition-all ${
                  activePage === item.name ? "bg-neutral-700/30 text-white" : ""
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* User Profile Section */}
        {/* <div className="p-6 border-t border-neutral-700/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">bayees1@gmail.com</p>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </div>
              <button className="text-sm text-neutral-400 hover:text-white flex items-center mt-1">
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Sidebar;
