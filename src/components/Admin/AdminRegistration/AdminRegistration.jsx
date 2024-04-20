import React from 'react'
import '../AdminDashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify';

export default function AdminRegistration() {

  const [teacherName, setTeacherName] = useState("");
    const [teacherEmail, setTeacherEmail] = useState("");
    const [teacherPassword, setTeacherPasword] = useState("");

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
        if (!emailRegex.test(teacherEmail)) {
            notifyA("Invalid Email")
            return
        } else if (!passwordRegex.test(teacherPassword)) {
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
                userKey:"T",
                userName:teacherName,
                userEmail:teacherEmail,
                userPassword:teacherPassword
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
    <div className="teacher-registration">
      <div className="wrapper" id="loginFormContent">

        <h1>Register Teacher</h1>
        <div className="input-box">
          <input type="text" placeholder="TeacherName" required="" value={teacherName} onChange={(event) => { setTeacherName(event.target.value) }} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Email" required="" value={teacherEmail} onChange={(event) => { setTeacherEmail(event.target.value) }} />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required="" value={teacherPassword} onChange={(event) => { setTeacherPasword(event.target.value) }} />
        </div>
        <button type="submit" className="btn" onClick={() => { postData() }}>
          Add Teacher
        </button>
      </div>
    </div>
  )
}
