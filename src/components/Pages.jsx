import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Landing, 
  Header,
  Footer,
  Navigate, 
  Product,
  Cart,
  Login
} from "../components";      

const Pages = (
  products,
  setProducts,
  cart,
  setCart,
  addToCart,
  onAdd,
  userCart,
  setUserCart) => {
  return (
    <>
        <Route exact path="/">
          <Home products={products} addToCart={addToCart}/>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        {/* <Route exact path="/shoes">
          <Shoes products={products} />
        </Route>

        <Route exact path="/hats">
          <Hats products={products} />
        </Route>

        <Route exact path="/accessories">
          <Accessories />
        </Route> */}
    </>
  );
};

export default Pages;
