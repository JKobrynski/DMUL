import React, { Component } from "react";

import NNImage from "../../assets/NNImages/nn.png";

class MainTab extends Component {
  state = {
    selected: null,
    modelSelected: null,
    divWidth: 9
  };

  onClick = event => {
    var name = event.target.name;
    if (this.state.selected !== name) {
      this.setState({ selected: name, divWidth: 9 });
    } else {
      this.setState({ selected: null, divWidth: 9 });
    }
  };

  onClickModel = event => {
    var name = event.target.name;
    if (this.state.modelSelected !== name) {
      this.setState({
        selected: this.state.selected,
        divWidth: 6,
        modelSelected: name
      });
    } else {
      this.setState({
        selected: this.state.selected,
        divWidth: 9,
        modelSelected: null
      });
    }
  };

  getModelDiv = page => {
    switch (page.state.modelSelected) {
      case "Input":
        return (
          <div className="text-danger">
            <p className="h5 text-justify m-2">
              <strong>Warstwa wejścia</strong> &ndash; ta warstwa służy do
              przekazania odpowiednio przetworzonych (na liczby) danych
              wejściowych do dalszych warstw sieci
            </p>
          </div>
        );
      case "Hidden":
        return (
          <div className="text-info">
            <p className="h5 text-justify m-2">
              <strong>Warstwa ukryta</strong> &ndash; najważniejsza warstwa. To
              ona przetwarza, przyjęte w warstwie wejścia, dane, uczy sieć i
              wykonuje obliczenia
            </p>
          </div>
        );
      case "Output":
        return (
          <div className="text-success">
            <p className="h5 text-justify m-2">
              <strong>Warstwa wyjścia</strong> &ndash; w tej warstwie dostajemy
              przetworzone, gotowe do interpretacji dane
            </p>
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
                title="Jak to działa?"
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
                  className="btn btn-outline-danger btn-block"
                >
                  Input
                </button>
              </div>
              <div className="row m-5">
                <button
                  name="Hidden"
                  onClick={page.onClickModel}
                  className="btn btn-outline-info btn-block"
                >
                  Hidden
                </button>
              </div>
              <div className="row m-5">
                <button
                  name="Output"
                  onClick={page.onClickModel}
                  className="btn btn-outline-success btn-block"
                >
                  Output
                </button>
              </div>
            </div>
            <div className={"col-" + this.state.divWidth + " NNImage"}>
              <img alt="Model sieci neuronowej" src={NNImage} />
            </div>
            <div className={"col-" + (9 - this.state.divWidth)}>
              {page.getModelDiv(page)}
            </div>
          </div>
        );
      case null:
        return null;
      default:
        break;
    }
  };

  render() {
    const { selected, divWidth } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-1 mt-5 mb-5" />
          <div className="col-5 mt-5 mb-5">
            <button
              onClick={this.onClick}
              name="Movie"
              className="btn btn-block btn-lg btn-primary"
            >
              Jak to działa?
            </button>
          </div>
          <div className="col-5 mt-5 mb-5">
            <button
              onClick={this.onClick}
              name="Model"
              className="btn btn-block btn-lg btn-primary"
            >
              Model sieci
            </button>
          </div>
          <div className="col-1 mt-5 mb-5" />
        </div>
        {this.getDiv(this)}
      </div>
    );
  }
}

export default MainTab;
