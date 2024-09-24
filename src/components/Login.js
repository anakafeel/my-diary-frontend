import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate(); // TO REDIRECT

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent reloading of page

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json); // Log the response for debugging

      if (json.success) {
        localStorage.setItem("token", json.token);
        props.showAlert("Signed in Successfully", "success");
        navigate("/");
      } else {
        props.showAlert("Invalid credentials", "danger");
      }
    } catch (error) {
      console.error("Error during login:", error);
      props.showAlert("An error occurred. Please try again.", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-2">
      <h2 className="my-2">Login with your account details</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={onChange}
            type="password"
            value={credentials.password}
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
