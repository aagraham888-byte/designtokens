import { Link } from "react-router";
import { Sparkles, Zap, MessageSquare, Bug, Gift, Star, Check } from "lucide-react";
import { Button } from "../components/ui/button";

export function Beta() {
  const benefits = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Be the first to try new features before they're released to everyone",
      color: "text-yellow-500"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Direct line to our development team for feedback and suggestions",
      color: "text-blue-500"
    },
    {
      icon: Gift,
      title: "Exclusive Perks",
      description: "Access to beta-exclusive features and special pricing",
      color: "text-pink-500"
    },
    {
      icon: Star,
      title: "Shape the Future",
      description: "Your feedback directly influences product development",
      color: "text-purple-500"
    }
  ];

  const features = [
    "Priority access to new event listings",
    "Advanced queue management tools",
    "Beta-exclusive pricing on select events",
    "Early access to mobile app features",
    "Direct feedback channel to dev team",
    "Special beta tester badge on profile"
  ];

  const handleDiscordClick = () => {
    window.open('https://discord.gg/ticketfangrub', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-8 md:p-12 border border-purple-500/30 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-8 text-purple-400" />
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30 font-semibold">
              BETA PROGRAM
            </span>
          </div>
          
          <h1 className="text-white text-4xl md:text-5xl mb-4">
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Beta Tester</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Join our exclusive beta testing program and help shape the future of TicketFanGrub. 
            Get early access to cutting-edge features and exclusive perks.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-6 text-base flex items-center gap-2">
              <Sparkles className="size-5" />
              Apply for Beta Access
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 text-white rounded-full px-8 py-6 text-base border border-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="mb-12">
        <h2 className="text-white text-2xl mb-6">Why Join the Beta Program?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] hover:border-purple-500/30 transition-all"
            >
              <benefit.icon className={`size-8 ${benefit.color} mb-4`} />
              <h3 className="text-white text-xl mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features List */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#1a1d23] rounded-lg p-8 border border-[#24272e]">
          <h2 className="text-white text-2xl mb-6">What You'll Get</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback Section */}
        <div className="bg-[#1a1d23] rounded-lg p-8 border border-[#24272e]">
          <Bug className="size-8 text-orange-500 mb-4" />
          <h2 className="text-white text-2xl mb-4">Help Us Improve</h2>
          <p className="text-gray-400 mb-6">
            As a beta tester, your feedback is invaluable. Report bugs, suggest features, 
            and help us create the best ticket-buying experience possible.
          </p>
          <div className="space-y-3">
            <div className="bg-[#24272e] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="size-5 text-blue-400" />
                <span className="text-white font-medium">Feedback Portal</span>
              </div>
              <p className="text-gray-400 text-sm">Submit feature requests and suggestions</p>
            </div>
            <div className="bg-[#24272e] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Bug className="size-5 text-orange-400" />
                <span className="text-white font-medium">Bug Reports</span>
              </div>
              <p className="text-gray-400 text-sm">Help us identify and fix issues quickly</p>
            </div>
            <button 
              onClick={handleDiscordClick}
              className="w-full bg-[#5865F2] hover:bg-[#4752C4] rounded-lg p-4 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg className="size-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span className="text-white font-medium">Join Discord Community</span>
              </div>
              <p className="text-white/80 text-sm">Connect with other beta testers and the dev team</p>
            </button>
          </div>
        </div>
      </div>

      {/* Discord Community Section */}
      <div className="bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/5 rounded-lg p-8 border border-[#5865F2]/30 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="bg-[#5865F2] rounded-full p-6">
              <svg className="size-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white text-2xl mb-3">Join Our Discord Community</h2>
            <p className="text-gray-300 mb-4">
              Connect with 500+ beta testers, share feedback, get help, and stay updated with the latest 
              features and announcements. Our Discord server is the heart of the beta community!
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-[#1a1d23] rounded-full px-4 py-2 border border-[#24272e]">
                <div className="size-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm">500+ Active Members</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1d23] rounded-full px-4 py-2 border border-[#24272e]">
                <MessageSquare className="size-4 text-blue-400" />
                <span className="text-gray-300 text-sm">24/7 Community Support</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button 
              onClick={handleDiscordClick}
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-8 py-6 text-base font-semibold flex items-center gap-2 shadow-lg shadow-[#5865F2]/20"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 border border-purple-500/20 mb-8">
        <h2 className="text-white text-2xl mb-6 text-center">Beta Program Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl text-purple-400 font-bold mb-2">500+</div>
            <div className="text-gray-400 text-sm">Active Beta Testers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-pink-400 font-bold mb-2">1,200+</div>
            <div className="text-gray-400 text-sm">Features Tested</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-blue-400 font-bold mb-2">350+</div>
            <div className="text-gray-400 text-sm">Bugs Fixed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-400 font-bold mb-2">95%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a1d23] rounded-lg p-8 border border-[#24272e] text-center">
        <Sparkles className="size-12 text-purple-400 mx-auto mb-4" />
        <h2 className="text-white text-2xl mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Join hundreds of other beta testers who are helping shape the future of TicketFanGrub. 
          Sign up now and start enjoying exclusive benefits!
        </p>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-6 text-base">
          Apply for Beta Access
        </Button>
        <p className="text-gray-500 text-sm mt-4">
          Already a beta tester? <Link to="/profile" className="text-purple-400 hover:text-purple-300">Go to your dashboard</Link>
        </p>
      </div>
    </div>
  );
}