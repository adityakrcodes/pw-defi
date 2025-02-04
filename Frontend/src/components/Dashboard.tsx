import React from "react";

const Dashboard = () => {
  return (
    <div id="dashboard" className="min-h-screen bg-neutral-900 text-white p-6">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">$24,567.89</span>
            <span className="text-green-500 text-sm">+12.5%</span>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">458.32 SOL</span>
            <span className="text-blue-500 text-sm">≈ $34,891</span>
          </div>
        </div>

        <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
          <h3 className="text-neutral-400 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-2">
            <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300">
              <span className="block text-xs">Send</span>
            </button>
            <button className="p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300">
              <span className="block text-xs">Receive</span>
            </button>
            <button className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300">
              <span className="block text-xs">Swap</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-neutral-800 rounded-lg border border-neutral-700/30">
          <div className="p-6 border-b border-neutral-700/30">
            <h3 className="text-xl font-semibold">Recent Activity</h3>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Staking Reward</p>
                    <p className="text-sm text-neutral-400">Received 0.5 SOL</p>
                  </div>
                </div>
                <span className="text-sm text-neutral-400">2m ago</span>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Token Swap</p>
                    <p className="text-sm text-neutral-400">SOL → USDC</p>
                  </div>
                </div>
                <span className="text-sm text-neutral-400">15m ago</span>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Lending Pool</p>
                    <p className="text-sm text-neutral-400">
                      Deposited 100 USDC
                    </p>
                  </div>
                </div>
                <span className="text-sm text-neutral-400">1h ago</span>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Staking Reward Available</p>
                  <p className="text-sm text-neutral-400">
                    Your staking rewards are ready to claim.
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">Just now</p>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Low Balance Alert</p>
                  <p className="text-sm text-neutral-400">
                    Your USDC balance is below the minimum threshold.
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">5m ago</p>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Transaction Confirmed</p>
                  <p className="text-sm text-neutral-400">
                    Your swap transaction has been confirmed on the network.
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">30m ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
