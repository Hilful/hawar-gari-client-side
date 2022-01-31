import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Review.css";
const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, setValue, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://blooming-ocean-85691.herokuapp.com/reviews", data)
      .then((res) => {
        reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  setValue("name", user.displayName);
  setValue("email", user.email);
  return (
    <div className="review_bg center">
      <h2 className="reviews1 logo">
        Review <span className="text-danger">section</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="field"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          {...register("name", { required: true, maxLength: 30 })}
        />
        <br />
        {/* email */}
        <input
          className="field"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="field"
          required
          placeholder="rating between 1 to 5"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
          {...register("ratings", { required: true })}
        />
        <br />
        <textarea
          className="field"
          placeholder="Description*"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.01)",
            height: "150px",
          }}
          {...register("reviews", { required: true })}
        />
        <br />
        <button type="submit" className="review-btn btn btn-light mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
