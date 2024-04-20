import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
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
            </div>
          </nav>
    </div>
  )
}
