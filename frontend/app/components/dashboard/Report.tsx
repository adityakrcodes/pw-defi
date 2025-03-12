import React from "react";

const Report = () => {
  return (
    <div id="root">
      <section
        id="analytics"
        className="min-h-screen bg-neutral-900 text-white p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Analytics & Reports</h2>
            <p className="text-neutral-400">
              Track your portfolio performance and earnings
            </p>
          </div>

          <div className="bg-neutral-800/50 rounded-xl p-6 mb-8 border border-neutral-700/30">
            <h3 className="text-xl font-semibold mb-4">
              Portfolio Performance
            </h3>
            <div className="h-[400px] bg-neutral-800/80 rounded-lg p-4 mb-4">
              <div className="relative h-full">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                  Chart Component Will Be Integrated Here
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">
                  Total Portfolio Value
                </p>
                <p className="text-2xl font-bold">$24,567.89</p>
                <p className="text-green-500 text-sm">+12.34%</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">24h Change</p>
                <p className="text-2xl font-bold">+$1,234.56</p>
                <p className="text-green-500 text-sm">+5.67%</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">Total Assets</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-neutral-400 text-sm">Different tokens</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/30">
            <h3 className="text-xl font-semibold mb-4">Earnings Report</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold">$5,678.90</p>
                <p className="text-green-500 text-sm">Lifetime earnings</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">Staking Rewards</p>
                <p className="text-2xl font-bold">$2,345.67</p>
                <p className="text-green-500 text-sm">+3.45% APY</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">Lending Interest</p>
                <p className="text-2xl font-bold">$1,234.56</p>
                <p className="text-green-500 text-sm">+2.8% APR</p>
              </div>
              <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700/20">
                <p className="text-neutral-400 text-sm">Referral Rewards</p>
                <p className="text-2xl font-bold">$890.12</p>
                <p className="text-green-500 text-sm">12 referrals</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-neutral-400 border-b border-neutral-700/30">
                  <tr>
                    <th className="p-4">Type</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-700/30">
                    <td className="p-4">Staking Reward</td>
                    <td className="p-4 text-green-500">+0.5 SOL</td>
                    <td className="p-4">2024-02-20</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-700/30">
                    <td className="p-4">Lending Interest</td>
                    <td className="p-4 text-green-500">+2.3 USDC</td>
                    <td className="p-4">2024-02-19</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-700/30">
                    <td className="p-4">Referral Bonus</td>
                    <td className="p-4 text-green-500">+100 Tokens</td>
                    <td className="p-4">2024-02-18</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Report;
