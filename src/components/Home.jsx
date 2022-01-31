import React, {useState, useEffect } from "react";
import "./css/Home.css";
import { Row } from "react-bootstrap";
import Product from "./Product";
import Landing from "./Landing"

import { getAllProducts } from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(({products}) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);  





  return (
    <>
      <div className="landing-container">
        <Landing />
      </div>
      <div className="home">HOME</div>
      <hr/>
      <div className="item-container">
      <Row id="items">
      {products.map((product, idx) => {
            return (
              <Product key={idx} product={product} addToCart={addToCart} />
              );
            }).reverse()}
  
      </Row>
      </div>
    </>
  );
};

export default Home;