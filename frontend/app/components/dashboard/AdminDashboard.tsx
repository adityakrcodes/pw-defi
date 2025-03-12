import React from "react";

const AdminDashboard = () => {
  return (
    <div id="root">
      <section
        id="admin"
        className="min-h-screen bg-neutral-900 text-white p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
            <p className="text-neutral-400">
              Monitor and manage platform users and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
              <h3 className="text-neutral-400 text-sm mb-2">Total Users</h3>
              <p className="text-2xl font-bold">24,853</p>
              <p className="text-green-500 text-sm">+124 this week</p>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
              <h3 className="text-neutral-400 text-sm mb-2">Active Loans</h3>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-green-500 text-sm">$2.4M Total Value</p>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
              <h3 className="text-neutral-400 text-sm mb-2">Staking Volume</h3>
              <p className="text-2xl font-bold">$5.6M</p>
              <p className="text-green-500 text-sm">+12% this month</p>
            </div>
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
              <h3 className="text-neutral-400 text-sm mb-2">
                Platform Revenue
              </h3>
              <p className="text-2xl font-bold">$892K</p>
              <p className="text-green-500 text-sm">+8% this month</p>
            </div>
          </div>

          <div className="bg-neutral-800/50 rounded-xl border border-neutral-700/30 mb-8">
            <div className="p-6 border-b border-neutral-700/30">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">User Management</h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Export Data
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-neutral-400 border-b border-neutral-700/30">
                  <tr>
                    <th className="p-4">User ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Wallet Balance</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-700/30">
                    <td className="p-4">#12345</td>
                    <td className="p-4">John Doe</td>
                    <td className="p-4">john@example.com</td>
                    <td className="p-4">$45,678</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                        Active
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-neutral-700 rounded-lg transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-neutral-700 rounded-lg transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-700/30">
                    <td className="p-4">#12346</td>
                    <td className="p-4">Jane Smith</td>
                    <td className="p-4">jane@example.com</td>
                    <td className="p-4">$12,345</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-neutral-700 rounded-lg transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-neutral-700 rounded-lg transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-neutral-700/30 flex justify-between items-center">
              <p className="text-sm text-neutral-400">
                Showing 1-10 of 100 users
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
            <h3 className="text-xl font-semibold mb-6">System Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <h4 className="text-neutral-400 text-sm mb-2">System Load</h4>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold">67%</p>
                  <div className="w-full bg-neutral-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <h4 className="text-neutral-400 text-sm mb-2">Response Time</h4>
                <p className="text-2xl font-bold">234ms</p>
                <p className="text-green-500 text-sm">Normal</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <h4 className="text-neutral-400 text-sm mb-2">Error Rate</h4>
                <p className="text-2xl font-bold">0.12%</p>
                <p className="text-green-500 text-sm">Below threshold</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AdminDashboard;
