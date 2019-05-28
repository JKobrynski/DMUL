import React, { Component } from "react";

export default class State extends Component {
  state = {
    name: "",
    lastName: ""
  };

  componentDidMount() {
    this.setState({
      name: "Norbert",
      lastName: "Litkowski"
    });
  }

  render() {
    return (
      <div className="container">
        <h1>
          Hello {this.state.name} {this.state.lastName}!
        </h1>
      </div>
    );
  }
}
