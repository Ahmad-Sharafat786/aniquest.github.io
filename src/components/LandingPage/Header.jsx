import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { PATH } from "../../config";
import { Button } from "react-bootstrap";
import images from "../../assets/Assets/index";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const loginData = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("data");
    navigate("/login");
  };

  const isOnPricingPage =
    location.pathname === PATH.PRICING_PAGE ||
    location.pathname === PATH.TRANSLATOR;

  const linkStyle = {
    color: isOnPricingPage ? "#4c4c4c" : "white",
  };

  const menuIcon = isOnPricingPage ? images.menuicon : images.menuwhiteicon; // Menu icon based on pricing component
  return (
    <>
      <Navbar
        expand="lg"
        // className={`navbar ${loginData ? "navbar-black" : ""} p-0`}
      >
        <Container className="mt-0">
          <Navbar.Brand href={PATH.LANDING_PAGE}>
            <img
              src={loginData ? images.logo : images.aniquestlogo}
              alt="aniquest-logo"
              className={`logo-height ${loginData ? "pricing-logo" : ""}`}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="align-items-baseline"
          >
            <Nav className="me-auto Navbar-Spacing mb-3 ">
              <Nav.Link href="#home" style={linkStyle}>
                Solution
              </Nav.Link>

              <Nav.Link
                href={loginData ? PATH.PRICING_PAGE : "#"}
                className={`text-white navbar-spacing ${
                  isOnPricingPage ? "custom-class" : "text-white"
                }`}
                
              >
                Pricing
              </Nav.Link>

              <Nav.Link
                href={loginData ? PATH.TRANSLATOR : "#"}
                style={linkStyle}
                className="navbar-spacing"
              >
                Translator
              </Nav.Link>

              {/* <Nav.Link
                href="#home"
                style={linkStyle}
                onClick={() => handleLinkClick("blog")}
                className="navbar-spacing"
              >
                Blog
              </Nav.Link> */}
              <Nav.Link
                href={PATH.ABOUT_PAGE}
                style={linkStyle}
                className="navbar-spacing"
              >
                About
              </Nav.Link>
              <Nav.Link
                href={PATH.FORMIKFORM}
                style={linkStyle}
                className="navbar-spacing"
              >
                Formik Form
              </Nav.Link>
            </Nav>
            {loginData ? (
              <>
                <div className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    className="purple-bg text-white me-2 border-0"  // Added className for purple background
                  >
                   Upgrade
                  </Button>
                  <Button
                    
                    className={`border-0 bg-transparent  ${
                      isOnPricingPage ? "text-dark" : "text-white"
                    }`}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <img
                    className="logout-icon"
                    src={menuIcon}
                    alt="menu-icon"
                    style={{ width: "45px" }}
                  />
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="login login-btn-spacing">
                  Login
                </Link>
                <Button variant="primary" className="signup me-2">
                  Get Started
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {loginData && <hr className="horizontal-line-pricing" />}{" "}
        {/* Add horizontal line only when showLogout is active */}
      </Container>
    </>
  );
};

export default Header;
