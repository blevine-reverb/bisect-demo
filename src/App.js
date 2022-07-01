import guenter from './guenter-happy.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={guenter} className="guenter" alt="logo" />
        <p className="car">
        🏎️💨
        </p>
        <p className="road">
          -------------------------------------------------------------------------------------
        </p>
      </header>
    </div>
  );
}

export default App;
