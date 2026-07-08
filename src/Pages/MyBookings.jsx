import { useEffect } from "react";
import "../Css/MyBooking.css";
import useBooking from "../Hooks/useBooking";
import {
  FaBed,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function MyBookings() {
  const { loading, error, getBooking, booking } = useBooking();

  const { user }=useContext(AuthContext);

  useEffect(() => {
    if(user){
      getBooking();
    }
  }, [user]);

  return (
    <div className="mybookings">
      <div className="mybook-container">
        <h2>My Bookings</h2>
        <p>
          Manage your hotel reservations, review your booking details, and keep
          track of your upcoming stays.
        </p>

        {loading && <span className="mybook-spinner"></span>}

        {!loading && booking.length === 0 && (
          <p className="empty-booking">You haven't made any bookings yet.</p>
        )}

        {error && <p className="mybook-error">{error}</p>}

        <div className="mybook-grid">
          {booking.map((b) => (
            <div className="mybook-single" key={b.id}>
              <div className="mybook-image">
                <img src={b.image} alt={b.name} />
              </div>

              <div className="mybook-info">
                <h3>{b.name}</h3>

                <p>
                  <FaMapMarkerAlt />
                  {b.city}, {b.country}, {b.address}
                </p>

                <p>
                  <FaCalendarAlt />
                  {b.checkIn} - {b.checkOut}
                </p>

                <p>
                  <FaUserFriends />
                  {b.guests} Guests
                  <FaBed />
                  {b.room} Rooms
                </p>
              </div>

              <div className="mybook-price">
                <span className="price-label">Starting from</span>

                <h2>${b.price}</h2>

                <p>per night</p>

                <span className="booking-status">{b.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
