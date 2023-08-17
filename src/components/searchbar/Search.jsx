import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css'; // Import the Bootstrap CSS file

function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="form-control search-input" />
      <button className="btn btn-primary search-button">
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;