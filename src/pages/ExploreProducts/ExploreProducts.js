import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ExploreProduct from "../ExploreProduct/ExploreProduct";
const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://blooming-ocean-85691.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Manage Products{products.length}</h2>
      <div className="container">
        <Row lg={3} sm={1}>
          {products.map((product) => (
            <ExploreProduct
              key={product._id}
              product={product}
            ></ExploreProduct>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ExploreProducts;
