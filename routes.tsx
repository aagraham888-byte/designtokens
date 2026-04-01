import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
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
import { QueueWithFriend } from "./pages/QueueWithFriend";
import { OrderCard } from "./pages/OrderCard";
import { CardTracking } from "./pages/CardTracking";
import { FairPriceTickets } from "./pages/FairPriceTickets";
import { Merch } from "./pages/Merch";
import { Beta } from "./pages/Beta";
import { Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "wallet",
        Component: WalletPage,
      },
      {
        path: "tickets",
        Component: Tickets,
      },
      {
        path: "membership",
        Component: Membership,
      },
      {
        path: "member-dashboard",
        Component: MemberDashboard,
      },
      {
        path: "queue-with-friend",
        Component: QueueWithFriend,
      },
      {
        path: "friend-mode",
        element: <Navigate to="/queue-with-friend" replace />,
      },
      {
        path: "watch-mode",
        element: <Navigate to="/queue-with-friend" replace />,
      },
      {
        path: "order-card",
        Component: OrderCard,
      },
      {
        path: "card-tracking",
        Component: CardTracking,
      },
      {
        path: "fair-price-tickets",
        Component: FairPriceTickets,
      },
      {
        path: "merch",
        Component: Merch,
      },
      {
        path: "beta",
        element: <Beta />,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "event/:id/queue",
        Component: EventQueue,
      },
      {
        path: "seller-dashboard",
        Component: SellerDashboard,
      },
      {
        path: "create-event",
        Component: CreateEvent,
      },
      {
        path: "list-tickets",
        Component: ListTickets,
      },
    ],
  },
]);