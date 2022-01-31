import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-dark text-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>
          <div>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Hawar Gari
                </h6>
                <p>
                We build only products we love, provide incredible hospitality to our customers, and change the world by getting more people on bikes.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset footer">
                    Mountain Bike
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Road Bike
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    City Bike
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Electric Bike
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Information</h6>
                <p>
                  <a href="#!" className="text-reset footer">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset footer">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Gulshan, Dhaka 1212
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  hilful25@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 880 1752649975
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 880 1832256528
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 All Rights Reserved: Ashabul Elaph Hilful
        </div>
      </footer>
    </div>
  );
};

export default Footer;
