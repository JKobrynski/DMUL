import React, { Component } from "react";
import NoteCard from "./NoteCard";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

export default class Notes extends Component {
  state = {
    title: "",
    body: "",
    notes: [],
    error: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddNote = () => {
    if (this.state.title && this.state.body) {
      this.setState(state => {
        const notes = [
          ...state.notes,
          { title: state.title, body: state.body }
        ];

        return {
          notes,
          title: "",
          body: "",
          error: ""
        };
      });
    } else {
      this.setState({
        error: "Wszystkie pola są wymagane"
      });
    }
  };

  render() {
    const { notes, error } = this.state;
    let notesContent;

    notesContent =
      notes.length > 0
        ? notes.map((note, index) => <NoteCard key={index} note={note} />)
        : null;

    return (
      <div>
        {notesContent}
        {error ? <div className="alert alert-danger">{error}</div> : null}
        <TextFieldGroup
          placeholder="Tytuł"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          info="Tytuł notatki"
        />
        <TextAreaFieldGroup
          placeholder="Treść"
          name="body"
          value={this.state.body}
          onChange={this.onChange}
          info="Treść notatki"
        />
        <button
          type="button"
          onClick={this.onAddNote.bind(this)}
          className="btn btn-block btn-success mt-3"
        >
          Dodaj
        </button>
      </div>
    );
  }
}
