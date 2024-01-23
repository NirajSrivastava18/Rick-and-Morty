import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/CharactersCard.css';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'green';
    case 'dead':
      return 'red';
    case 'unknown':
      return 'orange';
    default:
      return 'inherit'; // Default color
  }
};

const CharacterCard = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [episodeName, setEpisodeName] = useState('');
  const [isEpisodeLoading, setIsEpisodeLoading] = useState(true);

  //fetching episode api
  useEffect(() => {
    //generating only first episode Api
    const episodeUrl = character.episode[0];
    if (episodeUrl) {
      axios
        .get(episodeUrl)
        .then((response) => {
          setEpisodeName(response.data.name);
          setIsEpisodeLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching episode:', error);
          setIsEpisodeLoading(false);
        });
    } else {
      setEpisodeName('Unknown Episode');
      setIsEpisodeLoading(false);
    }
  }, [character.episode]);

  // Use the getStatusColor function to determine the color
  const statusColor = getStatusColor(character.status);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
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
              <span className="result" style={{ color: statusColor }}>
                {character.status}
              </span>
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
            <li>
              <span className="label">First Seen In:</span>
              {/* Display the episode name or loading status */}
              <span className="result">
                {isEpisodeLoading ? 'Loading...' : episodeName}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Characters = ({ filter }) => {
  const [characters, setCharacters] = useState([]);

  const fetchData = useCallback((attempt = 1) => {
    axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
      console.log('fetching data successful with attempt ', attempt);
      setCharacters(response.data.results);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="characters-grid">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
