import React from "react";
import Location from "./Location";
import Extra from "./Extra";
import Temperature from "./Temperature";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <Location />
      <br />
      <div className="row">
        <div className="col-4">
        <Extra />
        </div>
        <div className="col-8">
          <Temperature />
        </div>
      </div>
    </div>
  );
}
