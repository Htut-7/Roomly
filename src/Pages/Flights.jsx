import "../Css/Flights.css";
import { useSearchParams } from "react-router-dom";
import useFlight from "../Hooks/useFlight";
import { useEffect } from "react";
import { FaPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Flights() {
  const [searchParams] = useSearchParams();
  const { loading, error, getFlight, flight } = useFlight();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const departure=searchParams.get('departure') || '';
  const returnDate=searchParams.get('return') || '';
  const passengers=searchParams.get('passengers') || '';

  const filterFlight = flight.filter(
    (f) =>
      f.from.toLowerCase().includes(from.toLowerCase()) &&
      f.to.toLowerCase().includes(to.toLowerCase())
  );

  useEffect(() => {
    getFlight();
  }, []);

  return (
    <div className="flights">
      <div className="flights-container">
        <h2>Available Flights</h2>
        <p>
          Search and compare flights from trusted airlines to find the best
          option for your next journey.
        </p>

        {loading && <span className="flights-spinner"></span>}

        {error && <p className="flights-error">{error}</p>}

        <div className="flight-grid">
          {filterFlight.map((ff) => (
            <div className="single-flight" key={ff.id}>
              <div className="flight-logo">
                <img src={ff.logo} alt={ff.airline} />
              </div>

              <div className="flight-main">
                <div className="flight-airline">
                  <h3>{ff.airline}</h3>
                  <span>{ff.flightNumber}</span>
                </div>

                <div className="flight-route">
                  <div className="departure">
                    <h3>{departure}</h3>
                    <span>{ff.departureTime}</span>
                    <p>{ff.fromCode}</p>
                  </div>

                  <div className="flight-center">
                    <span>{ff.duration}</span>
                    <FaPlane/>
                    <hr />
                    <p>{ff.nonstop ? "Nonstop" : "1 Stop"}</p>
                  </div>

                  <div className="return">
                    <h3>{returnDate}</h3>
                    <span>{ff.arrivalTime}</span>
                    <p>{ff.toCode}</p>
                  </div>

                  <div className="flight-btn">
                    <Link to={`/flight-detail/${ff.id}?departure=${departure}&return=${returnDate}&passengers=${passengers}`}>View Flight</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
