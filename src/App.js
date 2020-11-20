import data from './bd/dictionary.json';
import './App.css';

function App() {
  return (
    <div className="App">
      {
        data.map(word => 
          <div className="card-hira">
            <h1 className="card-title">{word.hira}</h1>
            <p className="card-meaning">{word.meaning}</p>
          </div>
        )
      }
    </div>
  );
}

export default App;
