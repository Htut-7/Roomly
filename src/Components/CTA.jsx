import "../Css/CTA.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TravelCTA() {
  return (
    <section className="travel-cta">
      <div className="travel-cta-container">
        <div className="travel-cta-content">
          <span>Start Your Journey</span>

          <h2>Ready for Your Next Adventure?</h2>

          <p>
            Discover comfortable stays, convenient flights, and unforgettable
            activities. Plan your next journey with Roomly today.
          </p>

          <div className="travel-cta-actions">
            <Link to="/hotels" className="travel-cta-primary">
              Explore Hotels
              <FaArrowRight />
            </Link>

            <Link to="/activities" className="travel-cta-secondary">
              Discover Activities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}