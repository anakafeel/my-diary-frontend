import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Navbar = () => {
  let navigate = useNavigate(); /* TO REDIRECT */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <motion.div 
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    transition={{ type: "spring", delay: 0.5, duration: 1.4 }}
          >
          <Link className="navbar-brand" to="#">
            My-Diary
          </Link>
          </motion.div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <motion.li
                className="nav-item"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.5, duration: 1.4 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.7, duration: 1.4 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                motion.
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </motion.li>
            </ul>
            {!localStorage.getItem("token") ? (
              <motion.form
                className="d-flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  className="btn btn-primary mx-1"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </motion.form>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
                className="btn btn-danger"
              >
                Logout
              </motion.button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
