import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import images from '../../assets/Assets/index';


const Anime2 = () => {
  return (
    <Container className="anime2">
      <Row>
        <Col lg={5} className="d-flex justify-content-center flex-column">
          <h1 className="fw-bold mt-3 anime2-fontsize">Anime Text in ablink<br></br>Automatic and<br></br>Immediate</h1>
          {/* <h1 className="fw-bold anime2-fontsize">Automatic and</h1>
          <h1 className="fw-bold anime2-fontsize">Immediate</h1> */}
          <div className="anime-text mt-4">
          <p className="mb-0">
          The technology of our AI assures a great writing
          </p>
          <p className="mb-0">
          without waiting,without creative block,instant
          </p>
          <p className="mb-0">content only.</p>
          </div>
          
          
        </Col>
        <Col lg={7} >
           <div>
            <img src={images.group} alt="" className="img-fluid" />
           </div>
           
        </Col>
      </Row>
    </Container>
  );
};

export default Anime2;
