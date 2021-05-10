import React from "react";
import "./Extra.css";

export default function Extra() {
  let extraInfo = {
    feel: "41",
    wind: "12",
    humidity: "70"
  };
  return (
    <div className="Extra">
      <h4>Feels Like</h4>
      <p>{extraInfo.feel}°F</p>
      <hr />
      <h4>WIND</h4>
      <p>{extraInfo.wind}MPH</p>
      <hr />
      <h4>HUMIDITY</h4>
      <p>{extraInfo.humidity}%</p>
    </div>
  );
}
