import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Upload, Calendar, MapPin, Clock, DollarSign, Users, Info } from "lucide-react";
import { Button } from "../components/ui/button";

export function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    date: "",
    time: "",
    venue: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    capacity: "",
    ticketPrice: "",
    currency: "USD",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Event data:", formData);
    navigate("/seller-dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-white text-4xl mb-2">Create New Event</h1>
        <p className="text-gray-400">Fill in the details to create your event</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <form onSubmit={handleSubmit} className="bg-[#24272e] rounded-2xl p-8 border border-[#2a2d35]">
          {/* Event Image Upload */}
          <div className="mb-8">
            <label className="text-white mb-2 flex items-center gap-2">
              <Upload className="size-4" />
              Event Image
            </label>
            <div className="mt-2 border-2 border-dashed border-[#2a2d35] rounded-lg p-12 text-center hover:border-pink-500 transition-colors cursor-pointer">
              <Upload className="size-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">Click to upload or drag and drop</p>
              <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <div>
              <label className="text-white mb-2 block">Event Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Summer Music Festival 2025"
                className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="text-white mb-2 block">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your event..."
                rows={4}
                className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none resize-none"
                required
              />
            </div>

            <div>
              <label className="text-white mb-2 block">Genre/Category *</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                required
              >
                <option value="">Select a genre</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="hip-hop">Hip-Hop</option>
                <option value="electronic">Electronic</option>
                <option value="jazz">Jazz</option>
                <option value="country">Country</option>
                <option value="classical">Classical</option>
                <option value="sports">Sports</option>
                <option value="comedy">Comedy</option>
                <option value="theater">Theater</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-white mb-2 flex items-center gap-2">
                  <Calendar className="size-4" />
                  Event Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-white mb-2 flex items-center gap-2">
                  <Clock className="size-4" />
                  Event Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Venue Information */}
            <div className="border-t border-[#2a2d35] pt-6">
              <h3 className="text-white text-lg mb-4 flex items-center gap-2">
                <MapPin className="size-5" />
                Venue Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-white mb-2 block">Venue Name *</label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="e.g., Madison Square Garden"
                    className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-white mb-2 block">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g., 4 Pennsylvania Plaza"
                    className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-white mb-2 block">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New York"
                      className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-white mb-2 block">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="NY"
                      className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-white mb-2 block">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="10001"
                      className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Information */}
            <div className="border-t border-[#2a2d35] pt-6">
              <h3 className="text-white text-lg mb-4 flex items-center gap-2">
                <DollarSign className="size-5" />
                Ticket Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white mb-2 flex items-center gap-2">
                    <Users className="size-4" />
                    Venue Capacity *
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="e.g., 20000"
                    className="w-full bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-white mb-2 block">Starting Ticket Price *</label>
                  <div className="flex gap-2">
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="bg-[#2a2d35] text-white rounded-lg px-3 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                    <input
                      type="number"
                      name="ticketPrice"
                      value={formData.ticketPrice}
                      onChange={handleChange}
                      placeholder="95.00"
                      step="0.01"
                      className="flex-1 bg-[#2a2d35] text-white rounded-lg px-4 py-3 border border-[#2a2d35] focus:border-pink-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info Notice */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex gap-3">
              <Info className="size-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-blue-400 text-sm mb-1">Event Review</p>
                <p className="text-gray-400 text-sm">
                  Your event will be reviewed within 24 hours. You'll receive a notification once it's approved.
                </p>
              </div>
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
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}