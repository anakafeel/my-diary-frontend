import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import { motion } from "framer-motion";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className="col-md-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card my-3"
          style={{cursor: "pointer"}}
        >
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <button
              className="btn btn-danger mx-1"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "warning");
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button
              className="btn btn-primary mx-1"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
              onClick={() => {
                updateNote(note);
              }}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NoteItem;
