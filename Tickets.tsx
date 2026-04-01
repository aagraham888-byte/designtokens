import { useState } from "react";
import { Link } from "react-router";
import { QrCode, Download, Share2, MapPin, Calendar, Clock, Ticket, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProfileSidebar } from "../components/ProfileSidebar";

interface TicketData {
  id: number;
  eventName: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  section: string;
  row: string;
  seat: string;
  price: number;
  ticketNumber: string;
  barcode: string;
  status: "upcoming" | "past";
  image: string;
}

const ticketsData: TicketData[] = [
  {
    id: 1,
    eventName: "The Headliners World Tour",
    artist: "The Headliners",
    date: "July 15, 2026",
    time: "8:00 PM",
    venue: "Madison Square Garden",
    section: "Floor A",
    row: "12",
    seat: "8",
    price: 120.00,
    ticketNumber: "TFG-2026-07-15-001234",
    barcode: "1234567890123",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpY3xlbnwxfHx8fDE3NzQ4NjkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    eventName: "EDM Festival 2026",
    artist: "Various Artists",
    date: "October 10, 2026",
    time: "10:00 PM",
    venue: "Electric Arena",
    section: "VIP",
    row: "5",
    seat: "22",
    price: 110.00,
    ticketNumber: "TFG-2026-10-10-005678",
    barcode: "9876543210987",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZG0lMjBjb25jZXJ0JTIwZGolMjBsaWdodHN8ZW58MXx8fHwxNzc0OTI2Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    eventName: "Rock Legends Live",
    artist: "Classic Rockers",
    date: "February 20, 2026",
    time: "7:30 PM",
    venue: "Staples Center",
    section: "Section 201",
    row: "8",
    seat: "15",
    price: 95.00,
    ticketNumber: "TFG-2026-02-20-002456",
    barcode: "5432167890543",
    status: "past",
    image: "https://images.unsplash.com/photo-1762917903361-99e0164dbcc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1hbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzc0ODUzODUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Tickets() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredTickets = ticketsData.filter((ticket) => {
    if (filter === "all") return true;
    return ticket.status === filter;
  });

  return (
    <div>
      <ProfileSidebar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-3xl mb-2">My Tickets</h1>
          <p className="text-gray-400">View and manage your digital ticket passes</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg text-sm transition-colors ${
              filter === "all"
                ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                : "bg-[#1a1d23] text-gray-300 hover:bg-[#24272e]"
            }`}
          >
            All Tickets
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-6 py-2 rounded-lg text-sm transition-colors ${
              filter === "upcoming"
                ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                : "bg-[#1a1d23] text-gray-300 hover:bg-[#24272e]"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`px-6 py-2 rounded-lg text-sm transition-colors ${
              filter === "past"
                ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                : "bg-[#1a1d23] text-gray-300 hover:bg-[#24272e]"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Tickets Grid */}
        {filteredTickets.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTickets.map((ticket) => (
              <div key={ticket.id} className="relative group">
                {/* Digital Pass Card */}
                <div className={`relative bg-gradient-to-br from-[#1a1d23] to-[#24272e] rounded-2xl overflow-hidden border-2 ${
                  ticket.status === "upcoming" 
                    ? "border-pink-500/30" 
                    : "border-gray-700/30"
                }`}>
                  {/* Hologram Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-60 animate-hologram pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
                  
                  {/* Past Event Overlay */}
                  {ticket.status === "past" && (
                    <div className="absolute top-6 right-6 bg-gray-700/90 text-white px-4 py-2 rounded-full text-xs font-medium z-10">
                      EVENT ENDED
                    </div>
                  )}

                  <div className="relative p-6">
                    {/* Event Image */}
                    <div className="relative h-32 mb-6 rounded-lg overflow-hidden">
                      <img 
                        src={ticket.image} 
                        alt={ticket.eventName}
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d23] to-transparent"></div>
                    </div>

                    {/* Ticket Info */}
                    <div className="mb-6">
                      <h3 className="text-white text-2xl mb-2">{ticket.eventName}</h3>
                      <p className="text-pink-400 text-lg mb-4">{ticket.artist}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start gap-2">
                          <Calendar className="size-4 text-gray-400 mt-1" />
                          <div>
                            <div className="text-gray-400 text-xs">Date</div>
                            <div className="text-white text-sm">{ticket.date}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="size-4 text-gray-400 mt-1" />
                          <div>
                            <div className="text-gray-400 text-xs">Time</div>
                            <div className="text-white text-sm">{ticket.time}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 col-span-2">
                          <MapPin className="size-4 text-gray-400 mt-1" />
                          <div>
                            <div className="text-gray-400 text-xs">Venue</div>
                            <div className="text-white text-sm">{ticket.venue}</div>
                          </div>
                        </div>
                      </div>

                      {/* Seating Info */}
                      <div className="bg-[#0a0b0e]/50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-gray-400 text-xs mb-1">Section</div>
                            <div className="text-white font-medium">{ticket.section}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs mb-1">Row</div>
                            <div className="text-white font-medium">{ticket.row}</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs mb-1">Seat</div>
                            <div className="text-white font-medium">{ticket.seat}</div>
                          </div>
                        </div>
                      </div>

                      {/* Barcode/QR Code Area */}
                      <div className="bg-white/95 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <QrCode className="size-16 text-black" />
                        </div>
                        <div className="text-center text-black text-xs font-mono">
                          {ticket.barcode}
                        </div>
                        <div className="text-center text-gray-600 text-xs mt-2">
                          {ticket.ticketNumber}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg flex items-center justify-center gap-2">
                          <Download className="size-4" />
                          Download
                        </Button>
                        <Button className="flex-1 bg-[#1a1d23] hover:bg-[#24272e] text-white rounded-lg flex items-center justify-center gap-2 border border-[#24272e]">
                          <Share2 className="size-4" />
                          Share
                        </Button>
                      </div>
                    </div>

                    {/* Ticket Price */}
                    <div className="border-t border-gray-700/50 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Ticket Price</span>
                        <span className="text-white text-lg font-medium">${ticket.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Ticket className="size-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-white text-xl mb-2">No tickets found</h3>
            <p className="text-gray-400 mb-6">You don't have any {filter === "all" ? "" : filter} tickets yet</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg">
                Browse Events
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}