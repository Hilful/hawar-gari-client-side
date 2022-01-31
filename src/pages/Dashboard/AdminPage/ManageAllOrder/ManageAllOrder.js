import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://blooming-ocean-85691.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
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
          .delete(`https://blooming-ocean-85691.herokuapp.com/allOrders/${id}`)
          .then((res) => {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const updateStatus = (id, uid) => {
    axios
      .put(`https://blooming-ocean-85691.herokuapp.com/allOrders/${id}/${uid}`)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    const findItem = orders.find((book) => book._id === id);
    if (findItem) {
      findItem.status = "Shipped";
      const reamingData = orders.filter((book) => book._id !== id);
      setOrders([findItem, ...reamingData]);
    }
  };
  return (
    <div>
      <table className="container table table-responsive alt-2">
        <thead>
          <tr>
            <th>Products</th>
            <th>User Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
                {" "}
                <img
                  src={order.image}
                  data-at2x="pic/190x130@2x.jpg"
                  alt=""
                  width="190"
                  height="130"
                />
                <h6>{order.Title}</h6>
                <p className="mb-0">{order.Description.slice(0, 30)}</p>
              </td>
              <td>
                <p>{order.name}</p>
              </td>
              <td className="room-price text-center">
                <h2 className="btn btn-danger">{order.status}</h2>
              </td>
              <td>
                <button
                  onClick={() => handleDeletBtn(order._id)}
                  className="btn"
                >
                  <i className="fas fa-trash"></i>
                </button>
                {/* update button */}
                <button
                  onClick={() => updateStatus(order._id, order.userId)}
                  className="btn"
                >
                  <img
                    style={{ height: "25px" }}
                    src="https://i.ibb.co/7YhPJPw/updated.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
