import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import Audio from "../../assets/audio/background.mp3";
import PanPawel from "../../assets/audio/panpawel.mp3";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Multimedia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/react">
                Kobryński
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nn">
                Litkowski
              </a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
          <ReactAudioPlayer src={PanPawel} autoPlay controls loop />
        </div>
      </nav>
    );
  }
}

export default Navbar;
