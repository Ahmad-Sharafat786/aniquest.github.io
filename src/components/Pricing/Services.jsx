import React from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <Container className="service-container">
        <Card style={{ width: 'auto' , height: '16rem' }} >
          <Row className="align-items-center h-100 service-section-bg rounded-5">
            <Col lg={6} md={12} className="service-column">
              <div className="d-flex">
                <h2 className="fw-bold service-class text-white">
                  In the Service of our <br />
                  people first initiative
                </h2>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="d-flex justify-content-end me-5 signup-division">
                <Button className="signup-now">Sign Up Now</Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Services;
