import { useState } from "react";
import "../Css/Search.css";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [dest, setDest] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");

  return (
    <div className="search">
      <div className="search-container">
        <form className="search-form">
          <div className="search-input">
            <input
              type="text"
              placeholder="Destination"
              onChange={(e) => setDest(e.target.value)}
              value={dest}
            />

            <input
              type="date"
              placeholder="Check In"
              onChange={(e) => setCheckIn(e.target.value)}
              value={checkIn}
            />
            <input
              type="date"
              placeholder="Check Out"
              onChange={(e) => setCheckOut(e.target.value)}
              value={checkOut}
            />

            <input
              type="number"
              placeholder="Guests"
              onChange={(e) => setGuest(e.target.value)}
              value={guest}
            />
            <div className="search-btn">
              <FaSearch />
              Search
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
