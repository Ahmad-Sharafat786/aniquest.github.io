import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import images from '../../assets/Assets/index'
const QualityCards = () => {
  return (
    <Container className="main-quality-cards quality-card-spacing">
      <Row>
        <Col lg={6}>
          
            <h3 className="quality-fontsize" >
              Quality Content <br></br> In just One click
            </h3>
          
        
        </Col>
        <Col lg={6}>
          <p className="mt-4 ai-help mb-2" >
          Whether you need it urgently or just don't like to wait, our AI takes just <br></br>  seconds to deliver a complete work, no more waiting commission queue
          </p>
         
        </Col>
      </Row>
      <Row className="spacing-class">
        <Col lg={4}>
        <Card className="quality-cards border-0 card-borderRadius">
          <div className="card-margin">
            <img
              src={images.openbook}
              className="Icon-bg  circle-icon text-white"
            />
          </div>

          <Card.Body className="full-storybody">
            <Card.Title className="fw-bold fs-5">Full Stories</Card.Title>
            <Card.Text  className="pt-1  quality-content-cards">
            Interesting or complex, with a good development and ending
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col lg={4}>
        <Card className="quality-cards border-0 card-borderRadius">
          <div className="card-margin">
            <img
              src={images.openbook2}
              className="Icon-bg  circle-icon text-white"
            />
          </div>

          <Card.Body className="full-storybody">
            <Card.Title className="fw-bold fs-5">Posting</Card.Title>
            <Card.Text className="pt-1 quality-content-cards">
            For reddit and Quora, continue your conversation or post into a blog
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col lg={4}>
        <Card className="quality-cards border-0 card-borderRadius">
          <div className="card-margin">
            <img
              src={images.openbook3}
              className="Icon-bg  circle-icon text-white"
            />
          </div>

          <Card.Body className="full-storybody">
            <Card.Title className="fw-bold fs-5">Feedback</Card.Title>
            <Card.Text  className="pt-1 quality-content-cards">
             In addition to writing,the AI can review texts and give tips to improve them
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QualityCards;
