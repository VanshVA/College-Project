import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-main">
          <nav>
            <div className="navbar-left">
              <div className="navbar-navigation">
              <i class="ri-user-line"></i>
              <i class="icon2 ri-user-line"></i>
              <i class="icon2 ri-user-line"></i>
              <i class="icon3 ri-arrow-right-double-line"></i>
              </div>
            </div>
            <span>|</span>
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
