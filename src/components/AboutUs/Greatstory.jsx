import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import images from "../../assets/Assets/index";
const Greatstory = () => {
  return (
    <div className="main-greatstory-class" style={{background: '#f7f8f9'}}>
      <Container>
        <Card className="main-card-2 mt-5 great-story-bg border-0 rounded-5">
          <Card.Body className="">
            <Row>
              <Col lg={7} className="great-story-padding">
                <h1 className="great-story-heading">
                  A great story starts with<br></br> a great team
                </h1>
                <p className="great-story-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat aut dignissimos,<br></br> iure et pariatur voluptatem sint
                  magnam laudantium ipsum accusantium? Quos<br></br> consequuntur rem eum
                  labore nihil, neque provident alias eaque corporis quo<br></br>
                  consequatur modi et dolor commodi esse architecto veritatis
                  distinctio beatae<br/> vero! Quas exercitationem dolorum adipisci
                  eius dolores. Assumenda? esse<br/> architecto veritatis distinctio
                  beatae vero! Quas exercitationem dolorum adipisci
                </p>
                <h6 style={{color: '#0e0e0f' , fontSize: '17px', fontWeight:'600'}} className="pt-3">Sarah Kraft, CEO & CO-founder</h6>
              </Col>
              <Col lg={5}>
                <img src={images.first} alt="" className="first-image" />
                <div className="d-flex justify-content-end">
                  <img src={images.second} alt="" className="second-image" />
                </div>
              </Col>
              {/* <Col lg={6}  className="position-relative">
                <img src={images.first} alt="" className="first-image" style={{ top: "-25%" }}/>
                <img src={images.second} className="second-image" alt=""  />
            </Col> */}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Greatstory;
