import { Link } from "react-router";
import { Crown, Zap, Gift, Star, ShoppingBag, TrendingUp, Award, Ticket, Users, CreditCard, Package } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProfileSidebar } from "../components/ProfileSidebar";

export function MemberDashboard() {
  const quickLinks = [
    {
      id: 1,
      name: "Queue with a Friend",
      icon: Users,
      color: "purple",
      path: "/queue-with-friend"
    },
    {
      id: 2,
      name: "Merch",
      icon: ShoppingBag,
      color: "blue",
      path: "/merch"
    },
    {
      id: 3,
      name: "Fair Price Tickets",
      icon: Ticket,
      color: "pink",
      path: "/fair-price-tickets"
    },
    {
      id: 4,
      name: "Order Card",
      icon: CreditCard,
      color: "cyan",
      path: "/order-card"
    },
    {
      id: 5,
      name: "Card Tracking",
      icon: Package,
      color: "orange",
      path: "/card-tracking"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "purple":
        return "text-purple-500";
      case "blue":
        return "text-blue-500";
      case "pink":
        return "text-pink-500";
      case "cyan":
        return "text-cyan-500";
      case "orange":
        return "text-orange-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div>
      <ProfileSidebar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <h1 className="text-white text-3xl mb-8">Member Dashboard</h1>

        {/* Membership Status */}
        <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-lg p-6 border border-pink-500/30 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="size-5 text-pink-500" />
                <div className="text-pink-400 text-sm font-semibold">Active Membership</div>
              </div>
              <div className="text-white text-3xl font-bold mb-3">Premium Lifetime</div>
              <div className="text-gray-300 text-sm mb-4">
                Unlock exclusive benefits, priority access, and member-only perks forever
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0b0e] rounded-lg p-3 border border-pink-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="size-4 text-green-400" />
                    <div className="text-gray-400 text-xs">Member Since</div>
                  </div>
                  <div className="text-white font-semibold">Jan 15, 2025</div>
                </div>
                <div className="bg-[#0a0b0e] rounded-lg p-3 border border-pink-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="size-4 text-pink-400" />
                    <div className="text-gray-400 text-xs">Plan Type</div>
                  </div>
                  <div className="text-white font-semibold">Lifetime Access</div>
                </div>
              </div>
            </div>
            <Link to="/membership">
              <button className="px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 rounded-lg text-sm font-medium transition-colors border border-pink-500/30">
                Manage
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-white text-xl mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className="bg-[#1a1d23] hover:bg-[#24272e] rounded-lg p-4 border border-[#24272e] hover:border-[#2a2e36] transition-all flex items-center gap-3"
                >
                  <IconComponent className={`size-5 ${getIconColor(link.color)}`} />
                  <span className="text-white text-sm">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-white text-xl mb-4">Recent Activity</h2>
          <div className="bg-[#1a1d23] rounded-lg p-8 border border-[#24272e] text-center">
            <p className="text-gray-400 text-sm">No recent activity to show.</p>
          </div>
        </div>
      </div>
    </div>
  );
}