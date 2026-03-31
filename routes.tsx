import { createBrowserRouter } from "react-router";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { WalletPage } from "./pages/Wallet";
import { Tickets } from "./pages/Tickets";
import { Membership } from "./pages/Membership";
import { MemberDashboard } from "./pages/MemberDashboard";
import { EventQueue } from "./pages/EventQueue";
import { SellerDashboard } from "./pages/SellerDashboard";
import { CreateEvent } from "./pages/CreateEvent";
import { ListTickets } from "./pages/ListTickets";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/wallet",
    Component: WalletPage,
  },
  {
    path: "/tickets",
    Component: Tickets,
  },
  {
    path: "/membership",
    Component: Membership,
  },
  {
    path: "/member-dashboard",
    Component: MemberDashboard,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/event/:id/queue",
    Component: EventQueue,
  },
  {
    path: "/seller-dashboard",
    Component: SellerDashboard,
  },
  {
    path: "/create-event",
    Component: CreateEvent,
  },
  {
    path: "/list-tickets",
    Component: ListTickets,
  },
]);