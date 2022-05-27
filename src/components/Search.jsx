import React, { useState } from "react";

const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a city..."
        className="searchbar"
        value={props.city}
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button className="search-btn" onClick={props.onClick}>
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
    </div>
  );
};

export default Search;
