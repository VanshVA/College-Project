import React from 'react'
import './AdminDashboard.css'
import { useState } from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import AdminProfile from './AdminProfile/AdminProfile';
import AdminRegistration from './AdminRegistration/AdminRegistration';
import AdminSeeting from './AdminSeeting/AdminSeeting';

export default function Admin() {

  const [active1, setactive1] = useState(true);
  const [active2, setactive2] = useState(false);
  const [active3, setactive3] = useState(false);
  const [active4, setactive4] = useState(false);

  const [AD, setAD] = useState(true);
  const [AP, setAP] = useState(false);
  const [AR, setAR] = useState(false);
  const [AS, setAS] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="adminbody">
        <div className={isMenuOpen ? 'left-section' : 'left left-section'}>
          <div className="sidebar">
            <h2>Dashboard</h2>
            <div className={active1 ? 'item active' : 'item'} onClick={() => {
              setactive1(true)
              setactive2(false)
              setactive3(false)
              setactive4(false)

              setAD(true)
              setAP(false)
              setAR(false)
              setAS(false)
            }}>
              <i className="ri-apps-line" />
              <h3>Dashboard</h3>
            </div>
            <div className={active2 ? 'item active' : 'item'} onClick={() => {
              setactive2(true)
              setactive1(false)
              setactive3(false)
              setactive4(false)

              setAD(false)
              setAP(true)
              setAR(false)
              setAS(false)
            }}>
              <i class="ri-profile-line"></i>
              <h3>Profile</h3>
            </div>
            <div className={active3 ? 'item active' : 'item'} onClick={() => {
              setactive3(true)
              setactive1(false)
              setactive2(false)
              setactive4(false)

              setAD(false)
              setAP(false)
              setAR(true)
              setAS(false)
            }}>
              <i className="ri-registered-line"></i>
              <h3>Registration</h3>
            </div>
            <div className={active4 ? 'item active' : 'item'} onClick={() => {
              setactive4(true)
              setactive1(false)
              setactive3(false)
              setactive2(false)

              setAD(false)
              setAP(false)
              setAR(false)
              setAS(true)
            }}>
              <i className="ri-settings-line"></i>
              <h3>Seeting</h3>
            </div>
          </div>
          <div className="sign-out">
            <i className="ri-login-box-line" />
            <h3>Sign out</h3>
          </div>
        </div>
        <div className="main">
        <div className="header">
          <div className="search">
            <button>
              <i className="ri-search-2-line" />
            </button>
            <input type="text" placeholder="Search" />
            <i className="ri-equalizer-line" />
          </div>
          <div className="icon-btns">
            <i className="ri-notification-line" />
            <i className="ri-message-3-line" />
            <i className="ri-menu-line" id="menu-btn" onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
          </div>
        </div>
          {
            AD && <AdminDashboard></AdminDashboard>
          }
          {
            AP && <AdminProfile></AdminProfile>
          }
          {
            AR && <AdminRegistration></AdminRegistration>
          }
          {
            AS && <AdminSeeting></AdminSeeting>
          }
        </div>
        <div className="right-section">
          <div className="profile">
            <div className="info">
              <img
                src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="account">
                <h5>Vansh vyas</h5>
                <p>Vansh@gmail.com</p>
              </div>
            </div>
            <i class="ri-admin-fill"></i>
          </div>
          {/* <div className="widgets">
          <div className="disk">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="info">
              <h5>
                <span>750</span> GB Free<span> / 1</span> TB
              </h5>
              <p>Availabel Storage</p>
            </div>
          </div>
          <div className="bottom">
            <button>
              New Upload <i className="ri-add-line" />
            </button>
            <div className="premium">
              <div className="title">
                <i className="ri-folder-add-line" />
                <h5>Buy Premium</h5>
              </div>
              <p>Upgrade space now and get a 10% discount.</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </>

  )
}
