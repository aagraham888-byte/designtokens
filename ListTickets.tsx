import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Ticket, DollarSign, MapPin, Info, Upload } from "lucide-react";
import { Button } from "../components/ui/button";

export function ListTickets() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    event: "",
    section: "",
    row: "",
    seatStart: "",
    seatEnd: "",
    quantity: "",
    price: "",
    delivery: "mobile",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Listing data:", formData);
    navigate("/seller-dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Mock event data - in real app this would come from API
  const availableEvents = [
    { id: 1, name: "Classic Rockers - Aug 20, 2025", venue: "Staples Center" },
    { id: 2, name: "Summer Music Fest - Jul 15, 2025", venue: "Central Park" },
    { id: 3, name: "Jazz Night - Sep 5, 2025", venue: "Blue Note" },
  ];

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-white text-4xl mb-2">List Tickets for Sale</h1>
        <p className="text-gray-400">Fill in your ticket details to create a listing</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <form onSubmit={handleSubmit} className="bg-[#24272e] rounded-2xl p-8 border border-[#2a2d35]">
          {/* Event Selection */}
          <div className="mb-8">
            <label className="text-white mb-2 block">Select Event *</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
              required
            >
              <option value="">Choose an event</option>
              {availableEvents.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </select>
            <p className="text-gray-500 text-sm mt-2">
              Don't see your event? <Link to="/create-event" className="text-pink-500 hover:text-pink-400">Create a new event</Link>
            </p>
          </div>

          {/* Seat Information */}
          <div className="border-t border-[#2a2d35] pt-6">
            <h3 className="text-white text-lg mb-4 flex items-center gap-2">
              <MapPin className="size-5" />
              Seat Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-white mb-2 block">Section *</label>
                <input
                  type="text"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  placeholder="e.g., Floor A, VIP, Balcony B"
                  className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-white mb-2 block">Row *</label>
                  <input
                    type="text"
                    name="row"
                    value={formData.row}
                    onChange={handleChange}
                    placeholder="e.g., 12"
                    className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-white mb-2 block">Seat Start *</label>
                  <input
                    type="text"
                    name="seatStart"
                    value={formData.seatStart}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                    className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-white mb-2 block">Seat End</label>
                  <input
                    type="text"
                    name="seatEnd"
                    value={formData.seatEnd}
                    onChange={handleChange}
                    placeholder="e.g., 8"
                    className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-white mb-2 flex items-center gap-2">
                  <Ticket className="size-4" />
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Number of tickets"
                  min="1"
                  className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="border-t border-[#2a2d35] pt-6 mt-6">
            <h3 className="text-white text-lg mb-4 flex items-center gap-2">
              <DollarSign className="size-5" />
              Pricing
            </h3>

            <div>
              <label className="text-white mb-2 block">Price per Ticket (USD) *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="120.00"
                  step="0.01"
                  min="0"
                  className="w-full bg-[#2a2d35] text-white rounded-lg pl-8 pr-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Suggested price based on market: $95 - $150
              </p>
            </div>

            {/* Pricing Breakdown */}
            <div className="mt-4 bg-[#2a2d35] rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Your Price</span>
                <span className="text-white">${formData.price || "0.00"}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Service Fee (10%)</span>
                <span className="text-white">-${formData.price ? (parseFloat(formData.price) * 0.1).toFixed(2) : "0.00"}</span>
              </div>
              <div className="border-t border-[#1a1d23] pt-2 flex justify-between">
                <span className="text-white">You'll Receive</span>
                <span className="text-green-500 font-semibold">
                  ${formData.price ? (parseFloat(formData.price) * 0.9).toFixed(2) : "0.00"}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="border-t border-[#2a2d35] pt-6 mt-6">
            <h3 className="text-white text-lg mb-4">Delivery Method</h3>

            <div className="space-y-3">
              <label className="flex items-center gap-3 bg-[#2a2d35] p-4 rounded-lg cursor-pointer hover:bg-[#2f3339] transition-colors">
                <input
                  type="radio"
                  name="delivery"
                  value="mobile"
                  checked={formData.delivery === "mobile"}
                  onChange={handleChange}
                  className="text-pink-500"
                />
                <div>
                  <div className="text-white">Mobile Transfer</div>
                  <div className="text-gray-400 text-sm">Instant delivery via mobile app</div>
                </div>
              </label>

              <label className="flex items-center gap-3 bg-[#2a2d35] p-4 rounded-lg cursor-pointer hover:bg-[#2f3339] transition-colors">
                <input
                  type="radio"
                  name="delivery"
                  value="email"
                  checked={formData.delivery === "email"}
                  onChange={handleChange}
                  className="text-pink-500"
                />
                <div>
                  <div className="text-white">Email Delivery</div>
                  <div className="text-gray-400 text-sm">PDF tickets sent via email</div>
                </div>
              </label>

              <label className="flex items-center gap-3 bg-[#2a2d35] p-4 rounded-lg cursor-pointer hover:bg-[#2f3339] transition-colors">
                <input
                  type="radio"
                  name="delivery"
                  value="physical"
                  checked={formData.delivery === "physical"}
                  onChange={handleChange}
                  className="text-pink-500"
                />
                <div>
                  <div className="text-white">Physical Tickets</div>
                  <div className="text-gray-400 text-sm">Hard copy tickets via mail</div>
                </div>
              </label>
            </div>
          </div>

          {/* Upload Ticket Proof */}
          <div className="border-t border-[#2a2d35] pt-6 mt-6">
            <label className="text-white mb-2 flex items-center gap-2">
              <Upload className="size-4" />
              Upload Ticket Proof (Optional)
            </label>
            <div className="mt-2 border-2 border-dashed border-[#2a2d35] rounded-lg p-8 text-center hover:border-pink-500 transition-colors cursor-pointer">
              <Upload className="size-8 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 mb-1">Upload screenshot or PDF of your tickets</p>
              <p className="text-gray-500 text-sm">This helps verify your listing</p>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="border-t border-[#2a2d35] pt-6 mt-6">
            <label className="text-white mb-2 block">Additional Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional information about the tickets..."
              rows={3}
              className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none resize-none"
            />
          </div>

          {/* Info Notice */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex gap-3 mt-6">
            <Info className="size-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-blue-400 text-sm mb-1">Listing Guidelines</p>
              <p className="text-gray-400 text-sm">
                Your listing will be live immediately. Make sure all information is accurate. You can edit or remove your listing at any time from your dashboard.
              </p>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-[#2a2d35]">
            <Button
              type="button"
              onClick={() => navigate("/seller-dashboard")}
              className="flex-1 bg-[#2a2d35] hover:bg-[#2f3339] text-white rounded-lg py-3"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-lg py-3"
            >
              List Tickets
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}