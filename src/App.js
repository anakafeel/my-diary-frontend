import "./App.css";
/* IMPORTING FOR REACT ROUTER (V6) */
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="meow"/>
          <div className="container">

          <div className="container my-3">
            <Routes>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/" element={<Home />}></Route>
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
