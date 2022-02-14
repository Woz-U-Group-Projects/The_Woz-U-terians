import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's Alive! :D
        </p>
        <a
          className="App-link"
          href="https://github.com/Woz-U-Group-Projects/The_Woz-U-terians"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub Project
        </a>
        <a
          className="App-link"
          href="https://trello.com/b/YPCc93fo/woz-u-terrians-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Trello Board
        </a>
      </header>
    </div>
  );
}

export default App;
