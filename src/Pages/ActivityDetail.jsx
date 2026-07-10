import { useEffect } from "react";
import "../Css/ActivityDetail.css";
import useActivity from "../Hooks/useActivity";
import { useNavigate, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaTag, FaUserFriends, FaStar } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function ActivityDetail() {
  const { loading, error, getSingleActivity, singleActivity } = useActivity();

  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");
  const participants = searchParams.get("participants");
  const category = searchParams.get("category");
  const navigate = useNavigate();

  const hasBookingInfo = date && participants && category;

  useEffect(() => {
    getSingleActivity(id);
  }, [id]);

  const bookActivity = async (e) => {
    e.preventDefault();
    navigate(
      `/activity-booking/${singleActivity.id}?date=${date}&participants=${participants}&category=${encodeURIComponent(category)}`,
    );
  };

  return (
    <div className="activitydetail">
      <div className="activitydetail-container">
        {loading && <span className="activitydetail-spinner"></span>}

        {error && <p className="activitydetail-error">{error}</p>}

        {singleActivity && (
          <div className="activitydetail-content">
            <div className="activitydetail-header">
              <h2>{singleActivity.name}</h2>

              <div className="activity-location">
                <FaMapMarkerAlt />

                <span>
                  {singleActivity.city}, {singleActivity.country}
                  {singleActivity.address && `, ${singleActivity.address}`}
                </span>
              </div>

              <div className="activitydetail-info">
                <div className="activity-rating">
                  <span className="activity-rating-badge">
                    <FaStar />
                    {singleActivity.rating}
                  </span>

                  <span>{singleActivity.reviews} Reviews</span>
                </div>

                <div className="activity-category">
                  <FaTag />
                  <span>{singleActivity.category}</span>
                </div>

                <div className="activity-participants">
                  <FaUserFriends />
                  <span>
                    Up to {singleActivity.maxParticipants} participants
                  </span>
                </div>
              </div>
            </div>

            <div className="single-activity-image-container">
              <div className="single-activity-image-main">
                <img
                  src={singleActivity.images?.[0]}
                  alt={singleActivity.name}
                />
              </div>

              <div className="single-activity-gallery-grid">
                {singleActivity.images?.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${singleActivity.name} ${index + 2}`}
                  />
                ))}
              </div>
            </div>

            <div className="activitydetail-booking">
              <div className="activitydetail-price">
                <span>From</span>
                <h3>${singleActivity.price}</h3>
                <p>per person</p>
              </div>

              <div className="single-activity-btn">
                {hasBookingInfo ? (
                  <button type="button" onClick={bookActivity}>
                    Book Now
                  </button>
                ) : (
                  <button onClick={`/activity-booking/${singleActivity.id}`}>
                    Select Dates
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
