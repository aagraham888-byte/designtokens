import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0b0e]">
      <Navbar />
      <Outlet />
    </div>
  );
}
