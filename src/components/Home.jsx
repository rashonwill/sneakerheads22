import React from "react";
import { useState, useEffect } from "react";
import "./css/Home.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";
import Landing from "./Landing"
import axios from "axios";
import { InfoIcon } from "./icons";
import { getAllProducts, addToCart } from "../api";

const Home = () => {
  const [products, setProducts] = useState();
  const [showProductInfo, setShowProductInfo] = useState(false);

  useEffect(async () => {
    axios
      .get(`https://sneakerhead22.herokuapp.com/api/products`)
      .then(({ data }) => {
        if (data.length) {
          setProducts(data);
          console.log(data);
        }
      });
  }, []);
  
      const handleAddToCart = async () => {
      try {
        alert(`${product.name} added to cart!`)
        const user_id = 3;
        await addToCart(user_id, product.id, 1)
        product.quantity = 1;
        cart.push(product)
      } catch (error) {
        console.error("Error with AddToCart handler")
      }
    }
  





  return (
    <>
      <div className="landing-container">
        <Landing />
      </div>
      <div className="home">HOME</div>
      <hr/>
    
      <div className="item-container">

          {products && products.length > 0
        ? products.map((product) => {
            return (
   <Row id="items">
            <Col>
              <Card
                className="homePgCard ml-4 mb-4"
                bg="light"
                key={product.id}
                style={{ width: "18rem" }}
              >
                <Link to="/product/id">
                  <Card.Img
                    className="landscape"
                    variant="top"
                    style={{ maxHeight: "200px" }}
                    src={product.img_url}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  {showProductInfo && (
                    <Card.Text>{product.description}</Card.Text>
                  )}
                  <h6 className="card-subtitle text-muted">${product.price}</h6>
                  <br></br>
                  <Button onClick={handleAddToCart} variant="primary">
                    Add to cart
                  </Button>
                  <Button
                    onClick={() => setShowProductInfo(!showProductInfo)}
                    style={{ marginLeft: "5em" }}
                    variant="light"
                  >
                    {" "}
                    {InfoIcon}{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
            );
          })
        : null}
  
      </div>
    </>
  );
};

export default Home;
