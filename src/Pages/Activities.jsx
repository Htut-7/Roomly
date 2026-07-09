import { useEffect } from "react";
import "../Css/Activities.css";
import useActivity from "../Hooks/useActivity";
import { useSearchParams } from "react-router-dom";
import { FaMapMarkerAlt, FaTag, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Activities() {
  const { loading, error, getActivity, activity } = useActivity();

  const [searchParams] = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const date = searchParams.get("date") || "";
  const participants = searchParams.get("participants") || "";
  const category = searchParams.get("category") || "";

  useEffect(() => {
    getActivity();
  }, []);

  const filterActivity = activity.filter((f) => {
  const search = destination.toLowerCase();

  const matchesDestination =
    !destination ||
    f.city?.toLowerCase().includes(search) ||
    f.country?.toLowerCase().includes(search);

  const matchesCategory =
    !category ||
    f.category?.toLowerCase() === category.toLowerCase();

  return matchesDestination && matchesCategory;
});

  return (
    <div className="activity">
      <div className="activity-container">
        <h2>Explore Activities</h2>

        <p>
          Discover exciting attractions, tours, and experiences at your
          destination and find the perfect activity for your trip.
        </p>

        {loading && <span className="activity-spinner"></span>}

        {error && <p className="activity-error">{error}</p>}

        <div className="activity-list">
          {filterActivity.map((fa) => (
            <div className="single-activity" key={fa.id}>
              <div className="single-activity-image">
                <img src={fa.image} alt={fa.name} />
              </div>

              <div className="single-activity-main">
                <div className="single-activity-header">
                  <h3>{fa.name}</h3>

                  <span className="activity-category">
                    <FaTag />
                    {fa.category}
                  </span>
                </div>

                <div className="single-activity-location">
                  <FaMapMarkerAlt />
                  <span>
                    {fa.city}, {fa.country}
                  </span>
                </div>

                <div className="single-activity-meta">
                  {fa.duration && (
                    <span>
                      <FaClock />
                      {fa.duration}
                    </span>
                  )}
                </div>
              </div>

              <div className="single-activity-action">
                <div className="activity-price">
                  <span>From</span>
                  <h3>${fa.price}</h3>
                  <p>per person</p>
                </div>

                <Link
                  to={`/activity-detail/${fa.id}?date=${date}&participants=${participants}&category=${encodeURIComponent(category)}`}
                >
                  Check Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}