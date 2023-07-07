import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import Header from "./Header";
import images from "../../assets/Assets/index";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false); 
  return (
    <div className="bgImg">
      <Header/>
      <Container className="main-navbar">
        <Row className="main-row">
          <Col lg={9} md={12}>
            <h1 className="main-content">
              Fast and Automatic<br></br> Anime and Fantasy<br></br> Writing
            </h1>
            {/* <h1 className="main-content">Anime and Fantasy</h1>
            <h1 className="main-content">Writing</h1> */}
            <div className="textbyAI">
              <p className="text-white mb-0 text-written">
                Texts written by artificial intelligence
              </p>
              <p className="text-white text-written">
                Immediate easy and with amazing results
              </p>
            </div>
            <div className="main-btn-spacing">
              <button className="free-trial rounded">FREE TRIAL</button>
              <button className="sign-google rounded">
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </Col>
          <Col lg={3} md={12} className="mt-2">
            <Card className="card-gradient-main border-0 rounded-4">
              <Card.Body className="px-4">
                <div className="d-flex align-items-center justify-content-start">
                  <img src={images.checkicon} alt="" />
                  <h6 className="text-white ms-3 fw-bold mt-2 fantasy-horizo-card">
                    Develop Publications
                  </h6>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-gradient-main border-0  rounded-4 special-spacing">
              <Card.Body className="px-4">
                <div className="d-flex align-items-center justify-content-start">
                  <img src={images.checkicon} alt="" />
                  <h6 className="text-white ms-3 fw-bold mt-2 fantasy-horizo-card">
                    Perfect fan fiction
                  </h6>
                </div>
              </Card.Body>
            </Card>
            <Card className="card-gradient-main  border-0  rounded-4 special-spacing">
              <Card.Body className="px-4">
                <div className="d-flex align-items-center justify-content-start">
                  <img src={images.checkicon} alt="" />
                  <h6 className="text-white ms-3 fw-bold mt-2 fantasy-horizo-card">
                    Write Review and Fix Text
                  </h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
