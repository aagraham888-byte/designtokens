import { useState } from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const genres = ["All", "Pop", "Rock", "Hip-Hop", "Electronic", "Country", "R&B", "Jazz"];

interface Event {
  id: number;
  genre: string;
  title: string;
  date: string;
  venue: string;
  price: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    genre: "POP",
    title: "The Headliners",
    date: "Tue, Jul 15, 2025 · 8:00 PM",
    venue: "Madison Square Garden",
    price: "From $120",
    image: "https://images.unsplash.com/photo-1656283384093-1e227e621fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpY3xlbnwxfHx8fDE3NzQ4NjkwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    genre: "ROCK",
    title: "Classic Rockers",
    date: "Wed, Aug 20, 2025 · 7:30 PM",
    venue: "Staples Center",
    price: "From $95",
    image: "https://images.unsplash.com/photo-1762917903361-99e0164dbcc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1hbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzc0ODUzODUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    genre: "HIP-HOP",
    title: "Rap Collective",
    date: "Fri, Sep 5, 2025 · 9:00 PM",
    venue: "Barclays Center",
    price: "From $85",
    image: "https://images.unsplash.com/photo-1729156574338-d39065184b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjByYXBwZXIlMjBjb25jZXJ0fGVufDF8fHx8MTc3NDkyMTM4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    genre: "ELECTRONIC",
    title: "EDM Festival",
    date: "Sat, Oct 10, 2025 · 10:00 PM",
    venue: "Electric Arena",
    price: "From $110",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZG0lMjBjb25jZXJ0JTIwZGolMjBsaWdodHN8ZW58MXx8fHwxNzc0OTI2Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    genre: "JAZZ",
    title: "Jazz Night",
    date: "Thu, Nov 12, 2025 · 8:00 PM",
    venue: "Blue Note",
    price: "From $60",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwc2F4b3Bob25lJTIwbGl2ZXxlbnwxfHx8fDE3NzQ5MjYzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    genre: "COUNTRY",
    title: "Country Stars",
    date: "Fri, Dec 5, 2025 · 7:00 PM",
    venue: "Grand Ole Opry",
    price: "From $75",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwbXVzaWMlMjBndWl0YXJ8ZW58MXx8fHwxNzc0OTI2NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Home() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (eventId: number) => {
    setFavorites((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const filteredEvents =
    selectedGenre === "All"
      ? events
      : events.filter((event) => event.genre === selectedGenre.toUpperCase().replace("-", " "));

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-16 pb-12 px-6 text-center">
        <h1 className="text-white text-5xl mb-4">Tickets Without the Chaos</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Fair-price tickets, queue transparency, and member perks — all in one place.
        </p>
        <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 rounded-lg text-lg">
          Browse Events
        </Button>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-3xl">Upcoming Events</h2>
          <Link to="/" className="text-pink-500 hover:text-pink-400 text-sm">
            See All Events →
          </Link>
        </div>

        {/* Genre Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedGenre === genre
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                  : "bg-[#1a1d23] text-gray-300 hover:bg-[#24272e]"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Link
              key={event.id}
              to={`/event/${event.id}/queue`}
              className="bg-[#1a1d23] rounded-lg overflow-hidden hover:bg-[#24272e] transition-colors cursor-pointer group block"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="size-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(event.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <Heart
                    className={`size-5 ${
                      favorites.includes(event.id)
                        ? "fill-pink-500 text-pink-500"
                        : "text-white"
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <div className="text-pink-500 text-xs mb-2">{event.genre}</div>
                <h3 className="text-white text-lg mb-1">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{event.date}</p>
                <p className="text-gray-400 text-sm mb-3">{event.venue}</p>
                <p className="text-white">{event.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Membership CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-[#1a1d23] to-[#24272e] rounded-2xl p-12 text-center border border-[#2a2d35]">
          <h2 className="text-white text-3xl mb-4">Become a Member</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Unlock presale access, fair-price tickets, and priority queuing.
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 rounded-lg text-lg">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}