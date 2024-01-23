import React from 'react';
import '../styles/CharacterFilter.css';

const CharacterFilter = () => {
  return (
    <div className="filter-container">
      <label htmlFor="name-filter" className="filter-label">
        Filter by Name:
      </label>
      <input
        type="text"
        id="name-filter"
        className="filter-input"
        placeholder="Enter a name..."
      />
    </div>
  );
};

export default CharacterFilter;
