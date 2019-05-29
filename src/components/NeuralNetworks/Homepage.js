import React, { Component } from "react";

import Togglable from "../common/Togglable";
import MainTab from "./MainTab";

import TFLogo from "../../assets/NNImages/TFLogo.png";

class Homepage extends Component {
  render() {
    return (
      <div className="container m-5 ">
        <div className="row">
          <Togglable type="primary" title="Czym są sieci neuronowe?">
            <div className="container">
              <div className="row">
                <h4 className="text-justify m-3">
                  <strong>Sieci neuronowe</strong> ogólna nazwa struktur
                  matematycznych i ich modeli, zajmujących się przetwarzaniem
                  sygnałów poprzez <strong>sztuczne neurony</strong>
                </h4>
                <h4 className="text-justify m-3">
                  Ich inspiracją była budowa naturalnych neuronów, łączących je
                  synaps, oraz układów nerwowych, w szczególności mózgu.
                </h4>
              </div>
              <MainTab />
            </div>
          </Togglable>
        </div>
        <div className="row">
          <Togglable type="warning" title="Technologie">
            <div className="container">
              <div className="row">
                <div className="col-5 m-5">
                  <h4 className="text-justify ">
                    Jedną z najpopularniejszych technologii wykorzystywanych do
                    uczenia maszynowego jest <strong>TensorFlow</strong> &mdash;
                    otwartoźródłowa biblioteka programistyczna napisana przez
                    Google Brain Team. Wykorzystywana jest w uczeniu maszynowym
                    i głębokich sieciach neuronowych.
                  </h4>
                </div>
                <div className="col-5 m-3">
                  <img className="TFImage mt-2" src={TFLogo} alt="TensorFlow" />
                </div>
              </div>
              <div className="row m-3">
                <ul className="h4 text-justify">
                  Inne warte uwagi technologie to m.in.:
                  <li className="h4 text-justify mt-3">
                    Theano &mdash; biblioteka będąca największym rywalem
                    TensorFlow, również napisana w Pythonie
                  </li>
                  <li className="h4 text-justify mt-3">
                    Microsoft Cognitive Toolkit (CNTK) &mdash; otwartoźródłowa
                    biblioteka do uczenia maszynowego od Microsoftu
                  </li>
                  <li className="h4 text-justify mt-3">
                    Keras &mdash; otwartoźródłowa biblioteka, będąca
                    wysokopoziomowym "opakowaniem" obsługującym zarówno Theano,
                    jak i TensorFlow, a w przyszłości również Microsoft CNTK
                  </li>
                </ul>
              </div>
            </div>
          </Togglable>
        </div>
        <div className="row">
          <div className="col-6">
            <Togglable type="info" title="Zastosowania">
              <div className="container">
                <div className="row">
                  <ul className="text-justify m-3 h5">
                    Do najczęściej wymienianych zastosowań należą:
                    <li className="text-justify m-3 h5">
                      rozpoznawanie pisma (OCR)
                    </li>
                    <li className="text-justify m-3 h5">Synteza mowy</li>
                    <li className="text-justify m-3 h5">
                      Aproksymacja, prognozowanie, przewidywanie danych
                      wyjściowych na podstawie danych wejściowych bez
                      konieczności jawnego definiowania związku pomiędzy nimi
                    </li>
                    <li className="text-justify m-3 h5">
                      Klasyfikacja i rozpoznawanie np. zdjęć
                    </li>
                    <li className="text-justify m-3 h5">
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
            <Togglable type="success" title="Historia">
              <div className="container">
                <div className="row">
                  <ul className="h4 text-justify">
                    <li className="h4 text-justify mt-3">
                      1943 &ndash; model neuronu McCullocha-Pittsa
                    </li>
                    <li className="h4 text-justify mt-3">
                      1958 &ndash; perceptron, najprostsza sieć
                    </li>
                    <li className="h4 text-justify mt-3">
                      1969 &ndash; problem z perceptronem
                    </li>
                    <li className="h4 text-justify mt-3">
                      1986 &ndash; propagacja wsteczna
                    </li>
                    <li className="h4 text-justify mt-3">
                      2006 &ndash; uczenie głębokie
                    </li>
                  </ul>
                </div>
              </div>
            </Togglable>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-2" />
          <div className="col-md-8">
            <button
              onClick={() => this.props.history.push("/")}
              className="btn btn-block btn-lg btn-outline-warning"
            >
              Powrót
            </button>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default Homepage;
