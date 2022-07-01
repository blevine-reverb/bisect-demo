import guenter from './guenter-oh-no.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={guenter} className="guenter" alt="logo" />
        <span className="cars">
          <p className="barrier">
            🚧
          </p>
          <p className="car">
            🏎️
          </p>
        </span>
        <p className="road">
          -------------------------------------------------------------------------------------
        </p>
      </header>
    </div>
  );
}

export default App;
