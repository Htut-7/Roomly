import "../Css/About.css";

export default function About() {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <h1>About Roomly</h1>
        <p>
          Roomly is a modern travel booking platform designed to make planning
          your journey simple, convenient, and stress-free. From finding
          comfortable hotels and convenient flights to discovering exciting
          activities, Roomly brings everything you need for your trip together
          in one place.
        </p>

        <section className="blog-section">
          <h2>Travel Made Simple</h2>
          <p>
            We believe planning a trip should be exciting, not complicated.
            Roomly helps travelers explore destinations, compare travel options,
            and manage their bookings through a simple and user-friendly
            experience.
          </p>

          <h2>Everything You need for your Journey</h2>
          <p>
            Whether you're searching for the perfect place to stay, booking your
            next flight, or discovering memorable activities at your
            destination, Roomly makes it easier to organize every part of your
            journey.
          </p>

          <h2>Why Choose Roomly?</h2>
          <p>
            Our goal is to provide a seamless and reliable booking experience
            with clear information, intuitive navigation, and convenient access
            to your reservations whenever you need them.
          </p>
        </section>
      </div>
    </div>
  );
}
