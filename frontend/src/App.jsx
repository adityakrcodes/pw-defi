import { useState } from 'react';
import { Menu, Bell, User, Home, Wallet, LineChart, BarChart3, UserCircle, ChevronDown, LogOut } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');
  const [notifications, setNotifications] = useState(3);

  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Wallet', icon: Wallet },
    { name: 'DeFi', icon: LineChart },
    { name: 'Staking', icon: LineChart },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Profile', icon: UserCircle }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Navigation */}
      <nav className={`fixed h-screen w-64 bg-neutral-800 border-r border-neutral-700/30 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
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
                    activePage === item.name ? 'bg-neutral-700/30 text-white' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* User Profile Section */}
          <div className="p-6 border-t border-neutral-700/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">user@example.com</p>
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                </div>
                <button className="text-sm text-neutral-400 hover:text-white flex items-center mt-1">
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-neutral-800 border-b border-neutral-700/30">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-semibold ml-12 lg:ml-0">{activePage}</h2>
            
            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-neutral-400 hover:text-white">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center transform translate-x-1 -translate-y-1">
                    {notifications}
                  </span>
                )}
              </button>
              
              {/* Profile Menu */}
              <button className="p-2 text-neutral-400 hover:text-white">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Content Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-lg bg-neutral-800 border border-neutral-700/30">
                <h3 className="text-lg font-semibold mb-4">Card {i}</h3>
                <div className="h-32 bg-neutral-700/30 rounded-md animate-pulse" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}