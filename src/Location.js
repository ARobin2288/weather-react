import React from "react";
import "./Location.css";

export default function Location() {
  let timePlace = {
    date: "MONDAY, APRIL 19 2021 12:00PM",
    city: "Chicago"
  };
  return (
    <div className="Location">
      <p className="time">
        LAST UPDATED: <span>{timePlace.date}</span>
      </p>
      <h1>{timePlace.city}</h1>
    </div>
  );
}
