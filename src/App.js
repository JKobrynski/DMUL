import React from "react";
import "./App.css";
import Logo from './logo.svg';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components
import Navbar from "./components/UI/Navbar";
import Example from "./components/Playground/Example";
import Landing from "./components/UI/Landing";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/example" component={Example} />
        </div>
        {/* <header className="App-header">
          <p>Norbert Litokoski, Julian Kobryński</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn btn-dark">siusiak</button>
        </header> */}
      </div>
    </Router>
=======
    <div className="App">
      <header className="App-header">
      <Logo />
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
>>>>>>> 1d8c235dbb4ba6c4b06584b80311f0db34e3190f
  );
}

export default App;
