import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";

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
        }
    ]
  },
]);

export default router;