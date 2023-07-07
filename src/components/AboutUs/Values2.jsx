import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImUsers } from "react-icons/im";
import { HiHomeModern } from "react-icons/hi2";
import { GiCondorEmblem } from "react-icons/gi";
import { BiArch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
const Values2 = () => {
  return (
    <div className="main-values2-class">
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
       
          <p
            className="text-center"
            style={{ color: "#a1a1b1", fontSize: "15px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit <br/>
           voluptate eveniet in fuga illum.voluptate eveniet in fuga illum.
          </p>
        </div>
        <Container>
        <Row className="all-icon-spacing d-flex justify-content-center">
          <Col lg={3}>
            
            <div className="text-center">
            <HiHomeModern size={55} className="home-icon me-5"/>
            </div>
           
              <div className="pt-3 Icon-alignment" style={{textAlign: 'center'}}>
              <h5 className="fw-bold me-3" style={{fontSize: '22px'}}>Philopine</h5>
              <address className="mt-3 ms-2">
                <CiLocationOn style={{color: '#d87ae1'}} size={25}/><span className="ms-2" style={{color: '#b1b1bd', fontSize: '16px'}}>1800 JKF BLvd,<br/></span><span style={{color: '#b1b1bd', fontSize: '15px'}} className="ms-5"> Gulberg 123 12345 </span> 
              </address>
            
              <div className="">
              <AiOutlineMail style={{color: '#d87ae1'}} size={22} className="ms-4"/><span className="ms-3" style={{color: '#b1b1bd', fontSize: '14px'}}>test@gmail.com</span>  
               
              </div>
              </div>
             
          </Col>
          <Col lg={3}>
            
            <div className="text-center">
            <GiCondorEmblem size={55} className="home-icon me-5"/>
            </div>
           
              <div className="pt-3 Icon-alignment" style={{textAlign: 'center'}}>
              <h5 className="fw-bold me-3" style={{fontSize: '22px'}}>Philopine</h5>
              <address className="mt-3 ms-2">
                <CiLocationOn style={{color: '#d87ae1'}} size={25}/><span className="ms-2" style={{color: '#b1b1bd', fontSize: '16px'}}>1800 JKF BLvd,<br/></span><span style={{color: '#b1b1bd', fontSize: '15px'}} className="ms-5"> Gulberg 123 12345 </span> 
              </address>
            
              <div className="">
              <AiOutlineMail style={{color: '#d87ae1'}} size={22} className="ms-4"/><span className="ms-3" style={{color: '#b1b1bd', fontSize: '14px'}}>test@gmail.com</span>  
               
              </div>
              </div>
             
          </Col>
          <Col lg={3}>
            
            <div className="text-center">
            <BiArch size={55} className="home-icon me-5"/>
            </div>
           
              <div className="pt-3 Icon-alignment" style={{textAlign: 'center'}}>
              <h5 className="fw-bold me-3" style={{fontSize: '22px'}}>Philopine</h5>
              <address className="mt-3 ms-2">
                <CiLocationOn style={{color: '#d87ae1'}} size={25}/><span className="ms-2" style={{color: '#b1b1bd', fontSize: '16px'}}>1800 JKF BLvd,<br/></span><span style={{color: '#b1b1bd', fontSize: '15px'}} className="ms-5"> Gulberg 123 12345 </span> 
              </address>
            
              <div className="">
              <AiOutlineMail style={{color: '#d87ae1'}} size={22} className="ms-4"/><span className="ms-3" style={{color: '#b1b1bd', fontSize: '14px'}}>test@gmail.com</span>  
               
              </div>
              </div>
             
          </Col>
        </Row>
          </Container>
       
      </Container>
    </div>
  );
};

export default Values2;
