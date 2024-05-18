import React from 'react'

import './Home.css'
import HomeScrollAnimation from '../../utils/Home'
import Image1 from '../../assets/Bg-img-1.png'
import Image2 from '../../assets/Bg-img-2.png'
import favicon from '../../assets/Website Favicon.png'
// import { Link} from 'react-router-dom'
import { Link} from 'react-scroll';
function Home() { 
HomeScrollAnimation() 
  return (  
    <> 
      <section id='Home-section' className="home-main">  
        <div className="home-image"> 
          <div className="home-image-1">
            <img src={Image1} alt="" />
          </div>
          <div className="home-image-2">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="Background-Blur">
        <button className='scrollDownBtn'>Explore Now</button>
        </div>
        <div className="home-title">
          <img src={favicon} alt="" />
          <h1>Your One Stop</h1>
          <h2><span>Solution </span> For All</h2>
          <h3>Problems.</h3>
        </div>
        <Link to="About-section" smooth = {true} duration = {500}><h5 className='scrollDownArrow'>Scroll Down <i className="ri-arrow-down-line "></i></h5></Link>
      </section>
    </>
  )
}

export default Home