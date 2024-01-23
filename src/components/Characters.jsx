import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/CharactersCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </div>
      <div className="card-back">
        <h2>{character.name}</h2>
        <ul>
          <li>
            <span className="label">Status:</span>
            <span className="result">{character.status}</span>
          </li>
          <li>
            <span className="label">Species:</span>
            <span className="result">{character.species}</span>
          </li>
          <li>
            <span className="label">Gender:</span>
            <span className="result">{character.gender}</span>
          </li>
          <li>
            <span className="label">Location:</span>
            <span className="result">{character.location.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchData = useCallback((attempt = 1) => {
    axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
      console.log('fetching data successful with attempt ', attempt);
      setCharacters(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="characters-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
