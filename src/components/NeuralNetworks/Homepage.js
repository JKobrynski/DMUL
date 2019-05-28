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
            <Togglable type="info" title="Zastosowania">
              <div className="container">
                <div className="row">
                  <ul className="text-left m-3 h5">
                    Do najczęściej wymienianych zastosowań należą:
                    <li className="text-left m-3 h5">
                      rozpoznawanie pisma (OCR)
                    </li>
                    <li className="text-left m-3 h5">Synteza mowy</li>
                    <li className="text-left m-3 h5">
                      Aproksymacja, prognozowanie, przewidywanie danych
                      wyjściowych na podstawie danych wejściowych bez
                      konieczności jawnego definiowania związku pomiędzy nimi
                    </li>
                    <li className="text-left m-3 h5">
                      Klasyfikacja i rozpoznawanie np. zdjęć
                    </li>
                    <li className="text-left m-3 h5">
                      Kojarzenie danych – sieci neuronowe pozwalają
                      zautomatyzować procesy wnioskowania i pomagają wykrywać
                      istotne powiązania pomiędzy danymi
                    </li>
                  </ul>
                </div>
              </div>
            </Togglable>
          </div>
          <div className="col-6">
            <Togglable type="success" title="Historia" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
