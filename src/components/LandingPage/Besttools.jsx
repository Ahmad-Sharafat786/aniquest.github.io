import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import images from '../../assets/Assets/bestTool/index'

const Besttools = () => {
  return (
    <Container className="best-tool-spacing">
      <div class="hr-container">
        <span class="text-between-lines">
          <h3 className="best-tool">The best tool for</h3>
        </span>
      </div>

      <div className="d-flex justify-content-around flex-wrap align-items-center pt-5 best-tool-specific">

        <div >
          <img src={images.reddit} alt="" className="pb-3 pb-sm-0"  />
        </div>
        <div >
          <img src={images.writeas} alt=""  className="pb-3 pb-sm-0" />
        </div>
        <div >
          <img src={images.quora} alt=""  className="pb-3 pb-sm-0"/>
        </div>
        <div >
          <img src={images.ghost} alt=""  className="pb-3 pb-sm-0"/>
        </div> 
        <div >
          <img src={images.askfm} alt=""  className="pb-3 pb-sm-0"/>
        </div>
        <div >
          <img src={images.animeplanet} alt=""  className="pb-3 pb-sm-0"/>
        </div>
     
        <div >
          <img src={images.wikihow} alt=""/>
        </div>
        
      </div>


      
      <div className="d-flex justify-content-around flex-wrap align-items-center pt-5 best-tool-specific">
        <div>
          <img src={images.stackexchange}  width={"200"}  className="pb-3" />
        </div>
        <div>
          <img src={images.answers} width={"200"}  className="pb-4" />
        </div>
        <div>
          <img src={images.myanimelist} width={"200"}  className="pb-3"/>
        </div>
        <div>
          <img src={images.stackoverflow} width={"200"} className="pb-3"/>
        </div>
        <div>
          <img src={images.medium} width={"200"} className="pb-3"/>
        </div>
        <div>
          <img src={images.ask} width={"100"} className="pb-3"/>
        </div>
      
      </div>
      <Row>
      <Col lg={12} className="d-flex justify-content-center">
          <div >
            <p className="mt-5 add-more">And many more</p>
          </div>
        </Col> 
      </Row>
    </Container>
  );
};

export default Besttools;
