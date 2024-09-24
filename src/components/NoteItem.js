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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="card my-3"
        >
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>

            {/* Button Container */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="button-container"
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="btn btn-danger mx-1"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "warning");
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2 }}
                className="btn btn-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={() => {
                  updateNote(note);
                }}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NoteItem;
