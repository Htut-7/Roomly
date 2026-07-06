import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useBooking from "../Hooks/useBooking";
import useHotels from "../Hooks/useHotels";
import "../Css/Booking.css";

export default function Booking() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { loading, error, getSingleHotel, singleHotel } = useHotels();
  const { addBooking } = useBooking();

  const checkInFromSearch = searchParams.get("checkIn");
  const checkOutFromSearch = searchParams.get("checkOut");
  const guestsFromSearch = searchParams.get("guests");

  const [checkIn, setCheckIn] = useState(checkInFromSearch || "");
  const [checkOut, setCheckOut] = useState(checkOutFromSearch || "");
  const [guest, setGuest] = useState(guestsFromSearch || 1);
  const [room,setRoom]=useState('');

  useEffect(() => {
    getSingleHotel(id);
  }, [id]);

  const bookingHandler = async (e) => {
    e.preventDefault();
    await addBooking(
      singleHotel.id,
      singleHotel.name,
      singleHotel.Images?.[0],
      singleHotel.address,
      singleHotel.country,
      singleHotel.city,
      guest,
      checkIn,
      checkOut,
      room,
      singleHotel.price,
    );
    navigate("/bookings");
  };

  return (
    <div className="booking">
      <div className="booking-container">
        <h2>Complete Your Booking</h2>
        <p>
          Review your reservation details, select your stay dates if needed, and
          confirm your booking.
        </p>

        {loading && <span className="booking-spinner"></span>}

        {error && <p className="booking-error">{error}</p>}

        <div className="booking-grid">
          {singleHotel && (
            <div className="booking-detail">
              <div className="booking-image">
                <img src={singleHotel.Images?.[0]} alt={singleHotel.name} />
              </div>

              <div className="booking-info">
                <h3>{singleHotel.name}</h3>

                <p className="booking-location">
                  {singleHotel.city}, {singleHotel.country}
                </p>

                <span className="booking-address">{singleHotel.address}</span>

                <div className="booking-price">
                  <span>Starting from</span>

                  <h2>${singleHotel.price}</h2>

                  <p>per night</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="booking-form">
          <div className="booking-form-container">
            <h2>Booking Details</h2>

            <form onSubmit={bookingHandler}>
              <label>Check In</label>
              <input
                type="date"
                onChange={(e) => setCheckIn(e.target.value)}
                value={checkIn}
              />

              <label>Check Out</label>
              <input
                type="date"
                onChange={(e) => setCheckOut(e.target.value)}
                value={checkOut}
              />

              <label>Guests</label>
              <input
                type="number"
                placeholder="Number of guests"
                onChange={(e) => setGuest(e.target.value)}
                value={guest}
              />

              <label>Rooms</label>
              <input type="number" placeholder="Number of Rooms" onChange={(e)=>setRoom(e.target.value)} value={room}/>

              <div className="booking-btn">
                <button type="submit">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
