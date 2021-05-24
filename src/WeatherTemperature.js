import React  from "react";

export default function WeatherTemperature(props) {
    return (
    <div className="WeatherTemperature">
    <h1>
        <span className="temp">{Math.round(props.fahrenheit)}</span>
        <span className="units"> °F </span>
    </h1>
    </div>
    );
}


