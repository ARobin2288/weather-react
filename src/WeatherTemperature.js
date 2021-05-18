import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

    if (unit === "fahrenheit") {
return (
    <div className="WeatherTemperature">
    <h1>
        <span className="temp">{Math.round(props.fahrenheit)}</span>
        <span className="units"> °F | {" "}
            <a href="/" onClick={showCelcius}>°C</a>
        </span>
    </h1>
    </div>
);
    } else { 
        let celcius = (props.fahrenheit - 32) * 5 / 9;
        return (
            <div className="WeatherTemperature">
                <h1>
                <span className="temp">{Math.round(celcius)}</span>
                <span className="units">
                    <a href="/" onClick={showFahrenheit}>
                        °F
                    </a>{" "}
                    | °C
                </span>
                </h1>
            </div>
        )
    }
}


