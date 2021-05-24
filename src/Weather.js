import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);   
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }

function handleSubmit(event) {
    event.preventDefault();
    search();
}
  
  function handleCityChange(event) {
  setCity(event.target.value);
  }

function search() {
    const apiKey = "0f1996bbebf340db45987ce9fc344036";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  }

    if (weatherData.ready) {
    return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="searchbar" 
              placeholder="Enter City Name..."
              autoFocus="on"
              onChange={handleCityChange}
            />
          <button type="submit">Search</button>
        </form>
        <br />
        <div className="weatherData">
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        </div>
    );
    } else {
        search();
        return "Loading...";
    }
}