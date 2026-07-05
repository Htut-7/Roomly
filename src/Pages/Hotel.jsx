import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaSnowflake,
  FaUserFriends,
} from "react-icons/fa";
import "../Css/Hotel.css";
import useHotels from "../Hooks/useHotels";
import { useSearchParams } from "react-router-dom";

export default function Hotel() {
  const { loading, error, getHotel, hotel } = useHotels();
  const [searchParams] = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const checkIn=searchParams.get("checkIn");
  const checkOut=searchParams.get('checkOut');
  const guests=searchParams.get('guests');

  const filteredHotel = hotel.filter((hotel) => {
    return hotel.city
      .trim()
      .toLowerCase()
      .includes(destination.trim().toLowerCase());
  });

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <section className="hotel">
      <div className="hotel-container">
        <div className="hotel-header">
          <h2>Explore Our Hotels</h2>

          <p>
            Discover hotels across different destinations and choose the perfect
            place for your next vacation or business trip.
          </p>
        </div>

        {error && <p className="hotel-error">{error}</p>}

        {loading && <span className="hotel-spinner"></span>}

        <div className="hotel-list">
          {filteredHotel.map((h) => (
            <div className="hotel-card" key={h.id}>
              <div className="hotel-image">
                <img src={h.image} alt={h.name} />
              </div>

              <div className="hotel-content">
                <div className="hotel-details">
                  <h3>{h.name}</h3>

                  <p className="hotel-location">
                    <FaMapMarkerAlt />
                    {h.city}, {h.country}
                  </p>

                  <div className="hotel-rating">
                    <span className="rating-badge">
                      <FaStar />
                      {h.rating}
                    </span>

                    <span>{h.reviews} Reviews</span>
                  </div>

                  <p className="hotel-description">{h.description}</p>

                  <div className="hotel-features">
                    {h.wifi && (
                      <span>
                        <FaWifi />
                        Free WiFi
                      </span>
                    )}

                    {h.pool && (
                      <span>
                        <FaSwimmingPool />
                        Pool
                      </span>
                    )}

                    {h.parking && (
                      <span>
                        <FaParking />
                        Parking
                      </span>
                    )}

                    {h.airCondition && (
                      <span>
                        <FaSnowflake />
                        Air Conditioning
                      </span>
                    )}
                  </div>

                  <div className="hotel-room-info">
                    <span>
                      <FaUserFriends />
                      {h.guests} Guests
                    </span>

                    <span>{h.bedrooms} Bed</span>

                    <span>{h.bathrooms} Bathroom</span>
                  </div>
                </div>

                <div className="hotel-price">
                  <span className="price-title">Starting from</span>

                  <h2>${h.price}</h2>

                  <p>per night</p>

                  <Link to={`/detail/${h.id}?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}>Check Room</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
