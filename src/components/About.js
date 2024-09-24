import React from "react";
import { motion } from "framer-motion";
import mongoLogo from "../mongo-svgrepo-com.png"; 
import expressLogo from "../express-svgrepo-com.png"; 
import reactLogo from "../react-svgrepo-com.png"; 
import nodeLogo from "../node-svgrepo-com.png"; 

const About = () => {
  const logos = [
    { src: mongoLogo, alt: "MongoDB Logo" },
    { src: expressLogo, alt: "Express Logo" },
    { src: reactLogo, alt: "React Logo" },
    { src: nodeLogo, alt: "Node.js Logo" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card login" style={{ width: "28rem" }}>
        <div
          className="card-body"
          style={{ height: "60vh", textAlign: "center", padding: "60px" }}
        >
          <h5 className="card-title">About My Website</h5>
          <p className="card-text">
            This website is a cloud-based diary application where users can
            create, update, and manage their personal notes securely. It is
            built using the MERN stack, leveraging MongoDB for database
            management, Express and Node.js for backend logic, and React for the
            frontend. Framer Motion is used for animations, and Bootstrap
            provides the responsive UI elements.
          </p>

          {/* Logos Container */}
          <motion.div
            className="d-flex justify-content-center mt-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="mx-2"
                variants={logoVariants}
                style={{ width: "50px", height: "50px" }} 
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-4 mx-3 my-2" style={{ color: "white" }}>
        <h2>Connect with Me</h2>
        <ul className="list-unstyled" style={{ color: "white" }}>
          <li>
            <a
              href="https://github.com/anakafeel"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }} 
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saim-hashmi-2230b6243" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }} 
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/anakafeel/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }} 
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
        <p className="text-white mt-3" style={{ fontSize: "0.9rem" }}>
          Made by Saim Hashmi
        </p>
      </div>
    </div>
  );
};

export default About;
