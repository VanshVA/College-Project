// import React, { useRef } from "react";
import "./Navbar.css";
import { navLinks } from "../../constants/index";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarAnimation from "../../utils/motion";
function Navbar() {
  const [BackGroundSlider, setBackGroundSlider] = useState(false);
  const [toggle, setToggle] = useState(true);
  NavbarAnimation();
  return (
    <div className="navbar-container">
      <div className="Navbar-Left">
        <div className="icon-links-container">
          <div className="icon-link">
            <Link to="/login">
              <i className="ri-sun-line"></i>
            </Link>
          </div>
          <div className="icon-link">
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </div>
          <div className="icon-link">
            <Link to="/login">
              <i className="ri-shield-user-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="Navbar-middle">
        <ul className="nav-links" onChange={()=>window.innerWidth =="768px"?"nav-links":"nav-links-float"}>
          {navLinks.map((nav) => (
            <li key={nav.id} id={`${nav.id}`} className={`${nav.class}`} onClick={() => setActive(nav.title)}>
              <Link to={`/${nav.id}`}>{`${nav.title}`}</Link>
              <span></span>
            </li>
          ))}
       
        </ul>
      </div>
      <div className="Navbar-Right">
        <div className="Navbar-Search-Bar">
          <input type="text" placeholder="Search here .." />
          <i className="ri-search-eye-line"></i>
        </div>
        <div
          className="Navbar-Hamburger-menu"
          onClick={() => {
            setToggle(!toggle);
            setBackGroundSlider(!BackGroundSlider);
          }}
        >
          <div className={toggle ? "Navbar-Hamburger-line" : "line1"}></div>
          <div
            className={toggle ? "Navbar-Hamburger-middle-line " : "line2"}
          ></div>
          <div className={toggle ? "Navbar-Hamburger-line" : "line3"}></div>
        </div>
      </div>
      <span className={BackGroundSlider?"navLink-BackGround-Slider-toggle":"navLink-BackGround-Slider"} value="toggle"></span>
    </div>
  );
}

export default Navbar;
