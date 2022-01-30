import React from "react";
import "./css/Home.css";
import { Row } from "react-bootstrap";
// import Product from "./Product";
import Landing from "./Landing"

const Home = () => {
  return (
    <>
      <div className="landing-container">
        <Landing />
      </div>
      <div className="home">HOME</div>
      <hr/>
      <div className="item-container">
      <Row id="items">
            return (
              <h1>Products Here</h1>
              );
  
      </Row>
      </div>
    </>
  );
};

export default Home;