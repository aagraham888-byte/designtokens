import { Link } from "router";
import { Crown, Zap, Gift, Heart, Shield, BadgeCheck } from "lucide-react";
import { Button } from "../components/ui/button";

export function Membership() {
  const lifetimeFeatures = [
    "Priority & early access to events",
    "Fan perks (club access)",
    "Exclusive presale access",
    "No service fees",
    "Exclusive member events",
    "Digital membership card",
    "Priority customer support",
    "Lifetime rewards"
  ];

  const perks = [
    {
      icon: Zap,
      title: "Unlimited Fast Access",
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
    <div>
      {/* Hero Section with Bubbles */}
      <div className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        {/* Floating Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] w-32 h-32 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-[15%] w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-10 left-[20%] w-36 h-36 bg-gradient-to-br from-pink-500/25 to-purple-500/25 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-1/2 right-[10%] w-28 h-28 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-[25%] w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-float-delayed"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Crown className="size-12 text-pink-500" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <h1 className="text-white text-6xl mb-6 font-bold">
            Join the <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Fan Club</span> ✨
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            One payment. Unlimited vibes. <br />
            <span className="text-pink-400 font-semibold">Lifetime access</span> to the best events, exclusive perks, and VIP treatment 🎟️
          </p>
        </div>
      </div>

      {/* Membership Card */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-12 border-2 border-purple-500/30 relative overflow-hidden mb-12">
          {/* Hologram Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 opacity-60 animate-hologram"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="size-8 text-pink-500" />
                  <span className="text-pink-400 text-sm font-semibold tracking-wider uppercase">Lifetime Membership</span>
                </div>
                <h2 className="text-white text-5xl mb-4">
                  $49<span className="text-2xl text-gray-400">.99</span>
                </h2>
                <p className="text-gray-300 text-lg">One-time payment • Forever access</p>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Limited Time Offer
                </div>
                <p className="text-gray-400 text-sm">Regular price: <span className="line-through">$99.99</span></p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {lifetimeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BadgeCheck className="size-5 text-pink-500 flex-shrink-0" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6 rounded-lg text-lg font-semibold shadow-lg shadow-pink-500/30">
              Get Lifetime Access 🔥
            </Button>
          </div>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {perks.map((perk, index) => (
            <div key={index} className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] hover:border-pink-500/30 transition-colors">
              <div className="p-3 bg-pink-500/20 rounded-lg inline-block mb-4">
                <perk.icon className="size-6 text-pink-500" />
              </div>
              <h3 className="text-white text-lg mb-2">{perk.title}</h3>
              <p className="text-gray-400 text-sm">{perk.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-[#1a1d23] rounded-lg p-8 border border-[#24272e]">
          <h3 className="text-white text-2xl mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white mb-2">What's included with lifetime membership?</h4>
              <p className="text-gray-400 text-sm">You get all premium features forever with just one payment - priority access, no service fees, exclusive events, and more.</p>
            </div>
            <div>
              <h4 className="text-white mb-2">Can I upgrade later?</h4>
              <p className="text-gray-400 text-sm">This is already our top tier! Lifetime membership gives you access to everything we offer, now and in the future.</p>
            </div>
            <div>
              <h4 className="text-white mb-2">Is this really a one-time payment?</h4>
              <p className="text-gray-400 text-sm">Yes! Pay once, enjoy forever. No recurring charges, no hidden fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
