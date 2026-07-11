import { useEffect } from "react";
import "../Css/MyFlight.css";
import useFlightBooking from "../Hooks/useFlightBooking";
import { FaPlane } from "react-icons/fa";
import { useContext } from "react";
import {AuthContext} from "../Contexts/AuthContext";

export default function MyFlight() {
  const { loading, error, getFlightBooking, flightBooking } =
    useFlightBooking();

    const { user }=useContext(AuthContext   );
    
    useEffect(()=>{
       if(user){
        getFlightBooking();
       }
    },[user])


  return (
    <div className="book-flight">
      <div className="book-flight-container">
        <h2>Flight Booking Confirmed</h2>
        <p>
          Your reservation has been confirmed. You can review your flight
          itinerary and manage your booking anytime from your account.
        </p>

        {loading && <span className="book-flight-spinner"></span>}

        {!loading && flightBooking.length===0 && (
          <p className="empty-booking">
            You haven't made any booking yet.
          </p>
        )}

        {error && <p className="book-flight-error">{error}</p>}

        <div className="book-flight-grid">
            {flightBooking.map((f)=>(
                <div className="single-book-flight" key={f.id}>
                    <div className="single-book-flight-details">
                        <img src={f.logo} alt={f.airline}/>
                        <div className="single-book-flight-info">
                            <h3>{f.airline}</h3>
                            <p>{f.flightNumber}</p>
                            <p>Passengers: {f.pass}</p>
                        </div>
                        <div className="single-book-flight-route">
                            <h3>{f.depart}</h3>
                            <p>{f.fromCode}</p>
                            <hr/><FaPlane/>
                            <h3>{f.arrival}</h3>
                            <p>{f.toCode}</p>
                        </div>

                        <div className="single-book-flight-status">
                            <p>Price: ${f.price}</p>
                            
                            <span>Status: {f.status}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
