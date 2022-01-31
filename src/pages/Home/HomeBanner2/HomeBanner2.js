import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./HomeBanner2.css";
const HomeBanner2 = () => {
  return (
    <div className="banner2">
      <Fade bottom>
        <div
          style={{
            width: "40%",
            color: "white",
            margin: "0 auto",
            paddingTop: "100px",
          }}
        >
          <div>
            <h4>Quote of the Day</h4>
            <small>
            Ride as much or as little, or as long or as short as you feel. But ride.
            Four wheels move your body, two wheels move your soul.
            </small>{" "}
            <br />
            <Link to="/" className="text-danger">
              View More
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomeBanner2;
