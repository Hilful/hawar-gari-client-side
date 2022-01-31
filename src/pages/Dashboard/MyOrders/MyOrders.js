import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user, isLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://blooming-ocean-85691.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  if (isLoading) {
    return (
      <div
        className="spinner-border text-secondary d-flex justify-content-center margin"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  // handle delete btn
  const handleDeletBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://blooming-ocean-85691.herokuapp.com/allOrders/${id}`
          )
          .then((res) => {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h2 className="logo">My orders {orders.length}</h2>
      <div className=" container-fluid">
        <Row lg={3}>
          {orders.map((order) => (
            <Col key={order._id}>
              <div  className="card">
                <img
                  src={order.image}
                  style={{ height: "300px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{order.Title}</h5>
                  <p className="card-text">{order.status}</p>
                  <button
                    onClick={() => handleDeletBtn(order._id)}
                    className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyOrders;
