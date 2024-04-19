import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/user.png";
import profileIcon from "../assets/profile.png";
import mellowIcon from "../assets/mellowIcon.png";
import { useSelector } from "react-redux";
// import mellowOne from '../assets/MELLOW1.png'

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.userData);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useSelector((state) => state.cartData);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand id="logo">
            <NavLink to={"/"}>
              <img src={mellowIcon} alt="Logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                HOME
              </NavLink>
              <NavLink
                to="/products"
                className={
                  activeLink === "products"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("products")}
              >
                SHOP
              </NavLink>
              <NavLink
                to="/contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                ABOUT
              </NavLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <NavLink to="/cart">
                  <img src={cartIcon} alt="Card" />
                  {cartItems.length === 0 ? (
                    ""
                  ) : (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {cartItems.length}
                    </span>
                  )}
                </NavLink>
                {isAuthenticated ? (
                  <NavLink
                    to="/profile"
                    data-tooltip="Your Profile"
                    style={{ marginLeft: "1rem" }}
                  >
                    <img src={profileIcon} alt="profileIcon" />
                  </NavLink>
                ) : (
                  <NavLink to="/register" data-tooltip="Register">
                    <img src={userIcon} alt="User" />
                  </NavLink>
                )}
              </div>
              {isAuthenticated ? (
                <></>
              ) : (
                <NavLink to="/login">
                  <button className="vvd">
                    <span>Login</span>
                  </button>
                </NavLink>
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
