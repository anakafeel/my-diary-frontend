import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props)=>{

    const initstate = {
        "name":"Saim",
        "class":"5B"
    };

    const [state, setState] = useState(initstate);
    const update=()=>{
        setTimeout(() => {
            setState({
        "name":"Zoya",
        "class":"5A"
            })
        }, 1000);
    }

    return(
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;