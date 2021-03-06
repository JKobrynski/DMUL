import React, { Component } from "react";
import logo from "../../assets/images/reactlogo.png";

import Togglable from "../common/Togglable";

class Homepage extends Component {
  render() {
    return (
      <div className="container Homepage mt-5">
        <div className="row">
          <Togglable type="primary" title="Czym jest React.js?">
            <h4 className="text-left m-3">
              <strong>React.js</strong> to biblioteka języka JavaScript, która
              jest wykorzystywana do tworzenia interfejsów graficznych aplikacji
              internetowych. Została stworzona przez Jordana Walke, programistę
              facebooka. Główną cechą wyróniającą tę bibliotekę jest wirutalny
              DOM (Obiektowy Model Dokumentu). React przechowuje cały DOM
              aplikacji w pamięci, po zmianie stanu wyszukuje rónice miedzy
              wirtualnym i prawdziwym DOM i aktualizuje zmiany.
            </h4>
          </Togglable>
          <Togglable
            type="secondary"
            title="Gdzie wykorzystywana jest ta technologia?"
          >
            <h4 className="text-left m-3">
              Obecnie React.js jest wykorzystywany na stronach internetowych
              takich jak Netflix, Imgur, PayPal, Archive.org, Gamepedia, czy
              Walmart. W 2015 roku React.js oraz React Native były dwoma
              najpopularniejszymi otwartymi projektami na stronie Github
            </h4>
          </Togglable>
          <Togglable type="warning" title="Czym jest React Native?">
            <h4 className="text-left m-3">
              <strong>React Native</strong> to otwarte oprogramowanie (open
              source) do tworzenia aplikacji mobilnych stworzone przez
              Facebooka. Jest uzywany do tworzenia aplikacji na iOS oraz android
              umozliwiając łączenie biblioteki React Native z natywnymi
              mozliwosciami platform. Jego pierwsza wersja została opublikowana
              w 2015 roku.
            </h4>
          </Togglable>
          <div className="col-md-12 mt-4">
            <div className="row">
              <div className="col-md-12 m-auto text-center">
                <div
                  onClick={() => this.props.history.push("/react/reactjs")}
                  className="card text-white bg-success mb-3"
                >
                  <div className="card-body btn btn-success">
                    <h3 className="card-title">React.js</h3>
                    <h4 className="card-text">
                      Więcej informacji, przykładowe componenty.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <button
                  onClick={() => this.props.history.push("/")}
                  className="btn btn-block btn-outline-warning"
                >
                  Powrót
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
