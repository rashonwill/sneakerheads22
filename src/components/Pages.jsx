import React from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Landing, 
  Header,
  Footer,
  Navigate,          
} from "../components";      

const Pages = () => {
  return (
    <>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/landing">
          <Landing />
        </Route>
    </>
  );
};

export default Pages;