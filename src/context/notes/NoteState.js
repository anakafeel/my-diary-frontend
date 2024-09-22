import noteContext from "./NoteContext";
import { useState, useEffect } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)


  // Get all Notes
 const getNotes = async () => {
    // API Call 
    const authtoken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      }
    });
    const json = await response.json() 
    setNotes(json)
  }


useEffect(() => {
  const fetchNotes = async () => {
      try {
          await getNotes(); // Call your function to fetch notes
      } catch (error) {
          console.error("Error fetching notes:", error);
      }
  };

  fetchNotes(); 
}, []); 

  

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const authtoken = localStorage.getItem("token"); /* TO AVOID HARDCODING AND IMPROVE SECURITY */
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const authtoken = localStorage.getItem("token"); /* TO AVOID HARDCODING AND IMPROVE SECURITY */
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      }
    });
    response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const authtoken = localStorage.getItem("token"); /* TO AVOID HARDCODING AND IMPROVE SECURITY */
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      },
      body: JSON.stringify({title, description, tag})
    });
    await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )

}
export default NoteState;