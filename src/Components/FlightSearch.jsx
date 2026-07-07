import { useState } from "react";
import "../Css/FlightSearch.css";
import { useNavigate } from "react-router-dom";

export default function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const navigate = useNavigate();

  const searchFlight = async (e) => {
    e.preventDefault();
    navigate(
      `/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&departure=${departureDate}&return=${returnDate}&passengers=${passengers}`,
    );
  };

  return (
    <div className="flight-search">
      <div className="flight-search-container">
        <form className="flight-search-form" onSubmit={searchFlight}>
          <div className="flight-field">
            <label>From</label>
            <input
              type="text"
              placeholder="Departure city"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
            />
          </div>

          <div className="flight-field">
            <label>To</label>
            <input
              type="text"
              placeholder="Destination city"
              onChange={(e) => setTo(e.target.value)}
              value={to}
            />
          </div>

          <div className="flight-field">
            <label>Departure Date</label>
            <input
              type="date"
              onChange={(e) => setDepartureDate(e.target.value)}
              value={departureDate}
            />
          </div>

          <div className="flight-field">
            <label>Return Date</label>
            <input
              type="date"
              onChange={(e) => setReturnDate(e.target.value)}
              value={returnDate}
            />
          </div>

          <div className="flight-field">
            <label>Passengers</label>
            <input
              type="number"
              placeholder="Passengers"
              onChange={(e) => setPassengers(e.target.value)}
              value={passengers}
            />
          </div>

          <div className="flight-search-btn">
            <button type="submit">Flight Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}
