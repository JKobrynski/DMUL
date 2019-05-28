import React, { Component } from "react";

import Togglable from "../common/Togglable";
import Notes from "./Notes";
import NotesImg from "../../assets/ReactImages/NotesComponent.png";
import SingleNoteImg from "../../assets/ReactImages/SingleNote.png";
import NotesContentImg from "../../assets/ReactImages/NotesContent.png";

import Functional from "../Playground/Functional";
import ClassBased from "../Playground/ClassBased";
import FunctionalImg from "../../assets/ReactImages/Functional.png";
import ClassBasedImg from "../../assets/ReactImages/ClassBased.png";

import State from "../Playground/State";
import StateImg from "../../assets/ReactImages/State.png";
import LifecycleImg from "../../assets/ReactImages/Lifecycle.png";
import StateExampleImg from "../../assets/ReactImages/StateExample.png";

export default class ReactPage extends Component {
  state = {
    toggleNotes: false,
    toggleDefs: true
  };

  ToggleNotes = () => {
    this.setState({
      toggleNotes: !this.state.toggleNotes,
      toggleDefs: !this.state.toggleDefs
    });
  };

  render() {
    const { toggleDefs } = this.state;
    return (
      <div className="container">
        {toggleDefs ? (
          <div className="row Homepage">
            <div className="col-md-12 col-lg-12 col-xl-12 mt-5">
              <Togglable type="primary" title="Komponent">
                <h3 className="text-left m-3">
                  Komponenty to pewnego rodzaju cegiełki, z których budujemy
                  nasz interfejs w aplikacji React.js. W skrócie component jest
                  klasą lub funkcją języka JavaScript, która moze pobierać dane
                  od uzytkownika i zwraca element Reactowy.
                </h3>
              </Togglable>
              <div className="row">
                <div className="col-md-6">
                  <Togglable type="secondary" title="Komponent funkcyjny">
                    <div className="mt-3">
                      <Functional />
                    </div>
                    <img
                      src={FunctionalImg}
                      alt="Code screenshot"
                      className="img-fluid mt-5 mb-3"
                    />
                  </Togglable>
                </div>
                <div className="col-md-6">
                  <Togglable type="danger" title="Komponent klasowy">
                    <div className="mt-3">
                      <ClassBased />
                    </div>
                    <img
                      src={ClassBasedImg}
                      alt="Code Screenshot"
                      className="img-fluid mt-5 mb-3"
                    />
                  </Togglable>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Togglable type="info" title="Wybór komponentu">
                    <h3 className="text-left m-3">
                      <strong>Komponentu funkcyjnego</strong> uzywamy w
                      przypadku, gdy chcemy zaprezentować jakiś element, który
                      nie posiada własnego <strong>stanu</strong> i nie
                      potrzebuje <strong>metod cyklu zycia.</strong>
                    </h3>
                    <h3 className="text-left m-3">
                      W przypadku, gdy na przykład chcemy zapisać dane, które
                      wprowadził uzytkownik, korzystamy z{" "}
                      <strong>komponentu klasowego</strong> i wprowadzamy w nim
                      element <em>state</em>.
                    </h3>
                    <div className="row mt-3 mb-3">
                      <div className="col-md-6">
                        <Togglable type="secondary" title="Stan componentu">
                          <img
                            src={StateImg}
                            alt="Code Screenshot"
                            className="img-fluid mt-5 mb-3"
                          />
                        </Togglable>
                      </div>
                      <div className="col-md-6">
                        <Togglable type="secondary" title="Metody cyklu zycia">
                          <img
                            src={LifecycleImg}
                            alt="Code Screenshot"
                            className="img-fluid mt-5 mb-3"
                          />
                        </Togglable>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <Togglable type="warning" title="Działanie">
                          <div className="mt-4">
                            <State />
                          </div>
                          <img
                            src={StateExampleImg}
                            alt="Code Screenshot"
                            className="img-fluid mt-5 mb-3"
                          />
                        </Togglable>
                      </div>
                    </div>
                  </Togglable>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  onClick={this.ToggleNotes}
                  className="btn btn-block btn-outline-success mt-4"
                >
                  Przykładowy program
                </button>
              </div>
              <div className="col-md-12">
                <div className="row mt-5">
                  <div className="col-md-6">
                    <button
                      onClick={() => this.props.history.push("/react")}
                      className="btn btn-block btn-outline-warning"
                    >
                      Powrót
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      onClick={() => this.props.history.push("/")}
                      className="btn btn-block btn-warning"
                    >
                      Strona domowa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row Homepage">
            {/* <div className="col-md-8 mt-4">
              <Togglable type="primary" title="Component Notatek">
                <img
                  className="img-fluid mt-3 mb-3"
                  src={NotesContentImg}
                  alt="Code Screenshot"
                />
                <img
                  className="img-fluid mt-3 mb-3"
                  src={NotesImg}
                  alt="Code Screenshot"
                />
              </Togglable>
              <Togglable type="warning" title="Component pojedynczej notatki">
                <img
                  className="img-fluid mt-3 mb-3"
                  src={SingleNoteImg}
                  alt="Code Screenshot"
                />
              </Togglable>
            </div> */}
            <div className="container text-left">
              <Notes />
            </div>
            <div className="col-md-6">
              <button
                onClick={this.ToggleNotes}
                className="btn btn-block btn-outline-warning mt-5"
              >
                Powrót
              </button>
            </div>
            <div className="col-md-6">
              <button
                onClick={() => this.props.history.push("/")}
                className="btn btn-block btn-warning mt-5"
              >
                Strona Domowa
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
