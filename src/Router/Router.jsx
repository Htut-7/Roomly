import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Hotel from "../Pages/Hotel";
import Apartment from "../Pages/Apartments";
import Detail from "../Pages/Detail";
import Booking from "../Pages/Booking";
import MyBookings from "../Pages/MyBookings";

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
          path: '/apartments',
          element: <Apartment/>
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
        }
    ]
  },
]);

export default router;