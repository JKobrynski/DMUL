import React, { Component } from "react";

import Logo from "./Logo";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="display-4 text-left">Multimedia</div>
          </div>
          <div className="col-md-3">
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}
