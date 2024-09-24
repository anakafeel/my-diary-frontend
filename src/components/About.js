import React from "react";

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card login" style={{ width: "28rem" }}>
        <div className="card-body">
          <h5 className="card-title">About My Website</h5>
          <p className="card-text">
            This website is a cloud-based diary application where users can create, update, and manage their personal notes securely. 
            It is built using the MERN stack, leveraging MongoDB for database management, Express and Node.js for backend logic, 
            and React for the frontend. Framer Motion is used for animations, and Bootstrap provides the responsive UI elements.
          </p>
        </div>
      </div>

      <div className="text-center mt-4 mx-3 my-2"
      style={{color: "white"}}
      >
        <h2>Connect with Me</h2>
        <ul className="list-unstyled">
          <li>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-dark">
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
