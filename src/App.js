import React from "react";
import "./App.css";
import Logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Logo}   alt="Multimedia 2019"/>
        <p>Norbert Litokoski, Julian Kobryński</p>
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
