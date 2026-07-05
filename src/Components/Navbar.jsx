import "../Css/Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaSignOutAlt, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { HiUserPlus } from "react-icons/hi2";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const { getProfile, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      const data = await getProfile();
      if (data) {
        setProfile(data);
      }
    };
    if (user) {
      loadProfile();
    }
  }, [user]);

  const logUser = async (e) => {
    e.preventDefault();
    await logOut();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-text">
          Roomly
        </Link>

        <div className="nav-link">
          <NavLink to="/">Home</NavLink>

          <div className="dropdown">
            <span className="dropdown-title">Hotels</span>

            <div className="dropdown-menu">
              <NavLink to='/hotels'>All Hotels</NavLink>
              <NavLink to="/air-tickets">Air Tickets</NavLink>
              <NavLink to="/activity-tickets">Activity Tickets</NavLink>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropdown-title">Your Bookings</span>

            <div className="dropdown-menu">
              <NavLink to="/booking">Bookings</NavLink>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </div>
          </div>

          <NavLink to="/about">About</NavLink>
        </div>

        <div className="nav-action">
          {!user && (
            <>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>

              <Link to="/register">
                <HiUserPlus />
                Register
              </Link>
            </>
          )}

          {!!user && (
            <>
              <button onClick={logUser}>
                <FaSignOutAlt />
                Logout
              </button>

              <Link to="/profile">
                <FaUserAlt />
                {profile?.name}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
