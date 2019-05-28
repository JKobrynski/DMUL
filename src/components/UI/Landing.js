import React, { Component } from "react";

import Logo from "./Logo";
import DLImg from "../../assets/NNImages/DL.jpeg";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="display-4 mt-5 text-left">
              Informatyka jest fascynująca
              <div className="row">
                <a href="/nn">
                  <img
                    src={DLImg}
                    className="LandingImage m-5"
                    alt="Sieci neuronowe"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}
