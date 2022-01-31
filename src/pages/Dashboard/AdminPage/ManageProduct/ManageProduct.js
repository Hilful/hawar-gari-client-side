import React from "react";
import { Card, Col } from "react-bootstrap";
const ManageProduct = (props) => {
  const { title, price, img, desc, _id } = props.product;
  return (
    <div>
      <Col sm={12} className="mb-5 mt-5">
        <Card style={{ height: "600px" }}>
          <Card.Img variant="top" src={img} style={{ height: "300px" }} />
          <Card.Body>
            <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
              {title}
            </Card.Title>
            <Card.Text> {desc}</Card.Text>
            <Card.Text
              className="logo"
              style={{ fontWeight: "bolder", color: "red" }}
            >
              Price: ${price}
            </Card.Text>
            <button
              onClick={() =>props.handleDeletBtn(_id)}
              className="btn btn-dark"
            >
              Delete
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ManageProduct;
