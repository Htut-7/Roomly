import { useEffect } from "react";
import "../Css/FlightDetail.css";
import useFlight from "../Hooks/useFlight";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function FlightDetail() {
  const { loading, error, getSingleFlight, singleFlight } = useFlight();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleFlight(id);
  }, [id]);

  const departure = searchParams.get("departure");
  const returnDate = searchParams.get("return");
  const passengers = searchParams.get("passengers");

  const bookingInfo = departure && returnDate && passengers;

  const flightBook = async () => {
    navigate(
      `/flight-booking/${singleFlight.id}?departure=${departure}&return=${returnDate}&passengers=${passengers}`,
    );
  };

  return (
    <div className="flight-detail">
      <div className="flight-detail-container">
        {loading && <span className="flight-detail-spinner"></span>}

        {error && <p className="flight-detail-error">{error}</p>}

        {singleFlight && (
          <div className="flight-detail-info">
            <div className="flight-detail-content">
              <img src={singleFlight.logo} />
              <h3>{singleFlight.airline}</h3>
              <p>{singleFlight.flightNumber}</p>
              <h4>
                {singleFlight.fromCode}-{singleFlight.toCode}
              </h4>
              <p>${singleFlight.price}</p>

              <div className="flight-seat">
                <p>Available Seats: {singleFlight.availableSeats}</p>
                <span>{singleFlight.baggage}</span>
              </div>

              <div className="flight-terminal">
                <p>Terminal: {singleFlight.terminal}</p>
                <span>Gate: {singleFlight.gate}</span>
              </div>

              <div className="flight-book-btn">
                <button
                  type="button"
                  onClick={() =>
                    bookingInfo
                      ? flightBook()
                      : navigate(`/flight-booking/${singleFlight.id}`)
                  }
                >
                  {bookingInfo ? "Book Flight" : "Select Date"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
