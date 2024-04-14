import React from 'react'
import './Home.css'
import Image1 from '../../assets/Bg-img-1.png'
import Image2 from '../../assets/Bg-img-2.png'
import favicon from '../../assets/Website Favicon.png'

function Home() {
  return (
    <>
      <div className="home-main">
        <div className="home-Iamges">
          <div className="home-image-1">
            <img src={Image1} alt="" />
          </div>
          <div className="home-image-2">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="Background-Blur"></div>
        <div className="home-title">
          {/* <h1>HH</h1> */}
          <img src={favicon} alt="" />
          <h1>Your One Stop</h1>
          <h1><span>Solution </span> For All</h1>
          <h1>Problems.</h1>
        </div>
        <h5>Scroll Down <i class="ri-arrow-down-line"></i></h5>
      </div>
    </>
  )
}

export default Home