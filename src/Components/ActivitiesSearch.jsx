import { FaSearch } from "react-icons/fa";
import "../Css/ActivitiesSearch.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActivitiesSearch() {

    const [destination,setDestination]=useState('');
    const [date,setDate]=useState('');
    const [participants,setParticipants]=useState('');
    const [category,setCategory]=useState('');
    const navigate=useNavigate();

    const activityHandler=async(e)=>{
        e.prevntDefault();
        navigate(`/activities?destination=${encodeURIComponent(destination)}&date=${date}$participants=${participants}&category=${category}`)
    }

  return (
    <div className="activity-search">
        <div className="activity-search-container">
            <form className="activity-search-form" onSubmit={activityHandler}>
                <div className="activity-search-field">
                    <label>Destination</label>
                    <input type="text" placeholder="Destination"
                    onChange={(e)=>setDestination(e.target.value)} value={destination}
                    />
                </div>

                <div className="activity-search-field">
                    <label>Date</label>
                    <input type="date"
                    onChange={(e)=>setDate(e.target.value)} value={date}
                    />
                </div>

                <div className="activity-search-field">
                    <label>Participants</label>
                    <input type="number" placeholder="Participants"
                    onChange={(e)=>setParticipants(e.target.value)} value={participants}
                    />
                </div>

                <div className="activity-search-field">
                    <label>Categories</label>
                    <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                        <option>Adventure</option>
                        <option>Tours</option>
                        <option>Museums</option>
                        <option>Theme Parks</option>
                        <option>Water Activities</option>
                        <option>Food & Dining</option>
                        <option>Nature</option>
                    </select>
                </div>

                <div className="activity-search-form-btn">
                    <button type="submit">
                        <FaSearch/>
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
