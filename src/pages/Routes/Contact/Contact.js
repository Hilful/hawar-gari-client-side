import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contactInfo blog-bg">
        <h1 className="display-2 fw-bold contactTitle ms-5">Contact Us</h1>
      </div>
      <Container>
        <Row className="mb-5">
          <Col xm={12} md={6} lg={8} className="m-auto">
            <h2 className="mt-5">Leave us your info</h2>
            <p>and we will get back to you.</p>
            <Card className="mt-5 p-4 bg-dark">
              <h2 className="text-white text-center">Ask Your Question</h2>
              <hr className="text-white mb-5" />
              <div>
                <input
                  className="w-100 rounded mb-3 form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="w-100 rounded mb-3 form-control"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  className="w-100 h-75 rounded mb-3 form-control py-3"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button className="btn btn-outline-light w-50">Send Message</button>
              <hr className="text-white mb-3" />
              <div></div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
