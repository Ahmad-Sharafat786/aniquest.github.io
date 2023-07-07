import React, { useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { BsCheckLg } from "react-icons/bs";
import Header from "../../components/LandingPage/Header";
import images from "../../assets/Assets/index";

const Pricing = () => {
 
  return (
    <div>
      <Header login="true" />

      <Container>
        <Row>
          <h1 className="mt-5 fw-bold start-faster text-center">
            Start writing 10x faster <br /> with AI
          </h1>
          <p className="text-center mt-2 start-faster-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            dicta! Assumenda earum
            <br /> incidunt possimus, vel recusandae veritatis soluta animi
            perferendis.
          </p>
          <Row style={{ marginTop: "4.5rem" }}>
            <Col xl={3} lg={6}>
              <Card style={{ width: "auto" }} className="card-border">
                <Card.Title>
                  <h3 className="growth text-center">Growth</h3>
                </Card.Title>
                <Card.Header className="pt-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <h5 className="dollar pe-2">$</h5>
                    <h2 className="number">123</h2>
                    <h5 className="month ps-2">/month</h5>
                  </div>
                </Card.Header>
                <Card.Body className="pricing-cardbody">
                  <Card.Title
                    className="guarantee"
                    style={{
                      color: "#848484",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    5- day 100% money back guarantee
                  </Card.Title>

                  <div className="main-check-div">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>

                  <div className="d-grid gap-2">
                    <Button size="lg" className="upgrade border-0">
                      Upgrade Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6}>
              <Card style={{ width: "auto" }} className="box-shadow-class">
                <Card.Title>
                  <button className="best-sell">Best Seller</button>
                  <h3 className="growth-2 text-center">Growth</h3>
                </Card.Title>
                <Card.Header className="pt-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <h5 className="dollar pe-2">$</h5>
                    <h2 className="number">123</h2>
                    <h5 className="month ps-2">/month</h5>
                  </div>
                </Card.Header>
                <Card.Body className="pricing-cardbody">
                  <Card.Title
                    className="guarantee"
                    style={{
                      color: "#848484",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    5- day 100% money back guarantee
                  </Card.Title>

                  <div className="main-check-div">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>

                  <div className="d-grid gap-2">
                    <Button size="lg" className="upgrade border-0">
                      Upgrade Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6}>
              <Card style={{ width: "auto" }} className="box-shadow-class">
                <Card.Title>
                  <h3 className="growth text-center">Growth</h3>
                </Card.Title>
                <Card.Header className="pt-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <h5 className="dollar pe-2">$</h5>
                    <h2 className="number">123</h2>
                    <h5 className="month ps-2">/month</h5>
                  </div>
                </Card.Header>
                <Card.Body className="pricing-cardbody">
                  <Card.Title
                    className="guarantee"
                    style={{
                      color: "#848484",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    5- day 100% money back guarantee
                  </Card.Title>

                  <div className="main-check-div">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>

                  <div className="d-grid gap-2">
                    <Button size="lg" className="upgrade border-0">
                      Upgrade Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={6}>
              <Card style={{ width: "auto" }} className="box-shadow-class">
                <Card.Title>
                  <h3 className="growth text-center">Growth</h3>
                </Card.Title>
                <Card.Header className="pt-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <h5 className="dollar pe-2">$</h5>
                    <h2 className="number">123</h2>
                    <h5 className="month ps-2">/month</h5>
                  </div>
                </Card.Header>
                <Card.Body className="pricing-cardbody">
                  <div>
                    <label
                      htmlFor="customRange1"
                      className="form-label fw-bold guarantee"
                      style={{ color: "#696969" }}
                    >
                      50K
                    </label>

                    <label
                      htmlFor="customRange1"
                      className="form-label float-end fw-bold"
                      style={{ color: "#696969" }}
                    >
                      700K
                    </label>
                    <input type="range" class="form-range" min="0" max="5" id="customRange2"/>
                  </div>

                  <Card.Title
                    className="mt-4"
                    style={{
                      color: "#848484",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    5- day 100% money back guarantee
                  </Card.Title>

                  <div className="main-check-div">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>
                  <div className="mt-3">
                    <BsCheckLg
                      style={{ color: "#1cbc87", lineHeight: "50px" }}
                      size={25}
                      className="me-2"
                    />
                    <span style={{ color: "#c3c6cc" }}>
                      Lorem ipsum dolor consect ipsum dolor consect
                    </span>
                  </div>

                  <div className="d-grid gap-2">
                    <Button size="lg" className="upgrade border-0">
                      Upgrade Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
