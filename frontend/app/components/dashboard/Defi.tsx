import React from "react";

const Defi = () => {
  return (
    <div id="defi" className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-neutral-800 className-lg border border-neutral-700/30">
            <div className="p-6 border-b border-neutral-700/30">
              <h3 className="text-xl font-semibold">Lending/Borrowing</h3>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Action Type
                  </label>
                  <select className="w-full bg-neutral-700/30 border border-neutral-600 className-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option>Lend</option>
                    <option>Borrow</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Asset
                  </label>
                  <select className="w-full bg-neutral-700/30 border border-neutral-600 className-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option>SOL</option>
                    <option>USDC</option>
                    <option>RAY</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="w-full bg-neutral-700/30 border border-neutral-600 className-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Duration
                  </label>
                  <select className="w-full bg-neutral-700/30 border border-neutral-600 className-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option>7 days</option>
                    <option>14 days</option>
                    <option>30 days</option>
                    <option>90 days</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 className-lg transition-colors duration-300"
                >
                  Submit Transaction
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-neutral-800 className-lg border border-neutral-700/30 mb-6">
            <div className="p-6 border-b border-neutral-700/30">
              <h3 className="text-xl font-semibold">Pool Statistics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="bg-neutral-700/30 className-lg p-4">
                <h4 className="text-sm text-neutral-400">Total Value Locked</h4>
                <p className="text-2xl font-bold">$24.5M</p>
              </div>
              <div className="bg-neutral-700/30 className-lg p-4">
                <h4 className="text-sm text-neutral-400">
                  Available Liquidity
                </h4>
                <p className="text-2xl font-bold">$12.8M</p>
              </div>
              <div className="bg-neutral-700/30 className-lg p-4">
                <h4 className="text-sm text-neutral-400">Active Users</h4>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 className-lg border border-neutral-700/30">
            <div className="p-6 border-b border-neutral-700/30">
              <h3 className="text-xl font-semibold">Available Lending Pools</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/30">
                  <tr>
                    <th className="text-left p-4 text-neutral-400">Asset</th>
                    <th className="text-left p-4 text-neutral-400">
                      Pool Size
                    </th>
                    <th className="text-left p-4 text-neutral-400">APY</th>
                    <th className="text-left p-4 text-neutral-400">
                      Utilization
                    </th>
                    <th className="text-left p-4 text-neutral-400">Min Lock</th>
                    <th className="text-left p-4 text-neutral-400">
                      Available
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700/30">
                  <tr className="hover:bg-neutral-700/10">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 className-full"></div>
                        <span>SOL</span>
                      </div>
                    </td>
                    <td className="p-4">$5.2M</td>
                    <td className="p-4 text-green-500">12.5%</td>
                    <td className="p-4">78%</td>
                    <td className="p-4">7 days</td>
                    <td className="p-4">1.2M SOL</td>
                  </tr>
                  <tr className="hover:bg-neutral-700/10">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-600 className-full"></div>
                        <span>USDC</span>
                      </div>
                    </td>
                    <td className="p-4">$8.7M</td>
                    <td className="p-4 text-green-500">8.2%</td>
                    <td className="p-4">65%</td>
                    <td className="p-4">14 days</td>
                    <td className="p-4">3.1M USDC</td>
                  </tr>
                  <tr className="hover:bg-neutral-700/10">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 className-full"></div>
                        <span>RAY</span>
                      </div>
                    </td>
                    <td className="p-4">$3.1M</td>
                    <td className="p-4 text-green-500">15.8%</td>
                    <td className="p-4">82%</td>
                    <td className="p-4">30 days</td>
                    <td className="p-4">500K RAY</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Defi;
