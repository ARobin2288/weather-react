import React from "react";
import Main from "./Main";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
      <form>
        <input
          type="search"
          className="searchbar" 
          placeholder="Enter City Name..."
          autoFocus="on"
        />
        <button type="submit">Search</button>
      </form>
    </header>
      <br />
      <Main />
      <footer>Coded by Robin Andrews. Open-sourced on <a href="https://github.com/ARobin2288/weather-react.git" rel="noreferrer" id="open-source-link" target="_blank">GitHub</a></footer>
      </div>
    </div>
  );
}