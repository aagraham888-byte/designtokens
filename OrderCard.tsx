import { Link } from "react-router";
import { Truck, Shield, Check, ChevronRight, Smartphone, NfcIcon, Ticket, Sparkles, Lock, Zap, CreditCard } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function OrderCard() {
  const [selectedDesign, setSelectedDesign] = useState(1);
  const [customName, setCustomName] = useState("AMEERAH GRAHAM");

  const cardBenefits = [
    {
      icon: NfcIcon,
      title: "Tap-to-Enter Access",
      description: "Store all your digital tickets on one NFC-enabled card"
    },
    {
      icon: Ticket,
      title: "Multi-Event Storage",
      description: "Hold tickets for multiple events at once"
    },
    {
      icon: Smartphone,
      title: "Works Everywhere",
      description: "Compatible with all NFC-enabled venues"
    },
    {
      icon: Lock,
      title: "Secure & Encrypted",
      description: "Your tickets are protected with chip technology"
    },
  ];

  const cardDesigns = [
    {
      id: 1,
      name: "Pink Gradient",
      gradient: "from-pink-500 via-purple-500 to-pink-600",
      memberOnly: false
    },
    {
      id: 2,
      name: "Midnight Black",
      gradient: "from-gray-900 via-gray-800 to-black",
      memberOnly: false
    },
    {
      id: 3,
      name: "Neon Dreams",
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      memberOnly: true
    },
    {
      id: 4,
      name: "Gold Edition",
      gradient: "from-yellow-600 via-yellow-500 to-orange-500",
      memberOnly: true
    },
    {
      id: 5,
      name: "Holographic",
      gradient: "from-purple-600 via-pink-500 to-blue-500",
      memberOnly: true
    },
    {
      id: 6,
      name: "Custom Design",
      gradient: "from-pink-500 to-purple-500",
      memberOnly: true,
      custom: true
    },
  ];

  const getSelectedGradient = () => {
    const selected = cardDesigns.find(d => d.id === selectedDesign);
    return selected?.gradient || cardDesigns[0].gradient;
  };

  const selectedCardDesign = cardDesigns.find(d => d.id === selectedDesign);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/member-dashboard" className="text-pink-500 hover:text-pink-400 text-sm mb-4 inline-flex items-center gap-1">
            ← Back to Member Dashboard
          </Link>
          <h1 className="text-white text-3xl mb-2">Order Your Digital Ticket Card</h1>
          <p className="text-gray-400">A physical NFC card that holds all your digital tickets in one place</p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg p-4 border border-pink-500/30 mb-8">
          <div className="flex items-start gap-3">
            <NfcIcon className="size-5 text-pink-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-medium mb-1">What is a TicketFanGrub Card?</div>
              <div className="text-gray-300 text-sm">
                Instead of showing your phone at venues, simply tap your TicketFanGrub card at any NFC reader. 
                All your active tickets are stored on the card and automatically updated when you purchase new tickets.
                {selectedCardDesign?.memberOnly && (
                  <span className="text-pink-400 font-medium"> Members get exclusive design options!</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Card Preview & Customization */}
          <div className="space-y-6">
            {/* Card Preview */}
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <h2 className="text-white text-xl mb-6">Card Preview</h2>
              
              {/* Physical Card Mockup */}
              <div className="relative mb-6">
                <div className={`w-full aspect-[1.586/1] bg-gradient-to-br ${getSelectedGradient()} rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      <div className="text-white text-2xl font-bold mb-1">TicketFanGrub</div>
                      <div className="text-white/80 text-xs">DIGITAL TICKET CARD</div>
                    </div>
                    
                    <div className="space-y-3">
                      {/* NFC Chip Icon */}
                      <div className="flex items-center gap-2">
                        <div className="size-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <NfcIcon className="size-5 text-white" />
                        </div>
                        <div className="text-white/70 text-xs">NFC Enabled</div>
                      </div>
                      
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-white/60 text-xs mb-1">CARDHOLDER</div>
                          <div className="text-white font-semibold text-sm">{customName}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white/60 text-xs mb-1">MEMBER ID</div>
                          <div className="text-white font-semibold text-sm">TFG-4829</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Holographic Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                  
                  {/* Shimmer effect for holographic design */}
                  {selectedDesign === 5 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none"></div>
                  )}
                </div>

                {/* Card Shadow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getSelectedGradient()} blur-2xl -z-10 transform scale-90 opacity-50`}></div>
              </div>

              {/* Customization Section for Members */}
              {selectedCardDesign?.memberOnly && (
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="size-4 text-purple-400" />
                    <span className="text-purple-400 text-sm font-medium">Member Exclusive Design</span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    This design is only available to TicketFanGrub members. Upgrade your membership to unlock premium card options!
                  </p>
                </div>
              )}

              {/* Card Design Options */}
              <div>
                <h3 className="text-white text-sm mb-4 flex items-center gap-2">
                  Choose Design
                  <span className="text-gray-400 text-xs">(Free members: 2 options, Members: All designs)</span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {cardDesigns.map((design) => (
                    <button
                      key={design.id}
                      onClick={() => setSelectedDesign(design.id)}
                      disabled={design.memberOnly}
                      className={`relative aspect-[1.586/1] rounded-lg bg-gradient-to-br ${design.gradient} ${
                        selectedDesign === design.id ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-[#1a1d23]' : ''
                      } hover:scale-105 transition-transform ${design.memberOnly ? 'opacity-50' : ''}`}
                    >
                      {selectedDesign === design.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white rounded-full p-1">
                            <Check className="size-4 text-pink-500" />
                          </div>
                        </div>
                      )}
                      {design.memberOnly && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
                          <Lock className="size-4 text-white" />
                        </div>
                      )}
                      {design.custom && (
                        <div className="absolute bottom-1 right-1">
                          <Sparkles className="size-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <p className="text-gray-400 text-xs">{selectedCardDesign?.name}</p>
                </div>
              </div>

              {/* Custom Name Input */}
              <div className="mt-6">
                <label className="text-gray-300 text-sm mb-2 block">Personalize Card Name</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  maxLength={20}
                  placeholder="YOUR NAME"
                  className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 font-semibold"
                />
                <p className="text-gray-500 text-xs mt-1">This will appear on your physical card</p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <h2 className="text-white text-xl mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Order Your Card</div>
                    <div className="text-gray-400 text-sm">Choose your design and enter shipping details</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Receive & Activate</div>
                    <div className="text-gray-400 text-sm">Card arrives in 5-7 days. Activate via app or website</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Load Your Tickets</div>
                    <div className="text-gray-400 text-sm">All tickets automatically sync to your card</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Tap to Enter</div>
                    <div className="text-gray-400 text-sm">Simply tap your card at venue NFC readers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <h2 className="text-white text-xl mb-6">Card Benefits</h2>
              <div className="space-y-4">
                {cardBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-pink-500/20 rounded-lg flex-shrink-0">
                      <benefit.icon className="size-5 text-pink-500" />
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">{benefit.title}</div>
                      <div className="text-gray-400 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <h2 className="text-white text-xl mb-6">Shipping Information</h2>
              <form className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Ameerah Graham"
                    className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Address Line 1</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Address Line 2</label>
                  <input
                    type="text"
                    placeholder="Apt 4B (optional)"
                    className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">City</label>
                    <input
                      type="text"
                      placeholder="New York"
                      className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">State</label>
                    <input
                      type="text"
                      placeholder="NY"
                      className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">ZIP Code</label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Country</label>
                    <input
                      type="text"
                      placeholder="United States"
                      className="w-full bg-[#0a0b0e] border border-[#24272e] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Delivery Options */}
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <h2 className="text-white text-xl mb-6">Delivery Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 bg-[#0a0b0e] rounded-lg border-2 border-pink-500 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="delivery" className="text-pink-500" defaultChecked />
                    <div>
                      <div className="text-white font-medium">Standard Shipping</div>
                      <div className="text-gray-400 text-sm">5-7 business days</div>
                    </div>
                  </div>
                  <div className="text-pink-500 font-semibold">FREE</div>
                </label>

                <label className="flex items-center justify-between p-4 bg-[#0a0b0e] rounded-lg border border-[#24272e] hover:border-pink-500/50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="delivery" className="text-pink-500" />
                    <div>
                      <div className="text-white font-medium">Express Shipping</div>
                      <div className="text-gray-400 text-sm">2-3 business days</div>
                    </div>
                  </div>
                  <div className="text-white font-semibold">$9.99</div>
                </label>

                <label className="flex items-center justify-between p-4 bg-[#0a0b0e] rounded-lg border border-[#24272e] hover:border-pink-500/50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="delivery" className="text-pink-500" />
                    <div>
                      <div className="text-white font-medium">Overnight</div>
                      <div className="text-gray-400 text-sm">Next business day</div>
                    </div>
                  </div>
                  <div className="text-white font-semibold">$19.99</div>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-500/20">
              <h2 className="text-white text-xl mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-gray-300">
                  <span>Digital Ticket Card</span>
                  <span className="text-pink-400 font-semibold">FREE</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span>Card Design ({selectedCardDesign?.name})</span>
                  <span>Included</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="h-px bg-purple-500/20 my-4"></div>
                <div className="flex items-center justify-between text-white text-lg font-semibold">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                Order Your Card
                <ChevronRight className="size-4" />
              </Button>

              <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                <Shield className="size-4" />
                <span>Secure checkout • Free for all users</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
              <div className="flex items-start gap-3 mb-4">
                <Truck className="size-5 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-2">Free Card for Everyone</div>
                  <div className="text-gray-400 text-sm">
                    Your TicketFanGrub card is completely free with standard shipping. 
                    Members get access to exclusive designs and customization options!
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="size-5 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-medium mb-2">Instant Digital Access</div>
                  <div className="text-gray-400 text-sm">
                    While waiting for your physical card, you can still use digital tickets on your phone. 
                    Once your card arrives, all tickets automatically sync!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}