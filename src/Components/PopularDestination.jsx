import "../Css/PopularDestination.css";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Bangkok",
      country: "Thailand",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: 2,
      name: "Phuket",
      country: "Thailand",
      image:
        "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Chiang Mai",
      country: "Thailand",
      image:
        "https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Tokyo",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="popular-destinations">
      <div className="popular-destinations-container">
        <div className="destinations-heading">
          <div>
            <span className="section-label">Explore the world</span>
            <h2>Popular Destinations</h2>
            <p>
              Discover inspiring places loved by travelers and find the perfect
              destination for your next unforgettable journey.
            </p>
          </div>

          <Link to="/hotels" className="destinations-view-all">
            Explore all
            <FaArrowRight />
          </Link>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <Link
              to={`/hotels?destination=${encodeURIComponent(destination.name)}`}
              className={`destination-card ${
                destination.featured ? "destination-featured" : ""
              }`}
              key={destination.id}
            >
              <img src={destination.image} alt={destination.name} />

              <div className="destination-overlay"></div>

              <div className="destination-content">
                <span>
                  <FaMapMarkerAlt />
                  {destination.country}
                </span>

                <h3>{destination.name}</h3>

                <div className="destination-explore">
                  <span>
                    Explore Destination
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
