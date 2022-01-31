import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="about margin">
        <div className="about1">
          <h2 className="text-dark">About Us</h2>
        </div>
      </div>
      <div className="container">
        <Row lg={2} sm={12} className="mt-5">
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/n1ysxLT/222.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12}>
            <span>Photographer</span>
            <h3>Anushka Shetty</h3>
            <p>
            What makes photography a strange invention is that its primary raw materials are time and light.
            If the photographer is interested in the people in front of his lens, and if he is compassionate, it’s already a lot. The instrument is not the camera but the photographer
            </p>
          </Col>
        </Row>
        <Row lg={2} className="mt-5">
          <Col sm={12}>
            <span>Sales agent</span>
            <h3>Faiz Sakib</h3>
            <p>
            Be an example. Are you prompt? Are you professional? Are you engaged? As sales leaders, we have to set the bar high for ourselves as well as our teams.
              We believe in a world where you have total freedom to be you,
              without judgement. To experiment. To express yourself. To be brave
              and grab life as the extraordinary adventure it is.

            </p>
          </Col>
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/VTSb49m/333.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row lg={2} className="mt-5">
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/0r6LCkR/444.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12}>
            <span>Web Designer</span>
            <h3>Shuchonda Rahman</h3>
            <p>
            I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform.
            </p>
          </Col>
        </Row>
        <Row lg={2} className="mt-5 mb-5">
          <Col sm={12}>
            <span>Marketing Staff</span>
            <h3>Asif Azad</h3>
            <p>
            Promote Hawar Gari's products  through excellent customer service. We welcome customers, guide them through the products, answer questions and make sure guests have a pleasant experience.
            </p>
          </Col>
          <Col sm={12}>
            <div className="img-hover-zoom">
              <img
                className="img-fluid"
                src="https://i.ibb.co/0cf0YYM/4.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* another section */}
      {/* <div className="about-banner text-light mt-5 mb-5 p-5 ">
        <h5 className=" text-center m-5">Reasons to shop with us</h5>
        <div className="container">
          <Row lg={3} className="">
            <Col sm={12}>
              <h6>24/7 FRIENDLY SUPPORT</h6>
              <span>
                Our support team always ready for you to 7 days a week
              </span>
            </Col>
            <Col sm={12}>
              <h6>7 DAYS EASY RETURN</h6>
              <span>
                Product any fault within 7 days for an immediately exchange
              </span>
            </Col>
            <Col sm={12}>
              <h6>QUALITY GUARANTEED</h6>
              <span>
                If your product aren't perfect return then for a full refund
              </span>
            </Col>
          </Row>
        </div>
      </div> */}
    </div>
  );
};

export default About;
