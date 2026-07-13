import "../Css/ExploreServices.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExploreServices() {
  const services = [
    {
      id: 1,
      title: "Find Your Perfect Stay",
      description:
        "Discover comfortable hotels and accommodations for your next journey.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      link: "/hotels",
      button: "Explore Hotels",
    },
    {
      id: 2,
      title: "Fly Anywhere",
      description:
        "Search convenient flights and find the right journey to your destination.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      link: "/flights",
      button: "Search Flights",
    },
    {
      id: 3,
      title: "Discover Experiences",
      description:
        "Explore exciting attractions, tours, and unforgettable activities.",
      image:
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80",
      link: "/activities",
      button: "Find Activities",
    },
  ];

  return (
    <section className="explore-services">
      <div className="explore-services-container">
        <div className="explore-services-heading">
          <span>Everything in one place</span>

          <h2>Your Entire Journey, Made Simple</h2>

          <p>
            From where you stay to how you get there and what you experience,
            Roomly helps you plan every part of your journey in one place.
          </p>
        </div>

        <div className="explore-services-grid">
          {services.map((service) => (
            <article className="explore-service-card" key={service.id}>
              <div className="explore-service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="explore-service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to={service.link}>
                  {service.button}
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}