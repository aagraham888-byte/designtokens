import { Link } from "react-router";
import { Shield, TrendingDown, Clock, Heart, MapPin, Calendar, DollarSign, AlertCircle, CheckCircle, Bell } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function FairPriceTickets() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const fairPriceEvents = [
    {
      id: 1,
      name: "Taylor Swift - Eras Tour Extended",
      venue: "MetLife Stadium",
      location: "East Rutherford, NJ",
      date: "Sep 22, 2026",
      originalPrice: "$350",
      fairPrice: "$200",
      savings: "$150",
      savingsPercent: "43%",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      availability: "Limited",
      verified: true,
      category: "concert"
    },
    {
      id: 2,
      name: "Drake - For All The Dogs Tour",
      venue: "Madison Square Garden",
      location: "New York, NY",
      date: "Jul 18, 2026",
      originalPrice: "$280",
      fairPrice: "$180",
      savings: "$100",
      savingsPercent: "36%",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      availability: "Good",
      verified: true,
      category: "concert"
    },
    {
      id: 3,
      name: "NBA Finals 2026 - Game 3",
      venue: "Chase Center",
      location: "San Francisco, CA",
      date: "Jun 10, 2026",
      originalPrice: "$500",
      fairPrice: "$385",
      savings: "$115",
      savingsPercent: "23%",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      availability: "Low",
      verified: true,
      category: "sports"
    },
    {
      id: 4,
      name: "Beyoncé Renaissance Tour 2026",
      venue: "SoFi Stadium",
      location: "Los Angeles, CA",
      date: "Aug 15, 2026",
      originalPrice: "$400",
      fairPrice: "$275",
      savings: "$125",
      savingsPercent: "31%",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      availability: "Good",
      verified: true,
      category: "concert"
    },
    {
      id: 5,
      name: "Hamilton - Broadway Revival",
      venue: "Richard Rodgers Theatre",
      location: "New York, NY",
      date: "May 20, 2026",
      originalPrice: "$350",
      fairPrice: "$220",
      savings: "$130",
      savingsPercent: "37%",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      availability: "Limited",
      verified: true,
      category: "theater"
    },
    {
      id: 6,
      name: "Coachella Valley Music Festival",
      venue: "Empire Polo Club",
      location: "Indio, CA",
      date: "Apr 10-12, 2026",
      originalPrice: "$999",
      fairPrice: "$750",
      savings: "$249",
      savingsPercent: "25%",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
      availability: "Good",
      verified: true,
      category: "festival"
    }
  ];

  const filters = [
    { id: "all", label: "All Events" },
    { id: "concert", label: "Concerts" },
    { id: "sports", label: "Sports" },
    { id: "theater", label: "Theater" },
    { id: "festival", label: "Festivals" }
  ];

  const filteredEvents = selectedFilter === "all" 
    ? fairPriceEvents 
    : fairPriceEvents.filter(event => event.category === selectedFilter);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Good":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Limited":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Low":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
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
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Shield className="size-8 text-green-500" />
            </div>
            <div>
              <h1 className="text-white text-3xl">Fair Price Tickets</h1>
              <p className="text-gray-400">No scalpers. No markups. Just fair prices.</p>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg p-6 border border-green-500/30 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="size-6 text-green-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="text-white text-lg font-semibold mb-2">What are Fair Price Tickets?</div>
              <div className="text-gray-300 text-sm mb-4">
                TicketFanGrub partners with verified sellers to offer tickets at reasonable prices without excessive markups. 
                All tickets are price-capped to protect fans from scalping and ensure fair access to events.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="text-gray-300">Price-capped at 150% of face value</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="text-gray-300">Verified sellers only</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="size-4 text-green-500" />
                  <span className="text-gray-300">100% authentic guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown className="size-5 text-green-500" />
              <div className="text-gray-400 text-sm">Average Savings</div>
            </div>
            <div className="text-white text-3xl font-bold">32%</div>
            <div className="text-gray-500 text-xs mt-1">vs. resale market</div>
          </div>

          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="size-5 text-blue-500" />
              <div className="text-gray-400 text-sm">Verified Sellers</div>
            </div>
            <div className="text-white text-3xl font-bold">100%</div>
            <div className="text-gray-500 text-xs mt-1">authentic tickets</div>
          </div>

          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="size-5 text-purple-500" />
              <div className="text-gray-400 text-sm">Available Now</div>
            </div>
            <div className="text-white text-3xl font-bold">{fairPriceEvents.length}</div>
            <div className="text-gray-500 text-xs mt-1">events with fair pricing</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1a1d23] rounded-lg p-4 border border-[#24272e] mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-gray-400 text-sm">Filter by:</span>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'bg-[#0a0b0e] text-gray-400 hover:text-white hover:bg-[#12141a]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-[#1a1d23] rounded-lg overflow-hidden border border-[#24272e] hover:border-green-500/50 transition-all">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                {event.verified && (
                  <div className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                    <Shield className="size-3" />
                    Fair Price
                  </div>
                )}
                <div className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full border font-medium ${getAvailabilityColor(event.availability)}`}>
                  {event.availability}
                </div>
                <button className="absolute bottom-3 right-3 p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-pink-500/80 transition-colors">
                  <Heart className="size-5 text-white" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-white text-lg font-semibold mb-3">{event.name}</h3>
                
                <div className="flex flex-col gap-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 flex-shrink-0" />
                    <span>{event.venue}, {event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Price Comparison */}
                <div className="bg-[#0a0b0e] rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-gray-500 text-xs mb-1">Typical Resale Price</div>
                      <div className="text-gray-400 line-through">{event.originalPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-500 text-xs mb-1">Fair Price</div>
                      <div className="text-green-400 text-2xl font-bold">{event.fairPrice}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#1a1d23]">
                    <div className="text-green-400 text-sm font-semibold">You Save: {event.savings}</div>
                    <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-semibold">
                      -{event.savingsPercent}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link to={`/event/${event.id}/queue`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      Get Tickets
                    </Button>
                  </Link>
                  <Button className="bg-[#24272e] hover:bg-[#2a2e36] text-white px-4 py-2 rounded-lg text-sm">
                    <Bell className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-[#1a1d23] rounded-lg p-8 border border-[#24272e] mt-8">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">How Fair Price Tickets Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="size-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="size-8 text-green-500" />
              </div>
              <div className="text-white font-semibold mb-2">1. Verified Sellers</div>
              <div className="text-gray-400 text-sm">We partner with trusted sellers who agree to fair pricing</div>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="size-8 text-blue-500" />
              </div>
              <div className="text-white font-semibold mb-2">2. Price Caps</div>
              <div className="text-gray-400 text-sm">Maximum 150% of original ticket value - no excessive markups</div>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="size-8 text-purple-500" />
              </div>
              <div className="text-white font-semibold mb-2">3. Authentication</div>
              <div className="text-gray-400 text-sm">Every ticket is verified authentic before listing</div>
            </div>
            
            <div className="text-center">
              <div className="size-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="size-8 text-pink-500" />
              </div>
              <div className="text-white font-semibold mb-2">4. Fan First</div>
              <div className="text-gray-400 text-sm">More fans get access at prices they can afford</div>
            </div>
          </div>
        </div>

        {/* Alert Settings */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30 mt-8">
          <div className="flex items-start gap-4">
            <Bell className="size-6 text-purple-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <div className="text-white text-lg font-semibold mb-2">Get Fair Price Alerts</div>
              <div className="text-gray-300 text-sm mb-4">
                We'll notify you when events you're watching become available at fair prices, so you never miss a deal.
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                Enable Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}