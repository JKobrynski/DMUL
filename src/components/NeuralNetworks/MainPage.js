import React, { Component } from "react";

import NNImage from "../../assets/NNImages/nn.png";

class MainPage extends Component {
  state = {
    selected: null,
    modelSelected: null
  };

  onClick = event => {
    var name = event.target.name;
    if (this.state.selected != name) {
      this.setState({ selected: name });
    } else {
      this.setState({ selected: null });
    }
  };

  onClickModel = event => {
    var name = event.target.name;
    if (this.state.modelSelected != name) {
      this.setState({
        selected: this.state.selected,
        modelSelected: name
      });
    } else {
      this.setState({
        selected: this.state.selected,
        modelSelected: null
      });
    }
  };

  getModelDiv = page => {
    switch (page.state.modelSelected) {
      case "Input":
        return (
          <div className="text-info">
            <p>
              <strong>Warstwa wejścia</strong> Tu będzie opis warstwy wejścia Tu
              będzie opis warstwy wejścia Tu będzie opis warstwy wejścia Tu
              będzie opis warstwy wejścia
            </p>
          </div>
        );
      case "Hidden":
        return (
          <div className="text-info">
            <strong>Warstwa ukryta</strong> Tu będzie opis warstwy ukrytej Tu
            będzie opis warstwy ukrytej Tu będzie opis warstwy ukrytej Tu będzie
            opis warstwy ukrytej
          </div>
        );
      case "Output":
        return (
          <div className="text-info">
            <strong>Warstwa wyjścia</strong> Tu będzie opis warstwy wyjścia Tu
            będzie opis warstwy wyjścia Tu będzie opis warstwy wyjścia Tu będzie
            opis warstwy wyjścia
          </div>
        );
      case null:
        return null;
      default:
        break;
    }
  };

  getDiv = page => {
    switch (page.state.selected) {
      case "Movie":
        return (
          <div className="row">
            <div className="col-md center mb-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rEDzUT3ymw4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        );
      case "Model":
        return (
          <div className="row mb-5">
            <div className="col-3">
              <div className="row m-5">
                <button
                  name="Input"
                  onClick={page.onClickModel}
                  className="btn btn-outline-danger"
                >
                  Input
                </button>
              </div>
              <div className="row m-5">
                <button
                  name="Hidden"
                  onClick={page.onClickModel}
                  className="btn btn-outline-info"
                >
                  Hidden
                </button>
              </div>
              <div className="row m-5">
                <button
                  name="Output"
                  onClick={page.onClickModel}
                  className="btn btn-outline-success"
                >
                  Output
                </button>
              </div>
            </div>
            <div className="col NNImage">
              <img src={NNImage} />
            </div>
            <div className="col-3">{page.getModelDiv(page)}</div>
          </div>
        );
      case null:
        return null;
      default:
        break;
    }
  };

  render() {
    const { selected } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md center mb-5">
            <button
              onClick={this.onClick}
              name="Movie"
              className="btn btn-primary ml-5 mr-5"
            >
              Jak to działa?
            </button>
            <button
              onClick={this.onClick}
              name="Model"
              className="btn btn-primary ml-5 mr-5"
            >
              Model sieci
            </button>
          </div>
        </div>
        {this.getDiv(this)}
      </div>
    );
  }
}

export default MainPage;
