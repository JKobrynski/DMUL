import React, { Component } from "react";

import Togglable from "../common/Togglable";
import MainPage from "./MainPage";

class Homepage extends Component {
  render() {
    return (
      <div className="container Homepage mt-5">
        <div className="row">
          <Togglable type="secondary" title="Czym są sieci neuronowe?">
            <div className="container">
              <div className="row">
                <h4 className="text-left m-3">
                  <strong>Sieci neuronowe</strong> to szerokie zagadnienie
                  wywodzące się od próby matematycznego modelowania działania
                  mózgu.
                </h4>
              </div>
              <MainPage />
            </div>
          </Togglable>
        </div>
      </div>
    );
  }
}

export default Homepage;
