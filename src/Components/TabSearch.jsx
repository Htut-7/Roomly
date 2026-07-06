import "../Css/TabSearch.css";
import HotelsSearch from "../Components/HotelsSearch";
import { useState } from "react";

export default function TabSearch() {
  const [active, setActive] = useState("hotel");

  return (
    <section className="search-tabs">
      <div className="tabs">
        <button
          className={active === "hotel" ? "active" : ""}
          onClick={() => setActive("hotel")}
        >
          Hotels
        </button>

        <button
          className={active === "flights" ? "active" : ""}
          onClick={() => setActive("flights")}
        >
          Flights
        </button>

        <button
          className={active === "activities" ? "active" : ""}
          onClick={() => setActive("activities")}
        >
          Activities
        </button>
      </div>

      {active === "hotel" && <HotelsSearch />}
    </section>
  );
}
