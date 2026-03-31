import { Link } from "react-router";
import { Crown, Star, Zap, Gift, Ticket, Heart, BadgeCheck, Shield } from "lucide-react";
import { Button } from "../components/ui/button";

export function Membership() {
  const membershipTiers = [
    {
      id: 1,
      name: "Free",
      price: 0,
      period: "forever",
      icon: Ticket,
      color: "gray",
      benefits: [
        "Browse all events",
        "Basic customer support",
        "Standard ticket prices",
        "Email notifications"
      ],
      current: true
    },
    {
      id: 2,
      name: "Premium",
      price: 9.99,
      period: "month",
      icon: Star,
      color: "pink",
      popular: true,
      benefits: [
        "5% off all ticket purchases",
        "Priority customer support",
        "Early access to ticket sales",
        "No service fees",
        "Exclusive member events",
        "Birthday rewards"
      ]
    },
    {
      id: 3,
      name: "VIP",
      price: 24.99,
      period: "month",
      icon: Crown,
      color: "purple",
      benefits: [
        "15% off all ticket purchases",
        "24/7 VIP support line",
        "First access to all events",
        "No service fees",
        "VIP lounge access",
        "Free ticket insurance",
        "Concierge service",
        "Exclusive meet & greets"
      ]
    }
  ];

  const perks = [
    {
      icon: Zap,
      title: "Lightning Fast Access",
      description: "Get priority access to the hottest events before they sell out"
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Earn points with every purchase and unlock special rewards"
    },
    {
      icon: Heart,
      title: "Member-Only Events",
      description: "Access exclusive events and experiences not available to the public"
    },
    {
      icon: Shield,
      title: "Purchase Protection",
      description: "Enjoy peace of mind with complimentary ticket insurance"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b0e]">
      {/* Navigation */}
      <nav className="bg-[#0a0b0e] border-b border-[#1a1d23]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-semibold">TicketFanGrub</Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">Events</Link>
            <Link to="/profile" className="text-gray-400 hover:text-white text-sm">Profile</Link>
            <Link to="/seller-dashboard" className="text-gray-400 hover:text-white text-sm">Sell Tickets</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="size-8 text-pink-500" />
          </div>
          <h1 className="text-white text-5xl mb-4">Choose Your Experience</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock exclusive benefits, save on tickets, and get VIP access to the best events
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {membershipTiers.map((tier) => {
            const IconComponent = tier.icon;
            const isPopular = tier.popular;
            
            return (
              <div 
                key={tier.id} 
                className={`relative bg-[#1a1d23] rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                  isPopular 
                    ? "border-pink-500/50 shadow-2xl shadow-pink-500/20" 
                    : "border-[#24272e]"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <BadgeCheck className="size-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {tier.current && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Current Plan
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${
                    tier.color === "pink" 
                      ? "bg-pink-500/20" 
                      : tier.color === "purple" 
                      ? "bg-purple-500/20" 
                      : "bg-gray-600/20"
                  }`}>
                    <IconComponent className={`size-8 ${
                      tier.color === "pink" 
                        ? "text-pink-500" 
                        : tier.color === "purple" 
                        ? "text-purple-500" 
                        : "text-gray-400"
                    }`} />
                  </div>
                  <h3 className="text-white text-2xl mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-white text-4xl font-bold">${tier.price}</span>
                    <span className="text-gray-400">/{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <BadgeCheck className={`size-5 ${
                          tier.color === "pink" 
                            ? "text-pink-500" 
                            : tier.color === "purple" 
                            ? "text-purple-500" 
                            : "text-gray-400"
                        }`} />
                      </div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 rounded-lg transition-all ${
                    tier.current
                      ? "bg-gray-600 text-white cursor-default"
                      : isPopular
                      ? "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
                      : "bg-[#24272e] hover:bg-[#2a2e36] text-white border border-[#2a2e36]"
                  }`}
                  disabled={tier.current}
                >
                  {tier.current ? "Current Plan" : "Upgrade Now"}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Member Perks */}
        <div className="mb-16">
          <h2 className="text-white text-3xl text-center mb-12">Member Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const IconComponent = perk.icon;
              return (
                <div key={index} className="bg-[#1a1d23] rounded-xl p-6 border border-[#24272e] hover:border-pink-500/50 transition-colors">
                  <div className="p-3 bg-pink-500/20 rounded-lg inline-flex mb-4">
                    <IconComponent className="size-6 text-pink-500" />
                  </div>
                  <h3 className="text-white text-lg mb-2">{perk.title}</h3>
                  <p className="text-gray-400 text-sm">{perk.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#1a1d23] rounded-2xl p-8 border border-[#24272e]">
          <h2 className="text-white text-3xl text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-lg mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-400 text-sm">Yes, you can cancel your membership at any time with no penalties or fees.</p>
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">Do discounts apply to all events?</h4>
              <p className="text-gray-400 text-sm">Yes, member discounts apply to all ticketed events on our platform.</p>
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">How do I upgrade my membership?</h4>
              <p className="text-gray-400 text-sm">Click "Upgrade Now" on any tier above. You'll only pay the difference for the current billing period.</p>
            </div>
            <div>
              <h4 className="text-white text-lg mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-400 text-sm">We accept all major credit cards, debit cards, and digital payment methods.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-12 border border-pink-500/20">
          <h2 className="text-white text-3xl mb-4">Ready to Upgrade Your Experience?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of members who save money and get exclusive access to the best events
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
}