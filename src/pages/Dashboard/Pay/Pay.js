import React from "react";
const Pay = () => {
  return (
    <div>
      <h1>Payment system Coming Soon</h1>
      <h2>Pay With</h2>
      <div className="d-flex">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            <i className="far fa-credit-card"></i> Credit Card
          </label>
        </div>
        <div className="form-check ms-5">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            <i className="fab fa-cc-paypal"></i> PayPal
          </label>
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          style={{ width: "72%" }}
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example input"
        />
      </div>
      <form>
        <div className="row mt-4 w-75">
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <p className="mt-2">Your Service Charge will be $1000</p>
        </div>
      </form>
    </div>
  );
};

export default Pay;
