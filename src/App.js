import "./App.css";
import React, { useState} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
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

  // CHECK IF USER IS AUTHENTICATED
  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <div className="container my-3">
              <Routes>
                <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
                <Route 
                  exact 
                  path="/" 
                  element={isAuthenticated() ? <Home showAlert={showAlert} /> : <Navigate to="/login" />} 
                />
                <Route 
                  exact 
                  path="/about" 
                  element={isAuthenticated() ? <About /> : <Navigate to="/login" />} 
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
