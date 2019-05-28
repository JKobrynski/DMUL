import React, { Component } from "react";

import Togglable from "../common/Togglable";
import MainTab from "./MainTab";

class Homepage extends Component {
  render() {
    return (
      <div className="container m-5 ">
        <div className="row">
          <Togglable type="secondary" title="Czym są sieci neuronowe?">
            <div className="container">
              <div className="row">
                <h4 className="text-left m-3">
                  <strong>Sieci neuronowe</strong> ogólna nazwa struktur
                  matematycznych i ich modeli, zajmujących się przetwarzaniem
                  sygnałów poprzez <strong>sztuczne neurony</strong>
                </h4>
                <h4 className="text-left m-3">
                  Ich inspiracją była budowa naturalnych neuronów, łączących je
                  synaps, oraz układów nerwowych, w szczególności mózgu.
                </h4>
              </div>
              <MainTab />
            </div>
          </Togglable>
        </div>
        <div className="row">
          <div className="col-6">
            <Togglable type="info" title="Zastosowania sieci neuronowych" />
          </div>
          <div className="col-6">
            <Togglable type="success" title="Historia sieci neuronowych" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
