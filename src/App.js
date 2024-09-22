import "./App.css";
/* IMPORTING FOR REACT ROUTER (V6) */
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    /* ALERT USESTATE */
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
          <div className="container my-3">
            <Routes>
              <Route exact path="/login"  element={<Login showAlert={showAlert}/>}></Route>
              <Route exact path="/signup"  element={<Signup showAlert={showAlert}/>}></Route>
              <Route exact path="/"  element={<Home showAlert={showAlert}/>}></Route>
              <Route exact path="/About" element={<About />}></Route>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;