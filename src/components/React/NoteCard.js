import React from "react";

function NoteCard(props) {
  return (
    <div className="card text-white bg-info mb-3">
      <h4 className="card-header ">{props.note.title}</h4>
      <div className="card-body">
        <h5 className="card-text">{props.note.body}</h5>
      </div>
    </div>
  );
}

export default NoteCard;
