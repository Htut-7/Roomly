import { useEffect } from "react";
import "../Css/Detail.css";
import useHotels from "../Hooks/useHotels";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaCoffee,
  FaParking,
  FaSwimmingPool,
  FaUserFriends,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const { loading, error, singleHotel, getSingleHotel } = useHotels();
  const { id } = useParams();

  const [searchParams] = useSearchParams();

  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");
  const navigate = useNavigate();

  const hasBookingInfo = checkIn && checkOut && guests;

  useEffect(() => {
    getSingleHotel(id);
  }, [id]);

  const bookItem=async()=>{
    navigate(
    `/booking/${singleHotel.id}?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
  );
  }

  return (
    <section className="detail">
      <div className="detail-container">
        {error && <p className="single-error">{error}</p>}

        {loading && <span className="single-spinner"></span>}

        {singleHotel && (
          <>
            <div className="detail-header">
              <h2>{singleHotel.name}</h2>

              <p className="location">
                <FaMapMarkerAlt />
                {singleHotel.city}, {singleHotel.country} {singleHotel.address}
              </p>

              <div className="rating">
                <span className="rating-badge">
                  <FaStar />
                  {singleHotel.rating}
                </span>

                <span>{singleHotel.reviews} Reviews</span>
              </div>
            </div>

            <div className="image-gallery">
              <div className="gallery-main">
                <img src={singleHotel.Images?.[0]} alt={singleHotel.name} />
              </div>

              <div className="gallery-grid">
                {singleHotel.Images?.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${singleHotel.name} ${index + 2}`}
                  />
                ))}
              </div>
            </div>

            <div className="detail-content">
              <div className="detail-left">
                <h3>About this Hotel</h3>

                <p className="description">{singleHotel.description}</p>

                <h3>Amenities</h3>

                <div className="features">
                  {singleHotel.wifi && (
                    <span>
                      <FaWifi />
                      Free WiFi
                    </span>
                  )}

                  {singleHotel.breakfast && (
                    <span>
                      <FaCoffee />
                      Breakfast Included
                    </span>
                  )}

                  {singleHotel.pool && (
                    <span>
                      <FaSwimmingPool />
                      Swimming Pool
                    </span>
                  )}

                  {singleHotel.parking && (
                    <span>
                      <FaParking />
                      Free Parking
                    </span>
                  )}
                </div>

                <h3>Room Information</h3>

                <div className="room-info">
                  <span>
                    <FaUserFriends />
                    {guests} Guests
                  </span>

                  <span>{singleHotel.bedrooms} Bedroom</span>

                  <span>{singleHotel.bed} Bed</span>

                  <span>Bathroom</span>
                </div>
              </div>

              <div className="detail-right">
                <span className="price-title">Starting from</span>

                <h2>${singleHotel.price}</h2>

                <p>per night</p>

                {hasBookingInfo ? (
                  <button type="button" onClick={bookItem}>
                    Book Now
                  </button>
                ) : (
                  <button
                    onClick={() => navigate(`/booking/${singleHotel.id}`)}
                  >
                    Select Dates
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
