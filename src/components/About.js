import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'


const About = () => {
    const a = useContext(noteContext)
    useEffect

    /* fallbacks to {} if context is undefined */
    const { name } = a || {};

  return (
    <div>
        This is the about {name} and he is in class {a.class}
    </div>
  )
}

export default About