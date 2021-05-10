import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <br />
      <Main />
      <footer>Coded by Robin Andrews. Open-source on <a href="https://github.com/ARobin2288/weather-react.git" id="open-source-link">GitHub</a></footer>
      </div>
    </div>
  );
}