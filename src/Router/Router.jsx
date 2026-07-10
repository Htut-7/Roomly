import {
  createBrowserRouter,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: '',
            element: <Home/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
          path: '/profile',
          element: <Profile/>
        },
        {
          path: '/hotels',
          element: <Hotel/>
        },
        {
          path: '/detail/:id',
          element: <Detail/>
        },
        {
          path: '/booking/:id',
          element: <Booking/>
        },
        {
          path: '/bookings',
          element: <MyBookings/>
        },
        {
          path: '/wishlist',
          element: <Wishlist/>
        },
        {
          path: '/flights',
          element: <Flights/>
        },
        {
          path: '/flight-detail/:id',
          element: <FlightDetail/>
        },
        {
          path: '/flight-booking/:id',
          element: <FlightBooking/>
        },
        {
          path: '/myFlight',
          element: <MyFlight/>
        },{
          path: '/activities',
          element: <Activities/>
        },
        {
          path: '/activity-detail/:id',
          element: <ActivityDetail/>
        },
        {
          path: '/activity-booking/:id',
          element: <ActivityBooking/>
        },
        {
          path: '/my-activity',
          element: <MyActivity/>
        },
        {
          path: '/about',
          element: <About/>
        }
    ]
  },
]);

export default router;