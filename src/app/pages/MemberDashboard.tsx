import { Link } from "react-router";
import { Users, Eye, ShoppingBag, Ticket, CreditCard, Package } from "lucide-react";

export function MemberDashboard() {
  const quickLinks = [
    {
      id: 1,
      name: "Friend Mode",
      icon: Users,
      color: "purple",
      path: "/friend-mode"
    },
    {
      id: 2,
      name: "Watch Mode",
      icon: Eye,
      color: "gray",
      path: "/watch-mode"
    },
    {
      id: 3,
      name: "Merch",
      icon: ShoppingBag,
      color: "blue",
      path: "/merch"
    },
    {
      id: 4,
      name: "Fair Price Tickets",
      icon: Ticket,
      color: "pink",
      path: "/fair-price-tickets"
    },
    {
      id: 5,
      name: "Order Card",
      icon: CreditCard,
      color: "cyan",
      path: "/order-card"
    },
    {
      id: 6,
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
      case "gray":
        return "text-gray-400";
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
    <div className="min-h-screen bg-[#0a0b0e]">
      {/* Navigation */}
      <nav className="bg-[#0a0b0e] border-b border-[#1a1d23]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-semibold">TicketFanGrub</Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">Events</Link>
            <Link to="/tickets" className="text-gray-400 hover:text-white text-sm">My Tickets</Link>
            <Link to="/membership" className="text-gray-400 hover:text-white text-sm">Membership</Link>
            <Link to="/wallet" className="text-gray-400 hover:text-white text-sm">Wallet</Link>
            <Link to="/profile" className="text-gray-400 hover:text-white text-sm">Profile</Link>
            <Link to="/seller-dashboard" className="text-gray-400 hover:text-white text-sm">Sell Tickets</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-white text-3xl mb-8">Member Dashboard</h1>

        {/* Membership Status */}
        <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] mb-8">
          <div className="text-gray-400 text-sm mb-2">No Active Membership</div>
          <div className="text-white text-2xl">Free</div>
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
