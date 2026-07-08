import { useEffect, useState } from "react";
import "../Css/FlightBooking.css";
import useFlight from "../Hooks/useFlight";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import useFlightBooking from "../Hooks/useFlightBooking";

export default function FlightBooking() {
  const { loading, error, getSingleFlight, singleFlight } = useFlight();
  const {addFlightBooking}=useFlightBooking();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const navigate=useNavigate();

  const departure = searchParams.get("departure");
  const returnDate = searchParams.get("return");
  const passengers = searchParams.get("passengers");

  const [depart,setDepart]=useState(departure || "");
  const [arrival,setArrival]=useState(returnDate || "");
  const [pass,setPass]=useState(passengers || "");

  useEffect(() => {
    getSingleFlight(id);
  }, [id]);

  const flightHandler=async(e)=>{
    e.preventDefault();
    await addFlightBooking(
        singleFlight.id,
        singleFlight.airline,
        singleFlight.logo,
        singleFlight.price,
        singleFlight.fromCode,
        singleFlight.toCode,
        singleFlight.flightNumber,
        depart,
        arrival,
        pass,
        singleFlight.status
    );
    navigate("/myFlight");
  }

  return (
    <div className="flight-booking">
      <div className="flight-booking-container">
        <h2>Flight Booking</h2>
        <p>
          Complete your booking by reviewing your flight details, selecting your
          travel preferences, and confirming your passenger information before
          payment.
        </p>

        {loading && <span className="single-flight-booking-spinner"></span>}

        {error && <p className="single-flight-booking-error">{error}</p>}

        {singleFlight && (
          <div className="single-flight-booking">
            <div className="single-flight-booking-image">
              <img src={singleFlight.logo} alt={singleFlight.airline} />
              <h3>{singleFlight.airline}</h3>
              <p>{singleFlight.flightNumber}</p>
              <h4>
                {singleFlight.fromCode}-{singleFlight.toCode}
              </h4>
              <p>${singleFlight.price}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flight-booking-form-container">
        <div className="flight-booking-form">
            <h2>Flight Booking Details</h2>

            <form onSubmit={flightHandler}>
                <label>Departure Date</label>
                <input type="date"
                onChange={(e)=>setDepart(e.target.value)} value={depart}
                />

                <label>Return Date</label>
                <input type="date" onChange={(e)=>setArrival(e.target.value)} value={arrival}/>

                <label>Passengers</label>
                <input type="number" placeholder="Passengers" onChange={(e)=>setPass(e.target.value)} value={pass}/>

                <button type="submit">
                    Confirm
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}
