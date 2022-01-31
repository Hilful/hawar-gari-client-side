import React from "react";
import axios from "axios";
import "./ProductDetails.css";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [isupdated, setIsUpdated] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/";
  useEffect(() => {
    fetch(`https://blooming-ocean-85691.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [id]);
  // onsubmit function
  const onSubmit = (data) => {
    setIsUpdated(true);
    data.userId = user.uid;
    axios
      .post("https://blooming-ocean-85691.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          history.push(redirect_uri);
        } else {
        }
        setIsUpdated(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // set input value
  setValue("name", user.displayName);
  setValue("email", user.email);
  setValue("title", users.title);
  setValue("image", users.img);
  setValue("status", users.status);
  return (
    <div className="margin">
      <div className="text-light form-design1 pt-5">
        <Row lg={2} sm={1} className="container-fluid">
          <Col lg={6} xm={12}>
            {/* form for booking package */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* userName */}
              <input
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                {...register("name", { required: true, maxLength: 30 })}
              />
              <br />
              {/* email */}
              <input
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                {...register("email", { required: true })}
              />
              <br />
              {/* date */}
              <input
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                type="date"
                {...register("date", { required: true })}
              />{" "}
              <br />
              {/* address */}
              <input
                placeholder="Address"
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                type="text"
                {...register("address", { required: true })}
              />{" "}
              <br />
              {/* phone number */}
              <input
                placeholder="Mobile Number"
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                type="number"
                {...register("mobile", { required: true })}
              />{" "}
              <br />
              {/* description */}
              <input
                placeholder="Description"
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                type="text"
                {...register("Description", { required: true })}
              />{" "}
              <br />
              <input
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                type="text"
                className="d-none"
                {...register("image", { required: true })}
              />{" "}
              <br />
              <input
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.01)",
                }}
                type="text"
                className="d-none"
                {...register("status", { required: true })}
              />{" "}
              <br />
              <button className="btn btn-info h-100" type="submit">
                {isupdated ? (
                  <Spinner
                    animation="border"
                    variant="light"
                    style={{ height: "25px", width: "25px" }}
                  />
                ) : (
                  "Order Now"
                )}
              </button>
            </form>
          </Col>
          {/* colum 6 */}
          <Col>
            <Card style={{ width: "18rem", color: "black" }}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={users.img}
              />
              <Card.Body>
                <Card.Title>{users.title}</Card.Title>
                <Card.Text>{users.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetails;
