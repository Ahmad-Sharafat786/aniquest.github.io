import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { RiShareForwardFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";

function Textpad() {
  const [searchValue, setSearchValue] = useState("");
  const [accordions, setAccordions] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      const newAccordion = {
        id: Date.now(),
        value: searchValue,
      };
      setAccordions((prevState) => [...prevState, newAccordion]);
      setSearchValue("");
    }
  };

  return (
    <div className="text-pad-main" style={{ paddingTop: "2.8rem" }}>
      <Container>
        <Row className="mt-3">
          <Col lg={8} md={8}>
            <Row className="need-row">
              <Col lg={2}>
                <Form.Select
                  aria-label="Default select example"
                  className="custom-styling"
                >
                  <option>All</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col lg={9} className="position-relative responsive-spacing">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter What You Need"
                  className="custom-styling"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <Button
                  className="border-0 submit-btn"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4}>
            <Card className="textpad-card">
              <Card.Body>
                <span className="fw-bold fs-5">Max.length</span>
                <Form.Range />
                <div className="d-flex justify-content-between">
                  <h4 className="fw-bold">256</h4>
                  <h4 className="fw-bold">512</h4>
                  <h4 className="fw-bold">1500</h4>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Standard</p>
                  <p>Standard</p>
                  <p>Standard</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Card className="Main-card p-0">
            <Card.Body className="main-card-body-spacing">
              <Row className="pt-4 px-4">
                <Col lg={6}>
                  <Card className="static-card-shadow">

                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            style={{
                              backgroundColor: "#ca3fd6",
                              borderRadius: "9px",
                              height: "65px"
                            
                            }}
                            className="text-white fw-bold fs-5"
                          >
                            Subject
                          </Accordion.Header>
                          <Accordion.Body>
                            <Accordion defaultActiveKey="1">
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>Question</Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis ...
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                <Accordion.Header>Bulgarian</Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis ...
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                <Accordion.Header>Chinese</Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis ...
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                 
                  </Card>
                </Col>

                {accordions.map((accordion) => (
                  <Col key={accordion.id} lg={6} md={12} sm={12} xs={12}>
                    <Card className="text-pad-card-shadow w-100 mb-3">
                  
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header
                            style={{
                              backgroundColor: "#ca3fd6",
                              borderRadius: "5px",
                              height: "65px"
                            
                            }}
                            className="text-white fw-bold fs-5"
                          >
                            {accordion.value}
                          </Accordion.Header>
                          <Accordion.Body>
                            <Accordion defaultActiveKey="1">
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>Question</Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis ...
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                <Accordion.Header>Bulgarian</Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis ...
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                <Accordion.Header>Chinese</Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis ...
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                   
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="d-flex justify-content-end forward-icon-div">
                <span className="forward-icon">
                  <RiShareForwardFill size={35} />
                </span>
                <span className="copy-icon ms-3">
                  <MdContentCopy size={35} />
                </span>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Textpad;
