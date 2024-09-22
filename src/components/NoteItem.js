import React,{useContext} from 'react'
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote }=context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>

          <a href="#" className="btn btn-primary mx-1 ">
            <i className="fa-regular fa-pen-to-square"></i>
          </a>
          <a href="#" className="btn btn-danger mx-1 ">
            <i className="fa-solid fa-trash"  onClick={()=>{deleteNote(note._id)}}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
