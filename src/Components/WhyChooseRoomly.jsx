import "../Css/WhyChooseRoomly.css";
import {
  FaSearch,
  FaSuitcaseRolling,
  FaShieldAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export default function WhyChooseRoomly() {
  const features = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Easy to Explore",
      description:
        "Quickly search hotels, flights, and activities with a simple and intuitive booking experience.",
    },
    {
      id: 2,
      icon: <FaSuitcaseRolling />,
      title: "Everything in One Place",
      description:
        "Plan your entire journey from accommodation and flights to memorable activities in one platform.",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Simple & Reliable",
      description:
        "Enjoy a clear and reliable booking process with all your important travel information organized for you.",
    },
    {
      id: 4,
      icon: <FaCalendarCheck />,
      title: "Manage Your Bookings",
      description:
        "View and keep track of your hotel stays, flights, and activity reservations whenever you need them.",
    },
  ];

  return (
    <section className="why-roomly">
      <div className="why-roomly-container">
        <div className="why-roomly-heading">
          <span>Why Roomly</span>

          <h2>A Smarter Way to Plan Your Journey</h2>

          <p>
            From discovering destinations to managing your reservations, Roomly
            brings the essential parts of your journey together in one simple
            experience.
          </p>
        </div>

        <div className="why-roomly-grid">
          {features.map((feature) => (
            <article className="why-roomly-card" key={feature.id}>
              <div className="why-roomly-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}