import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let currentTemp = {
    value: "48",
    conditions: "SHOWERS"
  };
  return (
    <div className="Temperature">
      <img
        className="rain"
        src="raindrops.jpg"
        alt="Raindrops on glass"
        width="60"
        height="60"
      />
      <h1>
        <span className="temp">{currentTemp.value}</span>°
        <span className="units">F|C</span>
      </h1>
      <hr />
      <h4 className="conditions">{currentTemp.conditions}</h4>
    </div>
  );
}
