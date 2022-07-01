import guenter from './guenter-oh-no.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={guenter} className="guenter" alt="logo" />
        <span className="cars">
          <p className="car otherCar">🏎️</p>
          <p className="smoke">
            💨
          </p>
          <p className="car">
            🏎️
          </p>
          <p className="smoke">
            💨
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
