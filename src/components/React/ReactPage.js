import React, { Component } from "react";

import Togglable from "../common/Togglable";
import Notes from "./Notes";
import NotesImg from "../../assets/ReactImages/NotesComponent.png";
import SingleNoteImg from "../../assets/ReactImages/SingleNote.png";
import NotesContentImg from "../../assets/ReactImages/NotesContent.png";

export default class ReactPage extends Component {
  state = {
    toggleNotes: true
  };

  ToggleNotes = () => {
    this.setState({
      toggleNotes: !this.state.toggleNotes
    });
  };

  render() {
    const { toggleNotes } = this.state;
    return (
      <div className="row Homepage">
        <div className="col-md-8 mt-4">
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
          <div className="col-md-12 mt-4">
            <button
              onClick={this.ToggleNotes}
              className="btn-block btn btn-danger"
            >
              Schowaj Notatki
            </button>
          </div>
        </div>
        <div className="col-md-4 mt-5 text-left">
          {toggleNotes ? <Notes /> : null}
        </div>
      </div>
    );
  }
}
