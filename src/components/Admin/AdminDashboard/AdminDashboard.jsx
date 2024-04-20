import React from 'react'
import '../AdminDashboard.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {

 const navigate = useNavigate();

  useEffect(() => {
      let key = localStorage.getItem("jwt");
      if(!key){
         navigate("/login")
      }
  },[])
  

  return (
    <>
        <h3 className="separator">Quick Access</h3>
        <div className="quick-access">
          <div className="item">
          <i className="ri-presentation-line"></i>
            <h5>Teacher</h5>
            <p>0 Teachers</p>
          </div>
          <div className="item">
          <i class="ri-graduation-cap-line"></i>
            <h5>Student</h5>
            <p>0 Students</p>
          </div>
          <div className="item">
          <i class="ri-admin-fill"></i>
            <h5>Admin</h5>
            <p>3 Admins</p>
          </div>
          <div className="item">
          <i className="ri-settings-line"></i>
            <h5>Seeting</h5>
          </div>
        </div>
        <h3 className="separator">Recent Login</h3>
        <table>
          <tbody>
            <tr className="selected">
              <td className="icon">
              <i className="ri-graduation-cap-line"></i>
              </td>
              <td className="name">Aman Gupta</td>
              <td className="extension">Student</td>
              <td className="size">2m ago</td>
              <td className="more">
                <i className="ri-more-fill" />
              </td>
            </tr>
            <tr>
              <td className="icon">
              <i className="ri-presentation-line"></i>
              </td>
              <td className="name">Mr.Atul Rai</td>
              <td className="extension">Teacher</td>
              <td className="size">2m ago</td>
              <td className="more">
                <i className="ri-more-fill" />
              </td>
            </tr>
            <tr>
              <td className="icon">
              <i className="ri-admin-fill"></i>
              </td>
              <td className="name">Anuj Tatti</td>
              <td className="extension">Admin</td>
              <td className="size">2m ago</td>
              <td className="more">
                <i className="ri-more-fill" />
              </td>
            </tr>
            <tr>
              <td className="icon">
              <i className="ri-graduation-cap-line"></i>
              </td>
              <td className="name">Akanshu Kashyap</td>
              <td className="extension">Student</td>
              <td className="size">2m ago</td>
              <td className="more">
                <i className="ri-more-fill" />
              </td>
            </tr>
          </tbody>
        </table>
    </>
  )
}
