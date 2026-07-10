import { useEffect, useState } from "react";
import "../Css/ActivityBooking.css";
import useActivity from "../Hooks/useActivity";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import useActivityBooking from "../Hooks/useActivityBooking";

export default function ActivityBooking() {
  const { loading, error, getSingleActivity, singleActivity } = useActivity();
  const { id } = useParams();
  const [searchParams]=useSearchParams();
  const {addActivityBooking}=useActivityBooking();
  const navigate=useNavigate();

  const activityDate=searchParams.get('date');
  const activeParticipants=searchParams.get('participants');

  const [date,setDate]=useState(activityDate || "");
  const [participants,setParticipants]=useState(activeParticipants || '')

  useEffect(() => {
    getSingleActivity(id);
  }, [id]);

  const activityHandler=async(e)=>{
    e.preventDefault();
    await addActivityBooking(
      singleActivity.id,
      singleActivity.name,
      singleActivity.city,
      singleActivity.country,
      singleActivity.address,
      singleActivity.image,
      singleActivity.price,
      date,
      participants,
      singleActivity.status
    );
    navigate('/my-activity');
  }

  return (
    <div className="activity-booking">
      <div className="activity-booking-container">
        <h2>Book your Activity</h2>
        <p>
          Complete your booking by selecting your preferred date and number of
          participants, then confirm your reservation for an unforgettable
          experience.
        </p>

        {loading && <span className="activity-booking-spinner"></span>}

        {error && <p className="activity-booking-error">{error}</p>}

        <div className="activity-booking-grid">
          {singleActivity && (
            <div className="activity-booking-card">
              <div className="activity-booking-image">
                <img src={singleActivity.image} alt={singleActivity.name} />
              </div>

              <div className="activity-booking-information">
                <h3>{singleActivity.name}</h3>
                <p>
                  <span>
                    <FaMapMarkerAlt />
                    {singleActivity.city}, {singleActivity.country},{" "}
                    {singleActivity.address}
                  </span>
                </p>
                <span>
                  <div className="activity-booking-price">
                    <span>From</span>
                    <h3>${singleActivity.price}</h3>
                    <p>per person</p>
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="activity-booking-form-container">
          <div className="activity-booking-form">
            <h3>Booking Details</h3>
            <form onSubmit={activityHandler}>
              <label>Activity Date</label>
              <input type="date"
              onChange={(e)=>setDate(e.target.value)} value={date}
              />

              <label>Participants</label>
              <input type="number" placeholder="Participants"
              onChange={(e)=>setParticipants(e.target.value)} value={participants}
              />

              <div className="activity-booking-form-btn">
                <button type="submit">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
