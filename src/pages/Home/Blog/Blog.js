import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
const Blog = () => {
  return (
    <div className="container">
      <h2 className="textDesign logo mt-5">
        Our Recent <span className="text-danger">Blogs</span>
      </h2>
      <Fade bottom>
        <Row lg={3} sm={1}>
          <Col sm={12} className="mb-5 mt-5">
            <Card style={{ height: "500px" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/DDc98fZ/21.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
                  How I commute to work every day
                </Card.Title>
                <Card.Text>
                Cycling to work has, in our opinion, always been a fantastic way to stay healthy, save money and look after the planet READ
                  MORE{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} className="mb-5 mt-5">
            <Card style={{ height: "500px" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/bzqSFD9/23.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
                  How Cycling helps your body
                </Card.Title>
                <Card.Text>
                Cycling can help to protect you from serious diseases such as stroke, heart attack, some cancers, depression, diabetes, obesity and arthritis.READ
                  MORE{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} className="mb-5 mt-5">
            <Card style={{ height: "500px" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/SVcb3rX/22.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
                  Cycling and Social Life
                </Card.Title>
                <Card.Text>
                I couldn’t believe how much more motivating it was to explore areas I had never seen before.
                READ
                  MORE{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};

export default Blog;



