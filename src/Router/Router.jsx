import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Hotel from "../Pages/Hotel";
import Detail from "../Pages/Detail";
import Booking from "../Pages/Booking";
import MyBookings from "../Pages/MyBookings";
import Wishlist from "../Pages/Wishlist";
import Flights from "../Pages/Flights";
import FlightDetail from "../Pages/FlightDetail";
import FlightBooking from "../Pages/FlightBooking";
import MyFlight from "../Pages/MyFlight";
import Activities from "../Pages/Activities";
import ActivityDetail from "../Pages/ActivityDetail";
import ActivityBooking from "../Pages/ActivityBooking";
import MyActivity from "../Pages/MyActivity";
import About from "../Pages/About";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Router() {
  const { authReady, user } = useContext(AuthContext);
  const isAuthenticated = !!user;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: isAuthenticated ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/register",
          element: !isAuthenticated ? <Register /> : <Navigate to="/" />,
        },
        {
          path: "/login",
          element: !isAuthenticated ? <Login /> : <Navigate to="/" />,
        },
        {
          path: "/profile",
          element: isAuthenticated ? <Profile /> : <Navigate to="/login" />,
        },
        {
          path: "/hotels",
          element: isAuthenticated ? <Hotel /> : <Navigate to="/login" />,
        },
        {
          path: "/detail/:id",
          element: isAuthenticated ? <Detail /> : <Navigate to="/login" />,
        },
        {
          path: "/booking/:id",
          element: isAuthenticated ? <Booking /> : <Navigate to="/login" />,
        },
        {
          path: "/bookings",
          element: isAuthenticated ? <MyBookings /> : <Navigate to="/login" />,
        },
        {
          path: "/wishlist",
          element: isAuthenticated ? <Wishlist /> : <Navigate to="/login" />,
        },
        {
          path: "/flights",
          element: isAuthenticated ? <Flights /> : <Navigate to="/login" />,
        },
        {
          path: "/flight-detail/:id",
          element: isAuthenticated ? (
            <FlightDetail />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/flight-booking/:id",
          element: isAuthenticated ? (
            <FlightBooking />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/myFlight",
          element: isAuthenticated ? <MyFlight /> : <Navigate to="/login" />,
        },
        {
          path: "/activities",
          element: isAuthenticated ? <Activities /> : <Navigate to="/login" />,
        },
        {
          path: "/activity-detail/:id",
          element: isAuthenticated ? (
            <ActivityDetail />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/activity-booking/:id",
          element: isAuthenticated ? (
            <ActivityBooking />
          ) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: "/my-activity",
          element: isAuthenticated ? <MyActivity /> : <Navigate to="/login" />,
        },
        {
          path: "/about",
          element: isAuthenticated ? <About /> : <Navigate to="/login" />,
        }
      ],
    },
  ]);
  return authReady && <RouterProvider router={router} />;
}
