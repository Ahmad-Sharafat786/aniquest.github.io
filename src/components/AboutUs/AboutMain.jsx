import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PATH } from "../../config";
import Header from "../LandingPage/Header";
import images from "../../assets/Assets/index";

const AboutMain = () => {
  return (
    <>
      <div className="about-bg-img position-relative">
        <Header />
        <Container>
          <div style={{ marginTop: "4.5rem" }}>
            <h6
              className="text-center"
              style={{ color: "#d9d9d9", fontSize: "19px" }}
            >
              About Us
            </h6>
            <h4 className="text-center mt-4 Our-mission">
              Our mission at Aniquest is to help users <br></br>
              create their own anime stories
            </h4>
            <p className="text-center mt-4 Aniquest-user-friendly">
              Aniquest is a user-friendly tool that helps users to create their
              own anime stories.It provides various templates
              <br />
              and resources that use to create their own unique stories.Whether
              your are fan of anime or just
              <br /> looking for a new creative outlet, Aniquest is a perfect
              place for you!
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Card className="border-0 about-card rounded-5">
              <Card.Body className="d-flex justify-content-center Main-card-body rounded-5">
                <img src={images.frame} alt="" width={"90%"} />
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutMain;
