import guenter from './guenter-oh-no.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={guenter} className="guenter" alt="logo" />
        <div className="cars">
          <p className="car otherCar">🏎️</p>
          <span className="crash">💥</span>
          <p className="car">
            🏎️💨
          </p>
        </div>
        <p className="road">
          -------------------------------------------------------------------------------------
        </p>
      </header>
    </div>
  );
}

export default App;
