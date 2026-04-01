import { Link } from "react-router";
import { Plus, ArrowUpRight, ArrowDownLeft, CreditCard, DollarSign, Gift, Clock } from "lucide-react";
import { Button } from "src/app/components/ui/button";
import { ProfileSidebar } from "src/app/components/ProfileSidebar";

export function WalletPage() {
  const transactions = [
    {
      id: 1,
      type: "credit",
      description: "Refund - The Headliners",
      amount: 120.00,
      date: "Mar 28, 2026",
      status: "completed"
    },
    {
      id: 2,
      type: "debit",
      description: "Ticket Purchase - Rock Festival",
      amount: 95.00,
      date: "Mar 25, 2026",
      status: "completed"
    },
    {
      id: 3,
      type: "credit",
      description: "Added Funds",
      amount: 200.00,
      date: "Mar 20, 2026",
      status: "completed"
    },
  ];

  return (
    <div>
      <ProfileSidebar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-3xl mb-2">Wallet</h1>
          <p className="text-gray-400">Manage your balance and payment methods</p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-8 border border-purple-500/20 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="size-5 text-pink-500" />
                <span className="text-gray-400 text-sm">Available Balance</span>
              </div>
              <div className="text-white text-5xl mb-2">$0.00</div>
              <div className="text-gray-400 text-sm">in credits</div>
            </div>
            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Plus className="size-4" />
                Add Funds
              </Button>
              <Button className="bg-[#1a1d23] hover:bg-[#24272e] text-white px-6 py-3 rounded-lg flex items-center gap-2 border border-[#24272e]">
                <ArrowUpRight className="size-4" />
                Withdraw
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transaction History */}
          <div className="lg:col-span-2 bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Transaction History</h2>
              <button className="text-pink-500 hover:text-pink-400 text-sm">
                View all →
              </button>
            </div>

            {transactions.length > 0 ? (
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-[#24272e] last:border-0">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === "credit" 
                          ? "bg-green-500/20" 
                          : "bg-red-500/20"
                      }`}>
                        {transaction.type === "credit" ? (
                          <ArrowDownRight className="size-5 text-green-500" />
                        ) : (
                          <ArrowUpRight className="size-5 text-red-500" />
                        )}
                      </div>
                      <div>
                        <div className="text-white text-sm mb-1">{transaction.description}</div>
                        <div className="text-gray-400 text-xs">{transaction.date}</div>
                      </div>
                    </div>
                    <div className={`text-lg ${
                      transaction.type === "credit" 
                        ? "text-green-500" 
                        : "text-white"
                    }`}>
                      {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <DollarSign className="size-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-sm">No transactions yet</p>
              </div>
            )}
          </div>

          {/* Payment Methods */}
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Payment Methods</h2>
            </div>

            <div className="text-center py-12">
              <CreditCard className="size-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-sm mb-4">No payment methods saved</p>
              <button className="text-pink-500 hover:text-pink-400 text-sm flex items-center gap-1 mx-auto">
                <Plus className="size-4" />
                Add payment method
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] hover:border-pink-500/50 transition-colors cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Plus className="size-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-white mb-1">Add Funds</h3>
                <p className="text-gray-400 text-sm">Top up your wallet balance</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] hover:border-pink-500/50 transition-colors cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <CreditCard className="size-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-white mb-1">Payment Methods</h3>
                <p className="text-gray-400 text-sm">Manage your cards</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] hover:border-pink-500/50 transition-colors cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <ArrowUpRight className="size-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-white mb-1">Withdraw Funds</h3>
                <p className="text-gray-400 text-sm">Transfer to bank account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}