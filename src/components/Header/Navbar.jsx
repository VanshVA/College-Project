import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="Navbar">
    <div className="Navbar-Left">
      <div className="Navbar-Links">
        <i className="ri-sun-line" />
        <i className="ri-user-line" />
        <i className="ri-shield-user-line" />
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="Navbar-Right">
      <div className="Navbar-Search-Bar">
        <i className="ri-search-eye-line" />
        <input type="text" placeholder="Searh here .." />
      </div>
      <div className="Navbar-Hamburger-menu">
        <div className="line1" />
        <div className="line2" />
      </div>
    </div>
  </div>
  
  )
}

export default Navbar