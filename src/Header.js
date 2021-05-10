import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <form>
        <input
          type="search"
          className="searchbar" 
          placeholder="Enter City Name..."
          autoFocus="on"
        />
        <button type="submit">Search <i className="fas fa-search-location"></i>
        </button>
      </form>
    </div>
  );
}