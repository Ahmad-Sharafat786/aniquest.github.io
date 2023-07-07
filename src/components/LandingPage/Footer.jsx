import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ paddingTop }) => {



  const footerStyle = {
    paddingTop: paddingTop || "18rem" // Use the provided paddingTop or default to "0rem"
  };
  return (
    <div className="footer-height">
      <Container>
        <Row  style={footerStyle}>
          <Col lg={3} md={3}>
            <h5 className="text-white text-uppercase Footer-fontsize">
              Clients
            </h5>
            <ul
              className="list-unstyled mt-4 footer-sizing"
             
            >
              <li>Login</li>
              <li className="mt-2">Signup</li>
            </ul>
          </Col>
          <Col lg={3} md={3}>
            <h5 className="text-white text-uppercase Footer-fontsize">
              Social Media
            </h5>
            <ul
              className="list-unstyled mt-4 footer-sizing"
             
            >
              <li>Twitter</li>
            </ul>
          </Col>
          <Col lg={3} md={3}>
            <h5 className="text-white text-uppercase Footer-fontsize">
              Legal Info
            </h5>
            <ul
              className="list-unstyled mt-4 footer-sizing"
             
            >
              <li>Legal information</li>
              <li className="mt-2">Terms and condition</li>
              <li className="mt-2">Privacy policy</li>
            </ul>
          </Col>
          <Col lg={3} md={3}>
            <h5 className="text-white text-uppercase Footer-fontsize">
              Support
            </h5>
            <ul
              className="list-unstyled mt-4 footer-sizing"
             
            >
              <li>Help desk</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr className="horizontal-line" />
      <Container>
        <footer className="mt-4 right-reserved">
          T22 All rights reserved{" "}
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
