import noteContext from "./NoteContext";
import { useState, useEffect, useCallback } from "react";

const NoteState = (props) => {
  const host = process.env.REACT_APP_API_URL;
  const [notes, setNotes] = useState([]);

  // Get all Notes
  const getNotes = useCallback(async () => {
    const authtoken = localStorage.getItem("token");
    if (!authtoken) {
      console.error("Auth token not found");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": authtoken
        }
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get error text
        console.error("Failed to fetch notes:", errorText);
        return;
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }, [host]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  // Add a Note
  const addNote = async (title, description, tag) => {
    const authtoken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      },
      body: JSON.stringify({ title, description, tag })
    });

    if (response.ok) {
      const note = await response.json();
      setNotes((prevNotes) => [...prevNotes, note]); // Use functional update
    } else {
      const errorText = await response.text();
      console.error("Failed to add note:", errorText);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const authtoken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      }
    });

    if (response.ok) {
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } else {
      const errorText = await response.text();
      console.error("Failed to delete note:", errorText);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const authtoken = localStorage.getItem("token");
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
      },
      body: JSON.stringify({ title, description, tag })
    });
  
    if (response.ok) {
      // Optimistically update the notes state
      const updatedNote = { _id: id, title, description, tag }; // Create the updated note object
      setNotes(prevNotes => 
        prevNotes.map(note => (note._id === id ? updatedNote : note))
      );
    } else {
      // Handle the error if needed
      console.error("Error updating note:", response.statusText);
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
