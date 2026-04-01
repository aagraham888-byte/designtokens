import { Link } from "react-router";
import { Users, Eye, Clock, MapPin, Calendar, DollarSign, Bell, Share2, MessageCircle, UserPlus, CheckCircle, Heart, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function QueueWithFriend() {
  const [activeTab, setActiveTab] = useState<"queue-together" | "watch-mode">("queue-together");

  const friends = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      status: "online",
      inQueue: 2
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "MC",
      status: "online",
      inQueue: 1
    },
    {
      id: 3,
      name: "Emily Davis",
      avatar: "ED",
      status: "offline",
      inQueue: 0
    },
  ];

  const queueTogetherEvents = [
    {
      id: 1,
      name: "Beyoncé Renaissance Tour 2026",
      venue: "SoFi Stadium",
      location: "Los Angeles, CA",
      date: "Aug 15, 2026",
      price: "$150 - $350",
      status: "presale",
      presaleDate: "Apr 10, 2026",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      friendsInterested: ["Sarah", "Mike"],
      notifications: 3
    },
    {
      id: 2,
      name: "Coachella Valley Music Festival",
      venue: "Empire Polo Club",
      location: "Indio, CA",
      date: "Apr 10-12, 2026",
      price: "$499 - $999",
      status: "sold-out",
      resaleAvailable: true,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
      friendsInterested: ["Sarah", "+2 others"],
      notifications: 5
    },
    {
      id: 3,
      name: "Taylor Swift - Eras Tour Extended",
      venue: "MetLife Stadium",
      location: "East Rutherford, NJ",
      date: "Sep 22, 2026",
      price: "$200 - $500",
      status: "on-sale-soon",
      onsaleDate: "Apr 5, 2026",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      friendsInterested: ["Mike", "Emily"],
      notifications: 1
    },
  ];

  const activeWatchParties = [
    {
      id: 1,
      friendName: "Sarah Johnson",
      friendAvatar: "SJ",
      event: "Beyoncé Renaissance Tour 2026",
      venue: "SoFi Stadium",
      location: "Los Angeles, CA",
      date: "Aug 15, 2026",
      queuePosition: 1847,
      totalInQueue: 12453,
      estimatedWait: "12 minutes",
      status: "in-queue",
      invitedAt: "2 hours ago",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      friendName: "Mike Chen",
      friendAvatar: "MC",
      event: "Taylor Swift - Eras Tour Extended",
      venue: "MetLife Stadium",
      location: "East Rutherford, NJ",
      date: "Sep 22, 2026",
      queuePosition: 542,
      totalInQueue: 8932,
      estimatedWait: "5 minutes",
      status: "in-queue",
      invitedAt: "45 minutes ago",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
  ];

  const upcomingPresales = [
    {
      id: 1,
      event: "Taylor Swift - Eras Tour Extended",
      presaleType: "Fan Presale",
      startsIn: "2 days",
      date: "Apr 5, 2026 10:00 AM",
      friendsInterested: 2
    },
    {
      id: 2,
      event: "Bad Bunny World Tour",
      presaleType: "Credit Card Presale",
      startsIn: "5 days",
      date: "Apr 8, 2026 12:00 PM",
      friendsInterested: 1
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "presale":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "on-sale-soon":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "sold-out":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "presale":
        return "Presale Active";
      case "on-sale-soon":
        return "On Sale Soon";
      case "sold-out":
        return "Sold Out";
      default:
        return status;
    }
  };

  const getQueueProgress = (position: number, total: number) => {
    return ((total - position) / total) * 100;
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/member-dashboard" className="text-pink-500 hover:text-pink-400 text-sm mb-4 inline-flex items-center gap-1">
            ← Back to Member Dashboard
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-pink-500/20 rounded-lg">
              <Users className="size-8 text-pink-500" />
            </div>
            <div>
              <h1 className="text-white text-3xl">Queue with a Friend</h1>
              <p className="text-gray-400 text-sm">Coordinate ticket purchases and watch friends in the queue</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#1a1d23] rounded-lg p-2 mb-8 inline-flex gap-2">
          <button
            onClick={() => setActiveTab("queue-together")}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "queue-together"
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-[#24272e]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              Queue Together
            </div>
          </button>
          <button
            onClick={() => setActiveTab("watch-mode")}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "watch-mode"
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-[#24272e]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Eye className="size-4" />
              Watch Mode
              {activeWatchParties.length > 0 && (
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {activeWatchParties.length}
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Queue Together Tab */}
        {activeTab === "queue-together" && (
          <>
            {/* Info Banner */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30 mb-8">
              <div className="flex items-start gap-4">
                <Users className="size-6 text-purple-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="text-white text-lg font-semibold mb-2">Queue Together Feature</div>
                  <div className="text-gray-300 text-sm mb-4">
                    Coordinate with friends to enter the same event queue at the same time. Share events, set group reminders, 
                    and increase your chances of getting tickets together!
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="size-4 text-purple-500" />
                      <span className="text-gray-300">Synchronized queue entry</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="size-4 text-purple-500" />
                      <span className="text-gray-300">Group chat & notifications</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="size-4 text-purple-500" />
                      <span className="text-gray-300">Share event discoveries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 hover:from-pink-900/40 hover:to-purple-900/40 rounded-lg p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <UserPlus className="size-6 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-white text-lg mb-1">Invite Friends</div>
                    <div className="text-gray-400 text-sm">Queue together</div>
                  </div>
                </div>
              </button>

              <button className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 hover:from-blue-900/40 hover:to-cyan-900/40 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Share2 className="size-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-white text-lg mb-1">Share Events</div>
                    <div className="text-gray-400 text-sm">Send to your crew</div>
                  </div>
                </div>
              </button>

              <button className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 hover:from-purple-900/40 hover:to-indigo-900/40 rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Bell className="size-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-white text-lg mb-1">Group Alerts</div>
                    <div className="text-gray-400 text-sm">Get notified together</div>
                  </div>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Friends & Presales */}
              <div className="lg:col-span-1 space-y-6">
                {/* Your Friends */}
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white text-xl">Your Friends</h2>
                    <button className="text-pink-500 hover:text-pink-400 text-sm">
                      <UserPlus className="size-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {friends.map((friend) => (
                      <div key={friend.id} className="flex items-center gap-3 p-3 bg-[#0a0b0e] rounded-lg hover:bg-[#12141a] transition-colors cursor-pointer">
                        <div className="relative">
                          <div className="size-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {friend.avatar}
                          </div>
                          {friend.status === "online" && (
                            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#1a1d23]"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium truncate">{friend.name}</div>
                          <div className="text-gray-400 text-xs">
                            {friend.inQueue > 0 ? `In ${friend.inQueue} queue${friend.inQueue > 1 ? 's' : ''}` : 'Available'}
                          </div>
                        </div>
                        <MessageCircle className="size-5 text-gray-400 hover:text-pink-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Presales */}
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white text-xl">Upcoming Presales</h2>
                    <Clock className="size-5 text-purple-500" />
                  </div>
                  <div className="space-y-4">
                    {upcomingPresales.map((presale) => (
                      <div key={presale.id} className="p-4 bg-[#0a0b0e] rounded-lg border border-purple-500/20">
                        <div className="text-white font-medium text-sm mb-2">{presale.event}</div>
                        <div className="text-purple-400 text-xs mb-3">{presale.presaleType}</div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-gray-400 text-xs">{presale.date}</div>
                          <div className="text-pink-500 text-xs font-semibold">{presale.startsIn}</div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Users className="size-3" />
                          <span>{presale.friendsInterested} friends interested</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm">
                    Set Group Reminders
                  </Button>
                </div>
              </div>

              {/* Right Column - Events Feed */}
              <div className="lg:col-span-2">
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white text-xl">Events to Queue Together</h2>
                    <Link to="/" className="text-pink-500 hover:text-pink-400 text-sm flex items-center gap-1">
                      Browse more →
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {queueTogetherEvents.map((event) => (
                      <div key={event.id} className="bg-[#0a0b0e] rounded-lg overflow-hidden hover:ring-2 hover:ring-pink-500/50 transition-all">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-48 h-40 md:h-auto relative">
                            <img 
                              src={event.image} 
                              alt={event.name}
                              className="w-full h-full object-cover"
                            />
                            {event.notifications > 0 && (
                              <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                {event.notifications} new
                              </div>
                            )}
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-white text-lg font-medium mb-2">{event.name}</h3>
                                <div className="flex flex-col gap-1 text-sm text-gray-400 mb-3">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="size-4" />
                                    <span>{event.venue}, {event.location}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="size-4" />
                                    <span>{event.date}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <DollarSign className="size-4" />
                                    <span>{event.price}</span>
                                  </div>
                                </div>
                              </div>
                              <button className="p-2 hover:bg-pink-500/20 rounded-full transition-colors">
                                <Heart className="size-5 text-pink-500 fill-pink-500" />
                              </button>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                              <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(event.status)}`}>
                                {getStatusText(event.status)}
                              </span>
                              <span className="text-xs text-purple-400 flex items-center gap-1 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                                <Users className="size-3" />
                                {event.friendsInterested.join(", ")} interested
                              </span>
                            </div>

                            <div className="flex gap-3">
                              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg text-sm flex-1">
                                {event.status === "sold-out" && event.resaleAvailable ? "Queue for Resale" : "Join Queue Together"}
                              </Button>
                              <Button className="bg-[#24272e] hover:bg-[#2a2e36] text-white px-4 py-2 rounded-lg text-sm">
                                <Share2 className="size-4" />
                              </Button>
                              <Button className="bg-[#24272e] hover:bg-[#2a2e36] text-white px-4 py-2 rounded-lg text-sm">
                                <Bell className="size-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] mt-6">
                  <h2 className="text-white text-xl mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-[#0a0b0e] rounded-lg">
                      <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        SJ
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Sarah Johnson</span> wants to queue with you for{" "}
                          <span className="text-pink-500">Beyoncé Renaissance Tour</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#0a0b0e] rounded-lg">
                      <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        MC
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Mike Chen</span> is interested in{" "}
                          <span className="text-pink-500">Taylor Swift - Eras Tour</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">5 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#0a0b0e] rounded-lg">
                      <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        ED
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Emily Davis</span> set a reminder for{" "}
                          <span className="text-pink-500">Coachella 2026</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Watch Mode Tab */}
        {activeTab === "watch-mode" && (
          <>
            {/* Info Banner */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30 mb-8">
              <div className="flex items-start gap-4">
                <Eye className="size-6 text-blue-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="text-white text-lg font-semibold mb-2">Watch Mode Feature</div>
                  <div className="text-gray-300 text-sm mb-4">
                    When a friend invites you to their Watch Mode, you can spectate their queue journey in real-time. 
                    See their position, estimated wait time, and cheer them on as they get closer to purchasing tickets!
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="size-4 text-blue-500" />
                      <span className="text-gray-300">Real-time queue updates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="size-4 text-blue-500" />
                      <span className="text-gray-300">Live chat support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="size-4 text-blue-500" />
                      <span className="text-gray-300">Success notifications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-1 space-y-6">
                {/* Your Friends */}
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white text-xl">Your Friends</h2>
                    <button className="text-pink-500 hover:text-pink-400 text-sm">
                      <UserPlus className="size-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {friends.map((friend) => (
                      <div key={friend.id} className="flex items-center gap-3 p-3 bg-[#0a0b0e] rounded-lg hover:bg-[#12141a] transition-colors cursor-pointer">
                        <div className="relative">
                          <div className="size-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {friend.avatar}
                          </div>
                          {friend.status === "online" && (
                            <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#1a1d23]"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium truncate">{friend.name}</div>
                          <div className="text-gray-400 text-xs">
                            {friend.inQueue > 0 ? `In ${friend.inQueue} queue${friend.inQueue > 1 ? 's' : ''}` : 'Not in queue'}
                          </div>
                        </div>
                        <MessageCircle className="size-5 text-gray-400 hover:text-pink-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Watch Party Invites */}
                <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg p-6 border border-pink-500/30">
                  <h2 className="text-white text-xl mb-4">Invite Friends to Watch You</h2>
                  <p className="text-gray-300 text-sm mb-4">
                    When you're in a queue, you can invite friends to spectate your journey and chat with you!
                  </p>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                    Create Watch Party
                  </Button>
                </div>
              </div>

              {/* Right Column - Active Watch Parties */}
              <div className="lg:col-span-2">
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white text-xl">Active Watch Parties</h2>
                    {activeWatchParties.length > 0 && (
                      <div className="flex items-center gap-2 text-pink-500 text-sm">
                        <div className="size-2 bg-pink-500 rounded-full animate-pulse"></div>
                        {activeWatchParties.length} Live
                      </div>
                    )}
                  </div>

                  {activeWatchParties.length === 0 ? (
                    <div className="text-center py-12">
                      <Eye className="size-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400 text-sm mb-4">No active watch parties</p>
                      <p className="text-gray-500 text-xs mb-6">
                        When a friend invites you to watch their queue, it will appear here
                      </p>
                      <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg text-sm">
                        Invite Friends to Watch You
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {activeWatchParties.map((party) => (
                        <div key={party.id} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30 overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-48 h-40 md:h-auto relative">
                              <img 
                                src={party.image} 
                                alt={party.event}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-2 left-2 bg-pink-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                                <div className="size-2 bg-white rounded-full animate-pulse"></div>
                                LIVE
                              </div>
                            </div>
                            
                            <div className="flex-1 p-6">
                              {/* Friend Info */}
                              <div className="flex items-center gap-3 mb-4">
                                <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                  {party.friendAvatar}
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium">{party.friendName} is in queue</div>
                                  <div className="text-gray-400 text-xs">Invited you {party.invitedAt}</div>
                                </div>
                                <button className="p-2 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg transition-colors">
                                  <MessageCircle className="size-5 text-pink-400" />
                                </button>
                              </div>

                              {/* Event Info */}
                              <h3 className="text-white text-lg font-medium mb-3">{party.event}</h3>
                              <div className="flex flex-col gap-1 text-sm text-gray-400 mb-4">
                                <div className="flex items-center gap-2">
                                  <MapPin className="size-4" />
                                  <span>{party.venue}, {party.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="size-4" />
                                  <span>{party.date}</span>
                                </div>
                              </div>

                              {/* Queue Progress */}
                              <div className="bg-[#0a0b0e] rounded-lg p-4 mb-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div>
                                    <div className="text-gray-400 text-xs mb-1">Queue Position</div>
                                    <div className="text-white text-2xl font-bold">#{party.queuePosition.toLocaleString()}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-gray-400 text-xs mb-1">Estimated Wait</div>
                                    <div className="text-pink-400 text-lg font-semibold">{party.estimatedWait}</div>
                                  </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative h-2 bg-[#1a1d23] rounded-full overflow-hidden mb-2">
                                  <div 
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500"
                                    style={{ width: `${getQueueProgress(party.queuePosition, party.totalInQueue)}%` }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>Start</span>
                                  <span>{party.totalInQueue.toLocaleString()} in queue</span>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex gap-3">
                                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg text-sm flex items-center gap-2 flex-1">
                                  <MessageCircle className="size-4" />
                                  Chat with {party.friendName.split(' ')[0]}
                                </Button>
                                <Button className="bg-[#24272e] hover:bg-[#2a2e36] text-white px-4 py-2 rounded-lg text-sm">
                                  <Share2 className="size-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Activity Feed */}
                <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] mt-6">
                  <h2 className="text-white text-xl mb-6">Watch Party Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-[#0a0b0e] rounded-lg">
                      <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        SJ
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Sarah Johnson</span> invited you to watch their queue for{" "}
                          <span className="text-pink-500">Beyoncé Renaissance Tour</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#0a0b0e] rounded-lg">
                      <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        MC
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Mike Chen</span> got tickets for{" "}
                          <span className="text-green-500">Taylor Swift - Eras Tour</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">5 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-[#0a0b0e] rounded-lg">
                      <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        ED
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Emily Davis</span> joined the queue for{" "}
                          <span className="text-pink-500">Coachella 2026</span>
                        </p>
                        <p className="text-gray-500 text-xs mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}