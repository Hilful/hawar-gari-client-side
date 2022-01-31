import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://blooming-ocean-85691.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Row lg={3} sm={1}>
        {products.map((product) => (
          <Product key={product._id} 
          product={product}></Product>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
