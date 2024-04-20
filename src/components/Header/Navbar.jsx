<<<<<<< HEAD
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

=======
import React from "react";
import "./Navbar.css";
import NavbarAnimation from "../../utils/Navbar";
>>>>>>> bfe037db8451573213538a99ff15053dc5cbae0d
export default function Navbar() {
  NavbarAnimation();
  return (
<<<<<<< HEAD
    <div className="navbar-main">
          <nav>
            <div className="navbar-left">
              <div className="navbar-navigation">
              <Link to=""><i class="ri-sun-line"></i></Link>
              <Link to=""><i class="icon2 ri-service-fill"></i></Link>
              <Link to="/login"><i class="icon2 ri-user-line"></i></Link>
              <i class="icon3 ri-arrow-right-double-line"></i>
              </div>
            </div>
            {/* <span>|</span> */}
            <div className="navbar-right">
              <div className="navbar-searbar">
              <i class="ri-search-eye-line"></i>
              <input type="text" placeholder='Seacrh..' />
              </div>
              <div className="navbar-hamburger">
              <i class="ri-menu-4-line"></i>
              </div>
=======
    <>
      {/* <div className="Hamburger-click">
        <div className="left-side-container">hello</div>
        <div className="right-side-container">hii</div>
      </div> */}
      <div className="navbar-main">
        <nav>
          <div className="navbar-left">
            <div className="navbar-navigation">
              <i className="ri-sun-line"></i>
              <i className="icon2 ri-service-fill"></i>
              <i className="icon2 ri-user-line"></i>
              <i className="icon3 ri-arrow-right-double-line"></i>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-searbar">
              <i className="ri-search-eye-line"></i>
              <input type="text" placeholder="Seacrh.." />
>>>>>>> bfe037db8451573213538a99ff15053dc5cbae0d
            </div>
            <div className="navbar-hamburger">
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
