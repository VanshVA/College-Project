import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import NavbarAnimation from "../../utils/Navbar";
export default function Navbar() {
  NavbarAnimation();
  return (
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
