import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
    const [alert, setAlert] = useState(null);
    const [userName, setUserName] = useState("");
    const [showWelcome, setShowWelcome] = useState(false);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const isAuthenticated = () => {
        return !!localStorage.getItem("token");
    };

    const handleLoginSuccess = (name) => {
        setUserName(name);
        setShowWelcome(true);
    };

    return (
        <NoteState>
            <BrowserRouter>
                <Navbar />
                <Alert alert={alert} />
                <div className="container">
                    <div className="container my-3">
                        <Routes>
                            <Route exact path="/login" element={<Login showAlert={showAlert} onLoginSuccess={handleLoginSuccess} />} />
                            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
                            {showWelcome ? (
                                <Route 
                                    exact 
                                    path="/" 
                                    element={<Welcome userName={userName} onComplete={() => setShowWelcome(false)} />} 
                                />
                            ) : (
                                <Route 
                                    exact 
                                    path="/" 
                                    element={isAuthenticated() ? <Home showAlert={showAlert} /> : <Navigate to="/login" />} 
                                />
                            )}
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
    );
}

export default App;
