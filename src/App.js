import CharacterFilter from './components/CharacterFilter';
import Character from './components/Characters';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <CharacterFilter />
      </header>
      <main>
        <Character />
      </main>
    </div>
  );
}

export default App;
