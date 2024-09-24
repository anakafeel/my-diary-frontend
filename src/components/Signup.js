import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setcredentials] = useState({name: "", email: "", password: "",cpassword: ""})
    let navigate = useNavigate() /* TO REDIRECT */

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/createuser`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})

        });
        const json = await response.json()
        if(json.success){
            localStorage.setItem('token' , json.token);
            navigate("/");
            props.showAlert("Account created successfully","success");
            }
            else{
                props.showAlert("Invalid credentials","danger");
            }
    }

        const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div className="mt-2">
      <h2 className="my-2">Signup to join My-Diary</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
          onChange={onChange}
            type="name"
            className="form-control"
            id="name"
         
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
          onChange={onChange}
            type="email"
            className="form-control"
            id="email"
        
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
          onChange={onChange}
            type="password"
            required
            minLength={5}
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
          onChange={onChange}
            type="password"
          required
          minLength={5}
            className="form-control"
            id="cpassword"
            name="cpassword"
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup