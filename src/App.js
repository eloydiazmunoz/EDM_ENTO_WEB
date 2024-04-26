import './App.css';
import Test from './Test/test.js';
import Presentacio from './Prentacio/presentacio.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Test/>
        <Presentacio/>
        <p>
          Edit <code>src/App.js</code> and save to reload.ELOY 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
