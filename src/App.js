import React, { useState } from 'react';
import CharacterFilter from './components/CharacterFilter';
import Character from './components/Characters';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <CharacterFilter onFilterChange={setFilter} />
      </header>
      <main>
        <Character filter={filter} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
