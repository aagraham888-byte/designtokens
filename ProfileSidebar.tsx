import { useState } from "react";
import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Ticket, 
  TrendingUp, 
  Crown, 
  Wallet, 
  Shield, 
  ChevronRight 
} from "lucide-react";

export function ProfileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/profile",
      active: location.pathname === "/profile"
    },
    {
      icon: Ticket,
      label: "My Tickets",
      href: "/tickets",
      active: location.pathname === "/tickets"
    }
  ];

  const mainNavItems = [
    {
      icon: TrendingUp,
      label: "Seller Dashboard",
      href: "/seller-dashboard",
      active: location.pathname === "/seller-dashboard",
      special: "sell"
    },
    {
      icon: Crown,
      label: "Membership",
      href: "/member-dashboard",
      active: location.pathname === "/member-dashboard",
      badge: "PRO"
    }
  ];

  const secondaryNavItems = [
    {
      icon: Wallet,
      label: "Wallet",
      href: "/wallet",
      active: location.pathname === "/wallet"
    },
    {
      icon: Shield,
      label: "Security",
      href: "#",
      active: false
    }
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 bottom-0 w-[220px] bg-[#0a0a0a] border-r border-white/[0.08] px-3.5 py-6 flex flex-col gap-0.5 transition-transform duration-300 ease-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-[220px]"
        }`}
      >
        {/* Logo */}
        <div className="text-[17px] font-bold mb-6 px-2.5 tracking-tight text-white">
          Ticket<span className="text-[#e8185a]">Fan</span>Grub
        </div>

        {/* Primary Nav */}
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-medium transition-all border border-transparent ${
              item.active
                ? "bg-[#e8185a] text-white font-semibold"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white hover:border-white/10"
            }`}
          >
            <item.icon className={`size-[15px] flex-shrink-0 transition-opacity ${
              item.active ? "opacity-100" : "opacity-60 group-hover:opacity-100"
            }`} />
            {item.label}
          </Link>
        ))}

        {/* Divider */}
        <div className="h-px bg-white/[0.08] my-2 mx-2.5" />

        {/* Main Nav with Special Items */}
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-medium transition-all ${
              item.special === "sell"
                ? "text-white/85 bg-white/[0.06] border border-white/[0.14] hover:bg-white/[0.11] hover:border-white/25 hover:text-white"
                : item.active
                ? "bg-[#e8185a] text-white font-semibold border border-transparent"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white border border-transparent hover:border-white/10"
            }`}
          >
            <item.icon className={`size-[15px] flex-shrink-0 transition-opacity ${
              item.active ? "opacity-100" : "opacity-60"
            }`} />
            {item.label}
            {item.badge && (
              <span className="ml-auto text-[9px] font-semibold bg-[rgba(255,190,50,0.15)] text-[#ffbe32] border border-[rgba(255,190,50,0.3)] rounded-full px-2 py-0.5 tracking-wider uppercase">
                {item.badge}
              </span>
            )}
          </Link>
        ))}

        {/* Divider */}
        <div className="h-px bg-white/[0.08] my-2 mx-2.5" />

        {/* Secondary Nav */}
        {secondaryNavItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-medium transition-all border border-transparent ${
              item.active
                ? "bg-[#e8185a] text-white font-semibold"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white hover:border-white/10"
            }`}
          >
            <item.icon className={`size-[15px] flex-shrink-0 transition-opacity ${
              item.active ? "opacity-100" : "opacity-60"
            }`} />
            {item.label}
          </Link>
        ))}

        {/* Divider */}
        <div className="h-px bg-white/[0.08] my-2 mx-2.5" />

        {/* Beta Tester */}
        <Link
          to="#"
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-medium bg-[rgba(180,80,255,0.12)] border border-[rgba(200,100,255,0.3)] text-[#d490ff] hover:bg-[rgba(180,80,255,0.2)] hover:border-[rgba(200,100,255,0.55)] hover:text-[#e8b5ff] transition-all"
        >
          <span className="size-1.5 rounded-full bg-[#c864ff] flex-shrink-0 animate-pulse shadow-[0_0_6px_rgba(200,100,255,0.7)]" />
          Beta Tester
        </Link>
      </div>

      {/* Pull Tab */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 -translate-y-1/2 w-[26px] h-[52px] bg-[#1a1a1a] border border-white/10 border-l-0 rounded-r-full flex items-center justify-center transition-all duration-300 ease-out z-50 hover:bg-[#242424] hover:border-white/[0.18] ${
          isOpen ? "left-[220px]" : "left-0"
        }`}
      >
        <ChevronRight
          className={`size-3.5 text-white/45 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}