import React, { Component } from "react";

import LogoSvg from "../../logo.svg";

class Logo extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5 Svg-logo">
        <img className="App-logo Svg-logo" src={LogoSvg} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
