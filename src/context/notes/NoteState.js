import React from 'react';
import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "66ee39c504c4580f3e8d2d9c",
          "user": "66eb3373c06cf9831468cb7d",
          "title": "My Title 1 ",
          "description": "Please Wake up early 1",
          "tag": "meow 1",
          "date": "2024-09-21T03:13:09.608Z",
          "__v": 0
        },
        {
          "_id": "66ee39ce04c4580f3e8d2d9f",
          "user": "66eb3373c06cf9831468cb7d",
          "title": "My Title 2 ",
          "description": "Please Wake up early 2",
          "tag": "meow 2",
          "date": "2024-09-21T03:13:18.756Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)

    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;