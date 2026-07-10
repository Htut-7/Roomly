import { useEffect } from "react";
import "../Css/MyActivity.css";
import useActivityBooking from "../Hooks/useActivityBooking";
import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function MyActivity() {
  const { loading, error, getActivity, activity } = useActivityBooking();
  const { user }=useContext(AuthContext)

  useEffect(() => {
   if(user){
     getActivity();
   }
  }, [user]);

  return (
    <div className="my-activity">
      <div className="my-activity-container">
        <h2>Activity Bookings Confirmed</h2>
        <p>
          View your confirmed activities, check booking details, and keep track
          of your upcoming experiences.
        </p>

        {loading && <span className="my-activity-spinner"></span>}

        {error && <p className="my-activity-error">{error}</p>}

        <div className="my-activity-item">
            {activity?.map((a)=>(
                <div className="single-my-activity" key={a.id}>
                    <div className="single-my-activity-image">
                        <img src={a.image} alt={a.name}/>
                    </div>

                    <div className="single-my-activity-information">
                        <h3>{a.name}</h3>
                        <p>
                            <span>
                                <FaMapMarkerAlt/>
                                {a.city}, {a.country}, {a.address}
                            </span>
                        </p>

                        <p>
                            <span>
                                <FaCalendar/>
                                {a.date}
                            </span>
                        </p>

                        <p>
                            <span>
                                <FaUserFriends/>
                                {a.participants} participants
                            </span>
                        </p>

                        <div className="single-activity-price">
                            <span>$ {a.price} / person</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
