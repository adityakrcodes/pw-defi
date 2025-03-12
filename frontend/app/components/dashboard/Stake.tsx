import React from "react";

const Stake = () => {
  return (
    <div id="staking" className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-neutral-800 rounded-lg border border-neutral-700/30">
            <div className="p-6 border-b border-neutral-700/30">
              <h3 className="text-xl font-semibold">Stake Tokens</h3>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Select Token
                  </label>
                  <select className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option>SOL</option>
                    <option>RAY</option>
                    <option>USDC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="0.00"
                    />
                    <button className="absolute right-2 top-2 text-sm text-blue-500 hover:text-blue-400">
                      MAX
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">
                    Lock Period
                  </label>
                  <select className="w-full bg-neutral-700/30 border border-neutral-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                    <option>30 Days (15% APY)</option>
                    <option>60 Days (18% APY)</option>
                    <option>90 Days (22% APY)</option>
                    <option>180 Days (28% APY)</option>
                  </select>
                </div>
                <div className="p-4 bg-neutral-700/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-neutral-400">
                      Estimated Returns
                    </span>
                    <span className="text-sm text-green-500">+2.5 SOL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-400">
                      Platform Fee
                    </span>
                    <span className="text-sm text-neutral-400">0.1%</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  Stake Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-neutral-800 rounded-lg border border-neutral-700/30 mb-6">
            <div className="p-6 border-b border-neutral-700/30">
              <h3 className="text-xl font-semibold">Your Active Stakes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700/30">
                  <tr>
                    <th className="text-left p-4 text-neutral-400">Token</th>
                    <th className="text-left p-4 text-neutral-400">Amount</th>
                    <th className="text-left p-4 text-neutral-400">APY</th>
                    <th className="text-left p-4 text-neutral-400">
                      Lock Period
                    </th>
                    <th className="text-left p-4 text-neutral-400">Earned</th>
                    <th className="text-left p-4 text-neutral-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700/30">
                  <tr className="hover:bg-neutral-700/10">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                        <span>SOL</span>
                      </div>
                    </td>
                    <td className="p-4">100 SOL</td>
                    <td className="p-4 text-green-500">22%</td>
                    <td className="p-4">90 Days</td>
                    <td className="p-4 text-green-500">+5.2 SOL</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-600/20 text-green-500 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-700/10">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                        <span>RAY</span>
                      </div>
                    </td>
                    <td className="p-4">500 RAY</td>
                    <td className="p-4 text-green-500">28%</td>
                    <td className="p-4">180 Days</td>
                    <td className="p-4 text-green-500">+45.8 RAY</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-600/20 text-green-500 rounded-full text-sm">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
              <h4 className="text-neutral-400 mb-2">Total Staked Value</h4>
              <p className="text-2xl font-bold">$24,567.89</p>
              <p className="text-sm text-green-500">+15.7% this month</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
              <h4 className="text-neutral-400 mb-2">Total Rewards Earned</h4>
              <p className="text-2xl font-bold">$1,234.56</p>
              <p className="text-sm text-green-500">+5.2% this week</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700/30">
              <h4 className="text-neutral-400 mb-2">Average APY</h4>
              <p className="text-2xl font-bold">24.5%</p>
              <p className="text-sm text-blue-500">Across all stakes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stake;
