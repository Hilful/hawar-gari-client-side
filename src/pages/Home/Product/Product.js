import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
const Product = (props) => {
  const { title, price, img, desc, _id } = props.product;
  return (
    <div>
      <Col sm={12} className="mb-5 mt-5">
        <Fade left>
          <Card style={{ width: "18rem", height: "600px" }}>
            <Card.Img variant="top" src={img} style={{ height: "300px" }} />
            <Card.Body>
              <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
                {title}
              </Card.Title>
              <Card.Text> {desc.slice(0, 90)}</Card.Text>
              <Card.Text
                className="logo"
                style={{ fontWeight: "bolder", color: "red" }}
              >
                Price: ${price}
              </Card.Text>
              <Link to={`/products/${_id}`}>
                <button className="btn btn-danger">Buy now</button>
              </Link>
            </Card.Body>
          </Card>
        </Fade>
      </Col>
    </div>
  );
};

export default Product;
