import React from "react";

const About = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Website Overview" />
        <div className="card-body">
          <h5 className="card-title">About My Website</h5>
          <p className="card-text">
            This website is a cloud-based diary application where users can create, update, and manage their personal notes securely. 
            It is built using the MERN stack, leveraging MongoDB for database management, Express and Node.js for backend logic, 
            and React for the frontend. Framer Motion is used for animations, and Bootstrap provides the responsive UI elements.
          </p>
          <a href="#!" className="btn btn-primary">Learn More</a>
        </div>
      </div>

      <h2 className="mt-4">Connect with Me</h2>
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

      <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
        Made by Saim Hashmi
      </p>
    </>
  );
};

export default About;
