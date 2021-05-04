import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(
            `The Weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°F`
        );
    }
    let apiKey = "0f1996bbebf340db45987ce9fc344036";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
     axios.get(apiUrl).then(handleResponse);
     return (
      <Loader type="Bars" color="#00BFFF" height={180} width={180} />
    );
}