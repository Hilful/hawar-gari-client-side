import React from "react";
import Fade from "react-reveal/Fade";
const Gallary = () => {
  return (
    <div>
      <div className="text-center m-5">
        <h2 className="textDesign logo">
        Learn to ride a bicycle <span className="text-danger">You will not regret it if you live.</span>
        </h2>
        <p>
        Your bike is discovery. Your bike is freedom. It doesn’t matter where you are, where you’re on the saddle, you’re taken away. <br />
          <span>
          Think of bicycles as rideable art that can just about save the world
          </span>
        </p>
      </div>
      <div className="card-group">
        <div className="card">
          <Fade left>
            <div className="img-hover-zoom">
              <img
                className="card-img-top"
                src="https://i.ibb.co/QbcMTSq/22.jpg"
                alt="Card cap"
                style={{ height: "400px" }}
              />
            </div>
          </Fade>
          <div
            className="card-body"
            style={{
              height: "400px",
              textAlign: "center",
              paddingTop: "150px",
            }}
          >
            <h5 className="card-title">THE ULTIMATE BIKE BUYING GUIDE</h5>
            <p className="card-text">
            Road bicycles are designed to be ridden fast on smooth pavement. They have smooth, skinny tires and "drop" handlebars, and can be used for on-road racing. 
            </p>
          </div>
        </div>
        <div className="card">
          <div
            className="card-body"
            style={{
              height: "400px",
              textAlign: "center",
              paddingTop: "150px",
            }}
          >
            <h5 className="card-title">Curated Bike Collections Browse Now!</h5>
            <p className="card-text">
            If you are buying a bike to ride with a group of friends, buy something similar to what they ride. You will not be able to keep up with road bikes if you are on a mountain bike or cruiser. And a road bike cannot go on the dirt or the sand.
            </p>
          </div>
          <Fade bottom>
            <div className="img-hover-zoom">
              <img
                className="card-img-top"
                src="https://i.ibb.co/FJzFCZh/33.jpg"
                alt="Card  cap"
                style={{ height: "400px" }}
              />
            </div>
          </Fade>
        </div>
        <div className="card">
          <Fade right>
            <div className="img-hover-zoom">
              <img
                className="card-img-top"
                src="https://i.ibb.co/swtTZgk/11.jpg"
                alt="Card  cap"
                style={{ height: "400px" }}
              />
            </div>
          </Fade>
          <div
            className="card-body"
            style={{
              height: "400px",
              textAlign: "center",
              paddingTop: "150px",
            }}
          >
            <h5 className="card-title">Train With Us</h5>
            <p className="card-text">
            Meet Elaph Hilful, owner of PLAN7 Endurance Coaching. Dave’s been working with cyclists for years to help them achieve their goals and has given us two 90-day training plans to help us achieve ours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;




