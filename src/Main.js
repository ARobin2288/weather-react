import React from "react";
import Location from "./Location";
import Extra from "./Extra";
import Temperature from "./Temperature";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="row">
        <div className="col-5">
          <Location />
          <Extra />
        </div>
        <div className="col-7">
          <Temperature />
        </div>
      </div>
    </div>
  );
}
