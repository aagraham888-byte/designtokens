import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { DollarSign, Ticket, TrendingUp, AlertCircle, Plus, Calendar, MapPin, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type TabType = "overview" | "analytics" | "listings";

const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 7200 },
  { month: "Apr", revenue: 6500 },
  { month: "May", revenue: 8900 },
  { month: "Jun", revenue: 11200 },
];

const salesData = [
  { name: "Classic Rockers", sold: 24, revenue: 2880 },
  { name: "Summer Music Fest", sold: 18, revenue: 2340 },
  { name: "Jazz Night", sold: 12, revenue: 1440 },
  { name: "EDM Rave", sold: 32, revenue: 4160 },
];

const buyerDemographics = [
  { name: "18-24", value: 25, color: "#ec4899" },
  { name: "25-34", value: 35, color: "#f97316" },
  { name: "35-44", value: 20, color: "#3b82f6" },
  { name: "45+", value: 20, color: "#8b5cf6" },
];

const mockListings = [
  {
    id: 1,
    event: "Classic Rockers",
    section: "Floor A",
    row: "12",
    seats: "5-8",
    quantity: 4,
    price: 120,
    status: "active",
    views: 45,
    date: "Aug 20, 2025",
  },
  {
    id: 2,
    event: "Summer Music Fest",
    section: "VIP",
    row: "3",
    seats: "10-11",
    quantity: 2,
    price: 250,
    status: "pending",
    views: 23,
    date: "Jul 15, 2025",
  },
  {
    id: 3,
    event: "Jazz Night",
    section: "Balcony B",
    row: "8",
    seats: "14-16",
    quantity: 3,
    price: 85,
    status: "sold",
    views: 67,
    date: "Sep 5, 2025",
  },
];

const mockEvents = [
  {
    id: 1,
    title: "Classic Rockers",
    date: "Wed, Aug 20, 2025 · 7:30 PM",
    venue: "Staples Center, Los Angeles",
    ticketsSold: 24,
    totalRevenue: 2880,
    status: "active",
  },
  {
    id: 2,
    title: "Summer Music Fest",
    date: "Sat, Jul 15, 2025 · 4:00 PM",
    venue: "Central Park, New York",
    ticketsSold: 18,
    totalRevenue: 2340,
    status: "active",
  },
];

const transactions = [
  { id: "TXN001", buyer: "John D.", event: "Classic Rockers", amount: 240, date: "Mar 28, 2025", status: "completed" },
  { id: "TXN002", buyer: "Sarah M.", event: "Jazz Night", amount: 170, date: "Mar 27, 2025", status: "completed" },
  { id: "TXN003", buyer: "Mike R.", event: "EDM Rave", amount: 520, date: "Mar 26, 2025", status: "pending" },
  { id: "TXN004", buyer: "Emma W.", event: "Summer Fest", amount: 390, date: "Mar 25, 2025", status: "completed" },
];

export function SellerDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const navigate = useNavigate();

  const stats = {
    revenue: 38200,
    listings: 12,
    sold: 86,
    pending: 1250,
  };

  return (
    <div className="min-h-screen bg-[#1a1d23]">
      {/* Navigation */}
      <nav className="bg-[#1a1d23] border-b border-[#2a2d35]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-white text-2xl">TicketFanGrub</Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-400 hover:text-white">Events</Link>
            <span className="text-gray-400 hover:text-white cursor-pointer">Membership</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">Wallet</span>
            <Link to="/signin" className="text-gray-400 hover:text-white">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-[#1a1d23] border-b border-[#2a2d35]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-white text-4xl mb-2">Seller Dashboard</h1>
          <p className="text-gray-400">Manage your events and track ticket sales</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[#1a1d23] border-b border-[#2a2d35]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-pink-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === "analytics"
                  ? "border-pink-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab("listings")}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === "listings"
                  ? "border-pink-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              My Listings
            </button>
            <button
              onClick={() => navigate("/list-tickets")}
              className="py-4 px-2 text-pink-500 hover:text-pink-400 flex items-center gap-1"
            >
              <Plus className="size-4" />
              List Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total Revenue</span>
                  <DollarSign className="size-5 text-green-500" />
                </div>
                <div className="text-white text-3xl">${stats.revenue.toLocaleString()}</div>
                <div className="text-green-500 text-xs mt-1">+12% from last month</div>
              </div>

              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total Listings</span>
                  <Ticket className="size-5 text-pink-500" />
                </div>
                <div className="text-white text-3xl">{stats.listings}</div>
                <div className="text-gray-400 text-xs mt-1">Active listings</div>
              </div>

              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Tickets Sold</span>
                  <TrendingUp className="size-5 text-blue-500" />
                </div>
                <div className="text-white text-3xl">{stats.sold}</div>
                <div className="text-blue-500 text-xs mt-1">+8% this week</div>
              </div>

              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Pending Offers</span>
                  <AlertCircle className="size-5 text-orange-500" />
                </div>
                <div className="text-white text-3xl">${stats.pending.toLocaleString()}</div>
                <div className="text-gray-400 text-xs mt-1">3 offers pending</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Your Events */}
              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white text-xl">Your Events</h2>
                  <Button
                    onClick={() => navigate("/create-event")}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <Plus className="size-4" />
                    Create New Event
                  </Button>
                </div>

                {mockEvents.length > 0 ? (
                  <div className="space-y-4">
                    {mockEvents.map((event) => (
                      <div key={event.id} className="bg-[#2a2d35] rounded-lg p-4 hover:bg-[#2f3339] transition-colors">
                        <h3 className="text-white mb-2">{event.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <Calendar className="size-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                          <MapPin className="size-4" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white text-sm">{event.ticketsSold} tickets sold</div>
                            <div className="text-green-500 text-sm">${event.totalRevenue.toLocaleString()} revenue</div>
                          </div>
                          <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded">
                            {event.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="size-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">No events yet</p>
                    <p className="text-gray-500 text-sm">Create your first event to start selling tickets</p>
                  </div>
                )}
              </div>

              {/* My Listings Preview */}
              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white text-xl">Recent Listings</h2>
                  <Button
                    onClick={() => navigate("/list-tickets")}
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <Plus className="size-4" />
                    List Tickets
                  </Button>
                </div>

                {mockListings.length > 0 ? (
                  <div className="space-y-4">
                    {mockListings.slice(0, 3).map((listing) => (
                      <div key={listing.id} className="bg-[#2a2d35] rounded-lg p-4 hover:bg-[#2f3339] transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white">{listing.event}</h3>
                          <span className={`px-2 py-1 text-xs rounded ${
                            listing.status === "active" ? "bg-green-500/20 text-green-500" :
                            listing.status === "pending" ? "bg-orange-500/20 text-orange-500" :
                            "bg-blue-500/20 text-blue-500"
                          }`}>
                            {listing.status}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">
                          Section {listing.section} · Row {listing.row} · Seats {listing.seats}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-white">${listing.price} × {listing.quantity}</span>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Eye className="size-4" />
                            {listing.views}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Ticket className="size-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">No listings yet</p>
                    <p className="text-gray-500 text-sm">List some tickets to get started</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-8">
            {/* Revenue Chart */}
            <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
              <h2 className="text-white text-xl mb-6">Revenue Trends</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2d35" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#24272e", border: "1px solid #2a2d35", borderRadius: "8px" }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#ec4899" strokeWidth={2} name="Revenue ($)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Sales by Event */}
              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <h2 className="text-white text-xl mb-6">Sales by Event</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2d35" />
                    <XAxis dataKey="name" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#24272e", border: "1px solid #2a2d35", borderRadius: "8px" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Bar dataKey="sold" fill="#ec4899" name="Tickets Sold" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Buyer Demographics */}
              <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
                <h2 className="text-white text-xl mb-6">Buyer Demographics</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={buyerDemographics}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {buyerDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#24272e", border: "1px solid #2a2d35", borderRadius: "8px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
              <h2 className="text-white text-xl mb-6">Recent Transactions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2a2d35]">
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Transaction ID</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Buyer</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Event</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Amount</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Date</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="border-b border-[#2a2d35] hover:bg-[#2a2d35] transition-colors">
                        <td className="text-white text-sm py-3 px-4">{txn.id}</td>
                        <td className="text-white text-sm py-3 px-4">{txn.buyer}</td>
                        <td className="text-white text-sm py-3 px-4">{txn.event}</td>
                        <td className="text-white text-sm py-3 px-4">${txn.amount}</td>
                        <td className="text-gray-400 text-sm py-3 px-4">{txn.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded ${
                            txn.status === "completed" ? "bg-green-500/20 text-green-500" : "bg-orange-500/20 text-orange-500"
                          }`}>
                            {txn.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "listings" && (
          <div className="bg-[#24272e] rounded-lg p-6 border border-[#2a2d35]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl">All Listings</h2>
              <Button
                onClick={() => navigate("/list-tickets")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <Plus className="size-4" />
                List New Tickets
              </Button>
            </div>

            {mockListings.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2a2d35]">
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Event</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Location</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Quantity</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Price</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Views</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Date</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Status</th>
                      <th className="text-left text-gray-400 text-sm py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockListings.map((listing) => (
                      <tr key={listing.id} className="border-b border-[#2a2d35] hover:bg-[#2a2d35] transition-colors">
                        <td className="text-white text-sm py-4 px-4">{listing.event}</td>
                        <td className="text-white text-sm py-4 px-4">
                          Sec {listing.section} · Row {listing.row} · {listing.seats}
                        </td>
                        <td className="text-white text-sm py-4 px-4">{listing.quantity}</td>
                        <td className="text-white text-sm py-4 px-4">${listing.price}</td>
                        <td className="text-gray-400 text-sm py-4 px-4">
                          <div className="flex items-center gap-1">
                            <Eye className="size-4" />
                            {listing.views}
                          </div>
                        </td>
                        <td className="text-gray-400 text-sm py-4 px-4">{listing.date}</td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 text-xs rounded ${
                            listing.status === "active" ? "bg-green-500/20 text-green-500" :
                            listing.status === "pending" ? "bg-orange-500/20 text-orange-500" :
                            "bg-blue-500/20 text-blue-500"
                          }`}>
                            {listing.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-pink-500 hover:text-pink-400 text-sm">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <Ticket className="size-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-4">No listings yet</p>
                <p className="text-gray-500 text-sm mb-6">List some tickets to get started</p>
                <Button
                  onClick={() => navigate("/list-tickets")}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg px-6 py-3"
                >
                  <Plus className="size-4 inline mr-2" />
                  List Your First Tickets
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
