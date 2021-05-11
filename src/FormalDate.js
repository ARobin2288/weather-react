import React from "react";
import "./FormalDate.css";

export default function FormalDate(props) {
    let days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat"
    ];
    let day =  days[props.date.getDay()];

    let months = [
	    "January",
	    "February",
	    "March",
	    "April",
	    "May",
	    "June",
	    "July",
	    "August",
	    "September",
	    "October",
	    "November",
	    "December"
	      ];
    let month = months[props.getMonth()];

    let date = props.getDate();
    let year = props.getFullYear();
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return ( 
        <div className="FormalDate">
            Updated 
            <span> {day}, {month} {date}, {year} {hours}:{minutes}</span>
        </div>
    )
}