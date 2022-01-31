import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Swal from "sweetalert2";
import ManageProduct from "../AdminPage/ManageProduct/ManageProduct";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://blooming-ocean-85691.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
          .delete(`https://blooming-ocean-85691.herokuapp.com/allproducts/${id}`)
          .then((res) => {
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h2>Manage Products{products.length}</h2>
      <div className="container">
        <Row lg={2} sm={1}>
          {products.map((product) => (
            <ManageProduct
              uid={product.uid}
              key={product._id}
              product={product}
              handleDeletBtn={handleDeletBtn}
            ></ManageProduct>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ManageProducts;
