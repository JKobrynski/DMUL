import React, { Component } from "react";

import Logo from "./logo.svg";

export default class Logo extends Component {
  render() {
    return (
      <div class="container">
        <img src={Logo} alt="Logo" />
      </div>
    );
  }
}
