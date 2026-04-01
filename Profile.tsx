import React from "react";
import { Link } from "react-router";
import { Ticket, Clock, Eye, CreditCard, Wallet, Plus, Crown, Settings } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return <button {...props} />;
}

function ProfileSidebar() {
  return null;
}
export function Profile() {
  const userName = "ameerah.graham";
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const stats = [
    { 
      icon: Ticket, 
      label: "Tickets Owned", 
      value: 0, 
      color: "bg-green-500/20 text-green-500",
      iconColor: "text-green-500"
    },
    { 
      icon: Clock, 
      label: "Queues Joined", 
      value: 0, 
      color: "bg-purple-500/20 text-purple-500",
      iconColor: "text-purple-500"
    },
    { 
      icon: Eye, 
      label: "Presales Watching", 
      value: 0, 
      color: "bg-yellow-500/20 text-yellow-500",
      iconColor: "text-yellow-500"
    },
    { 
      icon: Ticket, 
      label: "Total Tickets", 
      value: 0, 
      color: "bg-orange-500/20 text-orange-500",
      iconColor: "text-orange-500"
    },
  ];

  return (
    <div>
      <ProfileSidebar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Greeting & Browse Events Button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-3xl">
            {getGreeting()}, {userName} 👋
          </h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg text-sm">
              Browse Events
            </Button>
          </Link>
        </div>

        {/* Quick Access Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link 
            to="/tickets" 
            className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 hover:from-pink-900/40 hover:to-purple-900/40 rounded-lg p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Ticket className="size-6 text-pink-500" />
              </div>
              <div>
                <div className="text-white text-lg mb-1">My Tickets</div>
                <div className="text-gray-400 text-sm">View your digital passes</div>
              </div>
            </div>
          </Link>

          <Link 
            to="/wallet" 
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 hover:from-blue-900/40 hover:to-cyan-900/40 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Wallet className="size-6 text-blue-500" />
              </div>
              <div>
                <div className="text-white text-lg mb-1">Wallet</div>
                <div className="text-gray-400 text-sm">Manage your balance</div>
              </div>
            </div>
          </Link>

          <Link 
            to="/membership" 
            className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 hover:from-purple-900/40 hover:to-indigo-900/40 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Crown className="size-6 text-purple-500" />
              </div>
              <div>
                <div className="text-white text-lg mb-1">Membership</div>
                <div className="text-gray-400 text-sm">Upgrade your plan</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <div className={`inline-flex p-2 rounded-lg ${stat.color} mb-3`}>
                <stat.icon className={`size-5 ${stat.iconColor}`} />
              </div>
              <div className="text-white text-2xl mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Account Balance */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/20 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-400 text-sm mb-2">Account Balance</div>
              <div className="text-white text-4xl mb-1">$0.00</div>
              <div className="text-gray-400 text-sm">in credits</div>
            </div>
            <Link to="/wallet">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Wallet className="size-4" />
                View Wallet
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Upcoming Events</h2>
              <Link to="/" className="text-pink-500 hover:text-pink-400 text-sm">
                View all →
              </Link>
            </div>
            <div className="text-center py-12">
              <Ticket className="size-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">No upcoming events. Browse and grab some tickets!</p>
            </div>
          </div>

          {/* Presales to Watch */}
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Presales to Watch</h2>
              <Link to="/" className="text-pink-500 hover:text-pink-400 text-sm">
                View all →
              </Link>
            </div>
            <div className="text-center py-12">
              <Eye className="size-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">No presales being watched. Find events with presale access!</p>
            </div>
          </div>

          {/* Queue History */}
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Queue History</h2>
              <Link to="/" className="text-pink-500 hover:text-pink-400 text-sm">
                View all →
              </Link>
            </div>
            <div className="text-center py-12">
              <Clock className="size-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">No queue history yet. Join a queue to get tickets!</p>
            </div>
          </div>

          {/* Saved Payments */}
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">Saved Payments</h2>
              <button className="text-pink-500 hover:text-pink-400 text-sm">
                Manage →
              </button>
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
      </div>
    </div>
  );
}