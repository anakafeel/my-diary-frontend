import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i class="fa-solid fa-plus"></i>
          <a href="#" className="btn btn-primary mx-2 my-2">
            Go somewhere
          </a>
          <a href="#" className="btn btn-danger mx-2 my-2">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
