import { Link } from "react-router";
import { ArrowUp, Wallet } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-[#0a0a0a] border-b border-white/[0.08] h-16">
      <div className="h-full px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-[17px] font-semibold tracking-tight">
          TicketFanGrub
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-1.5">
          {/* Membership with PRO badge */}
          <li>
            <Link
              to="/membership"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              <svg className="w-[15px] h-[15px] opacity-70" viewBox="0 0 16 16" fill="none">
                <path d="M2 5.5A1.5 1.5 0 013.5 4h9A1.5 1.5 0 0114 5.5v.793a1 1 0 01-.553.894L8 9.5 2.553 7.187A1 1 0 012 6.293V5.5z" fill="currentColor" opacity="0.5"/>
                <path d="M2 8.5v4A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-4L8 11 2 8.5z" fill="currentColor"/>
              </svg>
              Membership
              <span className="text-[9px] font-semibold bg-[#ffbe32]/15 text-[#ffbe32] border border-[#ffbe32]/30 rounded-full px-1.5 py-0.5 tracking-wider uppercase">
                PRO
              </span>
            </Link>
          </li>

          {/* Sell Tickets */}
          <li>
            <Link
              to="/seller-dashboard"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium text-white/85 bg-white/[0.06] border border-white/[0.18] hover:bg-white/[0.11] hover:border-white/30 hover:text-white transition-all"
            >
              <ArrowUp className="w-[15px] h-[15px] opacity-70" />
              Sell Tickets
            </Link>
          </li>

          {/* Divider */}
          <div className="w-[0.5px] h-5 bg-white/10 mx-1"></div>

          {/* Beta Tester */}
          <li>
            <Link
              to="/beta"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium bg-[#b450ff]/12 border border-[#c864ff]/30 text-[#d490ff] hover:bg-[#b450ff]/20 hover:border-[#c864ff]/55 hover:text-[#e8b5ff] transition-all relative overflow-hidden"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c864ff] shadow-[0_0_6px_rgba(200,100,255,0.7)] animate-pulse"></span>
              Beta Tester
            </Link>
          </li>

          {/* Divider */}
          <div className="w-[0.5px] h-5 bg-white/10 mx-1"></div>

          {/* Log In */}
          <li>
            <Link
              to="/signin"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-[#e8185a] text-white hover:bg-[#f01f64] transition-all"
            >
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
