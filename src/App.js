import React  from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer>
          Coded by Robin A. Open-sourced on{" "} 
          <a href="https://github.com/ARobin2288/weather-react.git" rel="noopener noreferrer" id="open-source-link" target="_blank">GitHub</a>
          {" "}Hosted on <a href="https://loving-morse-9c6639.netlify.app/" rel="noopener noreferrer" id="open-source-link" target="_blank"> Netlify</a>.
        </footer>
      </div>
    </div>
  );
}