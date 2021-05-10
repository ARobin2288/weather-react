import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <br />
      <Main />
      <Footer />
      </div>
    </div>
  );
}