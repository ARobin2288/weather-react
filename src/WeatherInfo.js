import React from "react";
import FormalDate from "./FormalDate";
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
              <p>{Math.round(props.data.wind)}mph</p>
              <hr />
              <h4>HUMIDITY</h4>
              <p>{Math.round(props.data.humidity)}%</p>
            </div>
            <div className="col-7" id="current">
              <img src={props.data.iconUrl}
              alt={props.data.description} />
              <h1>
                <span className="temp">{Math.round(props.data.temperature)}</span>
                <span className="units"> °F</span>
              </h1>
              <hr />
              <h4 className="conditions">{props.data.description}</h4>
            </div>
          </div>
        </div>
        );
}