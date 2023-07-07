import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { HiLightBulb } from "react-icons/hi";
import { BsFlag, BsLightningChargeFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { FaFlag } from "react-icons/fa";
const Values = () => {
  return (
    <div className="main-values-class">
      <Container>
        <div className="mt-5">
          <h6 className="text-center fw-bold Values1-heading" style={{ color: "#d469de" }}>
            Our Values
          </h6>
          <h4
            className="text-center strong-company"
            style={{ color: "#0d0c54", fontWeight: "700" }}
          >
            A company is only as strong <br />
            as its values
          </h4>
        </div>

        <div className="position-relative">
          <Row >
            <Col lg={6}>
              <Card className="main-card border-0">
                <Card.Body>
                  <div className="d-flex">
                    <HiLightBulb
                      size={50}
                      style={{ color: "#ca3fd6" }}
                      className="bulb-icon"
                    />

                    <div className="px-4">
                      <h5 style={{ fontSize: '21px' , fontWeight: '800' }}>Team Work</h5>

                      <p style={{ fontSize: "13px", color: "#a7a6b5" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cupiditate magni obcaecati distinctio nam iste
                        ipsam, reprehenderit culpa atque eius. Necessitatibus
                        soluta aspernatur consectetur ullam. Tenetur deleniti
                        aliquam accusamus. Suscipit, perferendis!
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="main-card border-0">
                <Card.Body>
                  <div className="d-flex">
                    <FaFlag
                      size={50}
                      style={{ color: "#ca3fd6" }}
                      className="bulb-icon rounded-4 flag-icon"
                    />

                    <div className="px-4">
                    <h5 style={{ fontSize: '21px' , fontWeight: '800' }}>Team Work</h5>

                      <p style={{ fontSize: "13px", color: "#a7a6b5" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cupiditate magni obcaecati distinctio nam iste
                        ipsam, reprehenderit culpa atque eius. Necessitatibus
                        soluta aspernatur consectetur ullam. Tenetur deleniti
                        aliquam accusamus. Suscipit, perferendis!
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="main-card border-0">
                <Card.Body>
                  <div className="d-flex">
                    <ImUsers
                      size={50}
                      style={{ color: "#ca3fd6" }}
                      className="bulb-icon"
                    />

                    <div className="px-4">
                    <h5 style={{ fontSize: '21px' , fontWeight: '800' }}>Team Work</h5>


                      <p style={{ fontSize: "13px", color: "#a7a6b5" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cupiditate magni obcaecati distinctio nam iste
                        ipsam, reprehenderit culpa atque eius. Necessitatibus
                        soluta aspernatur consectetur ullam. Tenetur deleniti
                        aliquam accusamus. Suscipit, perferendis!
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="main-card border-0">
                <Card.Body>
                  <div className="d-flex">
                    <BsLightningChargeFill
                      size={50}
                      style={{ color: "#ca3fd6" }}
                      className="bulb-icon rounded-4"
                    />

                    <div className="px-4">
                    <h5 style={{ fontSize: '21px' , fontWeight: '800' }}>Team Work</h5>


                      <p style={{ fontSize: "13px", color: "#a7a6b5" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cupiditate magni obcaecati distinctio nam iste
                        ipsam, reprehenderit culpa atque eius. Necessitatibus
                        soluta aspernatur consectetur ullam. Tenetur deleniti
                        aliquam accusamus. Suscipit, perferendis!
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="d-flex justify-content-center position-absolute Values-second-position">
            <Card
             className='border-0 valuesTextstyling mt-2'
            
            >
              <Card.Body className="pt-4">
                <p className="para-line-height" >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, adipisci voluptatum, nemo nisi culpa accusantium
                  dolorem fugit ad praesentium animi temporibus eius aliquid vel
                  delectus nulla corporis excepturi, quos nostrum voluptate!  
                  delectus nulla corporis excepturi, quos nostrum
                 
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Values;
