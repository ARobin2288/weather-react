import React from "react";
import "./Location.css";

export default function Location() {
  let timePlace = {
    date: "Mon. April 19, 2021 12:00pm",
    city: "Chicago"
  };
  return (
    <div className="Location">
      <p className="time">
        Updated <span>{timePlace.date}</span>
      </p>
      <h1 className="place">{timePlace.city}</h1>
    </div>
  );
}
