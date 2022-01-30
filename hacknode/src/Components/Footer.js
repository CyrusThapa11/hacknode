import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <NavLink to="/" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="" />
                <span>Crisis Stabilizer</span>
              </NavLink>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                iure!
              </p>
              <div className="social-links mt-3">
                <NavLink to="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </NavLink>
                <NavLink to="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </NavLink>
                <NavLink to="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </NavLink>
                <NavLink to="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="#">Home</NavLink>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <NavLink to="#">About us</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                India <br />
                <strong>Email:</strong> noobcoder69@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
