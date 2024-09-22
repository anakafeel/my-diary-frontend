import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Signup.css';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        
        if (json.success) {
            localStorage.setItem('token', json.token);
            // Check if json.user is defined and has a name
            if (json.user && json.user.name) {
                props.onLoginSuccess(json.user.name); // Pass user name to parent
            } else {
                console.error("User name not found in response:", json.user);
                props.showAlert("Login successful but user name not found", "warning");
            }
            props.showAlert("Signed in Successfully", "success");
            navigate("/");
        } else {
            props.showAlert("Invalid credentials", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            className="d-flex flex-column align-items-center justify-content-center gradient-background"
            style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            <motion.h1
                className="text-white mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
            >
                Welcome to My-Diary
            </motion.h1>
            <motion.div
                className="card p-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
                <h2 className="my-2">Login with your account details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            onChange={onChange}
                            type="email"
                            className="form-control"
                            id="email"
                            value={credentials.email}
                            name="email"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            onChange={onChange}
                            type="password"
                            value={credentials.password}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Submit
                    </motion.button>
                </form>
                <motion.div
                    className="mt-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Link to="/signup" className="btn btn-link text-primary">If you don't have an account, click here to Signup</Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Login;
