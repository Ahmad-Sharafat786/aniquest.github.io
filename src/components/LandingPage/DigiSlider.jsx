import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import images from "../../assets/Assets/index";
import { AiFillStar } from "react-icons/ai";
export default class DigiSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
    
       <div className="digiSlider-bg">
          <h2 className="text-white text-center fw-bold Reviews-Spacing">What they say about us</h2>
        <Container className="mt-0  digislider-padding" >
          <Slider {...settings}>
            <Row className="d-flex">
              <Col lg={4} className="mb-4 custom-responsive" >
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize" >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize">Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize">Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <Row className="d-flex">
            <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize">Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize" >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize" >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="d-flex">
            <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize"  >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize"  >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize"  >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="d-flex">
            <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize"  >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize" >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} className="mb-4">
                <Card  className="rounded-4 digislider-card-height">
                  <Card.Body className="slider-card-spacing">
                    <Card.Title>
                      <div className="d-flex align-items-end">
                        <img
                          src={images.checkicon}
                          alt=""
                          srcset=""
                          className="profile-img"
                        />

                        <div className="ps-2">
                          <h6 className="mb-0 fw-bold slider-name-fontsize" >Lauren Andrews</h6>
                          <small className="fw-normal slider-countrysize">Union Exchange</small>
                        </div>
                      </div>
                      <span>
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color" />
                        <AiFillStar className="mt-3 star-icon-color"/>
                        <AiFillStar className="mt-3 star-icon-color"/>
                      </span>
                    </Card.Title>
                    <Card.Text className="pt-2 mb-5" >
                      <h6 className="digi-card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores. </h6>
                      <p className="digislider-text mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo iusto corporis eos libero! Sapiente dignissimos dolores vero quisquam asperiores distinctio autem fugit ullam repellat.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Slider>
        </Container>
      </div>
      
    
     
    );
  }
}
