import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://blooming-ocean-85691.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Container>
        <h2 className="reviews mt-5">Reviews</h2>
        <Row lg={3} sm={1}>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
