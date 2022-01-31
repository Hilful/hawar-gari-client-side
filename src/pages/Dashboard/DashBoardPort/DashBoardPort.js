import React from "react";
import useAuth from "../../hooks/useAuth";
const DashBoardPort = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="logo text-bold reviews">HI {user.displayName} !!!</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
              <h1>Welcome to our site</h1>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/PcxNp5W/What-is-the-Average-HR-Specialist-Salary.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPort;
