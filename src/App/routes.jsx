import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Search from "../pages/Search";
import HotelDetails from "../pages/HotelDetails";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

import DashboardHome from "../pages/dashboard/DashboardHome";
import Hotels from "../pages/dashboard/Hotels";
import Rooms from "../pages/dashboard/Rooms";
import Amenities from "../pages/dashboard/Amenities";
import Reservations from "../pages/dashboard/Reservations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "hotels/:id", element: <HotelDetails /> },
      { path: "booking/:id", element: <Booking /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "hotels", element: <Hotels /> },
      { path: "rooms", element: <Rooms /> },
      { path: "amenities", element: <Amenities /> },
      { path: "reservations", element: <Reservations /> },
    ],
  },
]);
