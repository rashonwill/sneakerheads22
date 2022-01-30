import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Navigate.css";
import OhShoesLogo from "../img/oh-shoes-logo.png";
import { SearchIcon, GearIcon, CartIcon, HeadIcon } from './icons'
import {
  Dropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "./css/Navigate.css";




const Navigate = ({cart, setCart}) => {

  return (
    <>

      <div>
        <Navbar className="nav-bar" bg="light" expand="lg" id="navigation">
          <Link to="/">
            <img className="os-logo" src={OhShoesLogo} alt="oh shoes store logo"></img>
           </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="light">{SearchIcon}</Button>
              </Form>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Link to="/shoes">
                  <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
                </Link>
                <Link to="/hats">
                  <NavDropdown.Item href="#action/3.2">Hats</NavDropdown.Item>
                </Link>
                <Link to="/accessories">
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>

            <Link to="/admin">
              <Dropdown.Item as="button">{GearIcon}</Dropdown.Item>
            </Link>
            <Link to="/dashboard">
              <Dropdown.Item as="button">{HeadIcon}</Dropdown.Item>
            </Link>
            <Link to="/cart">
              <Dropdown.Item as="button">{CartIcon}</Dropdown.Item>
            </Link>
          </Navbar.Collapse>
        </Navbar>
  
      </div>
    </>
  );
};

export default Navigate;

