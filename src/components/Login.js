import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [credentials, setcredentials] = useState({email: "", password: ""})
    let navigate = useNavigate() /* TO REDIRECT */

    const handleSubmit = async(e)=>{
        e.preventDefault() /* to prevent reloading of page  */
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token' ,json.token);
            navigate("/");
            props.showAlert("Signed in Successfully","success");
            }
            else{
                props.showAlert("Invalid credentials","danger");
            }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
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
          <label htmlFor="exampleInputPassword1" className="form-label">
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
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;