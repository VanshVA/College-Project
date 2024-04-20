import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify';

export default function Registration() {

    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPassword, setStudentPasword] = useState("");

    const navigate = useNavigate();

    const notifyA = (msg)=>{
        toast.error(msg)
      }
      
      const notifyB = (msg)=>{
        toast.success(msg)
      }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    const postData = () => {

        //Checking Email
        if (!emailRegex.test(studentEmail)) {
            notifyA("Invalid Email")
            return
        } else if (!passwordRegex.test(studentPassword)) {
            notifyA("Password must contain at least 8 characters, including at least 1 number and 1  includes both lower and uppercase letters and special characters for example #,?,!")
            return
        }

        //Sending Data to Server
        fetch("http://localhost:5000/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                studentName:studentName,
                studentEmail:studentEmail,
                studentPassword:studentPassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    notifyA(data.error)
                } else {
                    notifyB(data.message)
                    navigate("/login")
                }
                console.log(data)
            })
    }

    return (
        <>
            <div className='Login-container'>
                <div className="wrapper" id="loginFormContent">

                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" placeholder="UserName" required="" value={studentName} onChange={(event) => { setStudentName(event.target.value) }} />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required="" value={studentEmail} onChange={(event) => { setStudentEmail(event.target.value) }} />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required="" value={studentPassword} onChange={(event) => { setStudentPasword(event.target.value) }} />
                    </div>
                    <button type="submit" className="btn" onClick={() => { postData() }}>
                        Register
                    </button>
                    <div className="link">
                        <p>
                            Already have an account! <Link to="/login"><label htmlFor="registerForm">Sign In</label></Link>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
