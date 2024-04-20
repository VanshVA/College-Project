import React from 'react'
import '../AdminDashboard.css'
import { useState } from 'react'
import Teacher from './Teacher';
import Student from './Student';
import Admiin from './Admiin';


export default function AdminProfile() {
  
  const [teacher,setTeacher] = useState(true);
  const [student,setStudent] = useState(false);
  const [admin,setAdmin] = useState(false);

  return (
    <>
       <div className="admin-profile">
          <h3 onClick={()=> {
            setTeacher(true)
            setStudent(false)
            setAdmin(false)
          }}>Teacher</h3>
          <h3 onClick={()=> {
            setTeacher(false)
            setStudent(true)
            setAdmin(false)
          }}>Student</h3>
          <h3 onClick={()=> {
            setTeacher(false)
            setStudent(false)
            setAdmin(true)
          }}>Admin</h3>
       </div>
       <div className="admin-profile-pages">
           {
            teacher && <Teacher></Teacher>
           }
           {
            student && <Student></Student>
           }
           {
            admin && <Admiin></Admiin>
           }
       </div>
    </>
  )
}
