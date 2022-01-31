import React from "react";
import "./NavBar.css";
import {
  Container,
  Nav,
  Navbar,Dropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const NavBar = () => {
  const { user, logout } = useAuth();
  const navDesign = {
    color: "red",
  };
  return (
    <Navbar fixed="top" bg="dark" expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="navStyle logo"
          style={{ color: "white" }}
        >
          Hawar Gari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="navStyle" activeStyle={navDesign} to="/home">
              Home
            </NavLink>
            <NavLink
              className="navStyle"
              activeStyle={navDesign}
              to="/exploreProducts"
            >
              Explore Products
            </NavLink>
            <NavLink className="navStyle" activeStyle={navDesign} to="/about">
              About
            </NavLink>
              {/* dropdown */}
              <Dropdown>
                <Dropdown.Toggle className="drop" >
                  Pages
                </Dropdown.Toggle>
                <Dropdown.Menu>               
                  <Dropdown.Item ><NavLink className="navDesign text-dark" activeStyle={navDesign} to="/blogs">Our Blog</NavLink></Dropdown.Item>
                  <Dropdown.Item> <NavLink className="navDesign text-dark" activeStyle={navDesign} to='/contact'>Contact us</NavLink></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            {user.email && <NavLink className="navStyle" activeStyle={navDesign} to="/dashboard">
              Dashboard
            </NavLink>}
          </Nav>
          <Nav>
          {user.displayName &&
                <div>
                  <img src={user?.image} alt="" />
                  <button className="btn me-3  text-light p-2" style={{ height: '50px' }}>{user.displayName}</button>
                </div>
              }         
            {user.email ? (
              <button
                onClick={logout}
                className="btn btn-outline-light rounded-pill"
              >
                Logout
              </button>
            ) : (
              <NavLink className="navStyle" activeStyle={navDesign} to="/login">
                <button className="btn btn-outline-light rounded-pill">
                  Login
                </button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
