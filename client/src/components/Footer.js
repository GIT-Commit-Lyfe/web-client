import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer_trust_top">
        <p>AS FEATURED IN</p>
        <div className="trustlogos"></div>
      </div>
      <div className="row footer-left">
        <div className="col-md-12">
          <h4 className="text-center">Find Out More</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 justify-content-center d-flex footer_middle">
          <ul className="footer_list">
            <li>
              <a href="http://">About Us</a>
            </li>
            <li>
              <a href="http://">Reviews</a>
            </li>
            <li>
              <a href="http://">FAQ's</a>
            </li>
            <li>
              <a href="http://">Policies</a>
            </li>
            <li>
              <a href="http://">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 justify-content-center footer_middle">
          <h4>Be the first to know about Authentic Travel Deals</h4>
          <p>
            Subscribe to get exclusive offers on the world’s greatest vacations.
          </p>
        </div>
      </div>

      <div className="container">
      <div className="row">
          <div className="col-md-12 justify-content-center">
            <form class="hero-cta__form">
              <div class="elcontainer">
                <div class="inner-wrap submit-container">
                  <div class="hero-cta__input-wrap">
                    <input
                      type="email"
                      name="data[email]"
                      required=""
                      id="hero-cta-email"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <button type="submit" class="emailsignup">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="row text-center">
          <div className="col-md-12 footer_copyright">
            <p>©2018 All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
