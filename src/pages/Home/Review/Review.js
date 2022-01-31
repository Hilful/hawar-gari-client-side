import React from "react";
import { Card, Col } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Rating from "react-rating";
const Review = ({ review }) => {
  const { user } = useAuth();
  const { name, reviews, ratings } = review;
  return (
    <>
      <div>
        <Col sm={12} className="mb-2 mt-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
              <Card.Title className="logo" style={{ fontWeight: "bolder" }}>
                {name}
              </Card.Title>
              <Card.Text> {reviews.slice(0, 90)}</Card.Text>
              <Rating
                readonly
                emptySymbol="fa fa-star-o "
                fullSymbol="fa fa-star "
                fractions={2}
                initialRating={ratings}
              ></Rating>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Review;
