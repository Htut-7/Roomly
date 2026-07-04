import { useState } from "react";
import "../Css/Search.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [dest, setDest] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guest, setGuest] = useState("");
  const navigate = useNavigate();

  const searchHotel = async (e) => {
    e.preventDefault();
    navigate(
      `/hotels?destination=${encodeURIComponent(dest)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guest}`,
    );
  };

  return (
    <div className="search">
      <div className="search-container">
        <form className="search-form" onSubmit={searchHotel}>
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
              <button type="submit">
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
