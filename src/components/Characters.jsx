import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchData = useCallback((attempt = 1) => {
    axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
      console.log('fetching data successful with attempt ', attempt);
      setCharacters(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <div className="characters-grid">
      <button onClick={fetchData}>fetch</button>
    </div>
  );
};

export default Characters;
