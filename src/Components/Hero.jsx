import "../Css/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Find your Perfect Stay</h2>
        <p>
          Discover hotels, apartments, and unique accommodations at the best
          prices. Book with confidence and make every trip unforgettable with
          Roomly.
        </p>

        <div className="hero-action">
            <Link>Find Your Stay</Link>
            <Link>Plan your Trip</Link>
        </div>
      </div>
    </section>
  );
}
