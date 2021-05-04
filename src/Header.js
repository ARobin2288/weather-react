import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <input
          type="search"
          className="searchbar"
          placeholder="Enter City Name..."
        />
        <button type="submit">Search
        </button>
      </form>
    </div>
  );
}