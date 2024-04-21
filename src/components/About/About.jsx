import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-main">
      <div className="about-1">
        <div className="about-1-left">
          <h2>Get to Know Us</h2>
          <p><span>"</span>Driven by passion and innovation, we craft meaningful solutions for tomorrow's challenges. Join us as we pioneer the future together.<span>"</span></p>
        </div>
        <div className="about-1-right">
          <div className="about-1-aboutUs">
            <h1>About</h1>
            <h3>Hyper Help</h3>
          </div>
          <div className="right-arrow">
          <i class="ri-arrow-right-double-line"></i>
          <i class="ri-arrow-right-double-line"></i>
          <i class="ri-arrow-right-double-line"></i>
          </div>
        </div>
      </div>
      <div className="about-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae praesentium perferendis, fuga veritatis beatae quis numquam blanditiis laborum ipsa?</p>
      </div>
    </div>
  )
}

export default About