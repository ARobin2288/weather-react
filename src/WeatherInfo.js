import React from "react";
import FormalDate from "./FormalDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <FormalDate date={props.data.date} />
        <h1 className="place">{props.data.city}</h1>
        <br />
        <div className="row">
          <div className="col-5" id="extra">
            <h4>Feels Like</h4>
            <p>{Math.round(props.data.feels_like)}°F</p>
            <hr />
            <h4>WIND</h4>
            <p>{Math.round(props.data.wind)} mph</p>
            <hr />
            <h4>HUMIDITY</h4>
            <p>{Math.round(props.data.humidity)}%</p>
          </div>
          <div className="col-2">
            <div className="mainIcon">
            <WeatherIcon code={props.data.icon} size={64} />
            </div>
          </div>
          <div className="col-5" id="current">
            <WeatherTemperature fahrenheit={props.data.temperature} />
            <hr />
            <h4 className="conditions">{props.data.description}</h4>
          </div>
        </div>
      </div>
        );
}