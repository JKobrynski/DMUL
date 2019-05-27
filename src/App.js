import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import components
import Navbar from "./components/UI/Navbar";
import Example from "./components/Playground/Example";
import Landing from "./components/UI/Landing";
import Footer from "./components/UI/Footer";

// Import react section components
import Homepage from "./components/React/Homepage";
import ReactPage from "./components/React/ReactPage";
import ReactNativePage from "./components/React/ReactNativePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/example" component={Example} />
          <Route exact path="/react" component={Homepage} />
          <Route exact path="/react/react-native" component={ReactNativePage} />
          <Route exact path="/react/reactjs" component={ReactPage} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
