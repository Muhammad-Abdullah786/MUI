import React from "react";
import "./style.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>
              Plum Builders <br />
              The Modern Barn®
            </h4>
            <p>
              CALL: 555-555-5555 <br /> EMAIL: INFO@PLUMBUILDERS.COM
            </p>
            <p>
              MAIN SLAB SHOWROOM: <br /> 108 PURDY AVE. <br /> PORT CHESTER, NY,
              10573
            </p>
            <p>
              FACTORY LOCATION: <br /> 25 NURSERY LANE, <br /> RYE, NY 10580
            </p>
          </div>
          <div className="footer-section">
            <h4>Design Assistance</h4>
            <ul>
              <li>
                <a href="#">Measurements</a>
              </li>
              <li>
                <a href="#">Free Design Guide</a>
              </li>
              <li>
                <a href="#">Design Consultation</a>
              </li>
              <li>
                <a href="#">Visualizer</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">How We Do It</a>
              </li>
              <li>
                <a href="#">Showroom</a>
              </li>
              <li>
                <a href="#">Trade Professionals</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company Info</h4>
            <ul>
              <li>
                <a href="#">Financing</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Made in USA</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Plum Builders. All Rights Reserved. Powered by XYZ</p>
          <p>
            <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Terms and Conditions</a>
          </p>
          <p>
            <a href="#">Facebook</a> | <a href="#">Instagram</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
