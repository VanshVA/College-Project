import { Link } from "react-router-dom";
import ServicesScrollAnimation from "../../utils/Service";
import "./Services.css";
function Services() {
  ServicesScrollAnimation();
  return (
    <section id="Services-section" className="Service-section">
      <div className="service-back-container"></div>
      <div className="service-front-container">
        <div className="circle-container">
          <div className="circle1">
            <div className="circle2">
              <div className="circle3">
                <div className="circle4">
                  <div className="circle5">
                    <div className="circle6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Service-box-container">
            <p>Services</p>
            <Link to={"/"} id="Service-box-1">
              <div className="Service-boxes">
               
              </div>
            </Link>
            <Link to={"/"} id="Service-box-2">
              <div className="Service-boxes"></div>
            </Link>
            <Link to={"/"} id="Service-box-3">
              <div className="Service-boxes"></div>
            </Link>
            <Link to={"/"} id="Service-box-4">
              <div className="Service-boxes"></div>
            </Link>
            <Link to={"/"} id="Service-box-5">
              <div className="Service-boxes"></div>
            </Link>
            <Link to={"/"} id="Service-box-6">
              <div className="Service-boxes"></div>
            </Link>
            <h1></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
