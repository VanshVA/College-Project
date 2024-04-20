import React from 'react';
import './Authentication.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify';
export default function Login() {

  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const notifyA = (msg)=>{
      toast.error(msg)
    }
    
    const notifyB = (msg)=>{
      toast.success(msg)
    }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postData = () => {

    //Checking Email
    if (!emailRegex.test(userEmail)) {
        notifyA("Invalid Email")
        return
    }

    //Sending Data to Server
    fetch("http://localhost:5000/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userEmail:userEmail,
            userPassword:userPassword
        })
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                notifyA(data.error)
            } else {
                notifyB(data.message)
                navigate("/")
            }
            console.log(data.userKey)
        })
}

  return ( 
<>
    <div className='Login-container'>
      <div className="wrapper" id="loginFormContent">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder="UserEmail" required="" value={userEmail} onChange={(event) => { setUserEmail(event.target.value) }}/>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required="" value={userPassword} onChange={(event) => { setUserPassword(event.target.value) }}/>
      </div>
      <div className="checkbox1">
        <Link to="/forgotPassword"><label htmlFor="forgotForm">Forgot Password</label></Link>
      </div>
      <button type="submit" className="btn" onClick={() => { postData() }}>
        Login
      </button>
      <div className="link">
        <p>
          Don't have an account? <Link to="/registration"><label htmlFor="registerForm">Register</label></Link>
        </p>
      </div>
       </div>
    </div>
</>

  )
}