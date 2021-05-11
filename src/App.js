import React, { useState } from "react";
import axios from "axios";
import FormalDate from "./FormalDate";
import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
  }

  if (weatherData.ready) {
    return (
    <div className="container">
      <div className="App">
        <form>
          <input
            type="search"
            className="searchbar" 
            placeholder="Enter City Name..."
            autoFocus="on"
          />
          <button type="submit">Search</button>
        </form>
        <br />
        <div className="Main">
            <FormalDate date={weatherData.date} />
          <h1 className="place">{weatherData.city}</h1>
          <br />
          <div className="row">
            <div className="col-5" id="extra">
              <h4>Feels Like</h4>
              <p>{Math.round(weatherData.feels_like)}°F</p>
              <hr />
              <h4>WIND</h4>
              <p>{Math.round(weatherData.wind)}mph</p>
              <hr />
              <h4>HUMIDITY</h4>
              <p>{Math.round(weatherData.humidity)}%</p>
            </div>
            <div className="col-7" id="current">
              <img src={weatherData.iconUrl}
              alt={weatherData.description} />
              <h1>
                <span className="temp">{Math.round(weatherData.temperature)}</span>
                <span className="units"> °F</span>
              </h1>
              <hr />
              <h4 className="conditions">{weatherData.description}</h4>
            </div>
          </div>
        </div>
        <footer>Coded by Robin Andrews. Open-sourced on <a href="https://github.com/ARobin2288/weather-react.git" rel="noreferrer" id="open-source-link" target="_blank">GitHub</a></footer>
      </div>
    </div>
  );
} else {
  const apiKey = "0f1996bbebf340db45987ce9fc344036";
  let city = "Chicago";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}
}