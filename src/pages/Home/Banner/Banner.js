import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousalstyle"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/5F0RL7n/1.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "600px" }}
            />
            <div
              className="carousel-caption d-none d-md-block logo"
              style={{ paddingBottom: "200px", color: "black" }}
            >
              <small>Ride in Style</small>
              <h1>Classic & Modern</h1>
              <button className="btn btn-dark">View More</button>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="https://i.ibb.co/ZMGqF2b/3.jpg"
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />

            <div
              className="carousel-caption d-none d-md-block logo text-dark"
              style={{ paddingBottom: "200px" }}
            >
              <small>Ride you can Trust</small>
              <h1>You are one ride away from a good mood.</h1>
              <button className="btn btn-dark">View More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ibb.co/M9MR3sG/2.jpg"
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block logo "
              style={{ paddingBottom: "200px" }}
            >
              <small>Timeless shapes</small>
              <h1>Are you riding, or are you hiding?</h1>
              <button className="btn btn-light">View More</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
