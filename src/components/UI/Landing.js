import React, { Component } from "react";

import Logo from "./Logo";
import ReactLogo from "../../assets/images/reactlogo.png";
import DLImage from "../../assets/NNImages/DL.jpeg";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <Logo />
          </div>
        </div>
        <div className="row mb-5 mt-5">
          <div className="col-md-6 d-flex">
            <div className="card" style={{ backgroundColor: "#eee" }}>
              <a
                className="card-header btn btn-secondary font-weight-bold"
                style={{ fontSize: 25 }}
                href="/react"
              >
                React.js
              </a>
              <div className="my-auto">
                <img
                  src={ReactLogo}
                  alt="Logo"
                  className="img-fluid mt-3 mb-3"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card" style={{ backgroundColor: "#ddd" }}>
              <a
                className="card-header btn btn-secondary font-weight-bold"
                style={{ fontSize: 25 }}
                href="/nn"
              >
                Sieci neuronowe
              </a>
              <img src={DLImage} alt="Logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
