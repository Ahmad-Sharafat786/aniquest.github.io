import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";

const FantasyStories = () => {
  return (
    <div className="position-relative">
      <div className="fantasy-height">
        <Container className="fantasy-spacing">
          <Row className="fantasy-AI">
            <Col lg={7} md={7}>
              <h1 className="fantasy">Fantasy Stories and Anime Post Specialized AI</h1>
            
            </Col>
            <Col lg={5} md={5} className="p-0">
              <p className="mt-4 fantasy-paragraph" >
               Our artificial intelligence can com[plete, start and continue and make from scratch and good anime and fantasy story, a reddit post and an answer to your conversations
              </p>
             
            </Col>
          </Row>
          <Row className="happy-accuracy">
            <Col lg={3} md={6} sm={6} xs={12}>
              <div>
                <h1 className="client-size">
                  20+
                </h1>
                <p
                 
                  className="mt-3 mb-1 happy-accuracytext"
                >
                  AI and Machine <br></br>  Learning patterns
                </p>
               
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div>
                <h1 className="client-size" >
                  76+
                </h1>
                <p
                 
                  className="mt-3 mb-1 happy-accuracytext"
                >
                 Users approve and use regularly<br></br> AI writing
                </p>
                
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div>
                <h1 className="client-size">
                  {" "}
                  <span className="specialsign-none">&gt;</span> 96%
                </h1>
                <p
                 
                  className="mt-3 mb-1 happy-accuracytext"
                >
                  Proven accuracy
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} xs={12}>
              <div>
                <h1 className="client-size" >
                  67
                </h1>
                <p
                 
                  className="mt-3 mb-1 happy-accuracytext"
                >
                  Industry leading eNPS<br></br> score
                </p>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="within-reach-bg">
        <Container className="mt-0 within-reach-position">
          <Row>
            <Col lg={12}>
              <Card className="fantasy-card border-0 rounded-5">
                <Card.Body>
                  <Row className="top-spacing">
                    <Col lg={5} md={5} className="reach-spacing">
                      <h2 className="withinreach text-white">
                        Within the reach of any  anime fan easy to use and effective
                      </h2>
                    
                    </Col>
                    <Col lg={7} md={7} className="pt-2 reach-paragraph">
                      <p
                        className="text-white "
                      
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum, molestias. Odio ipsa asperiores natus
                        laboriosam aliquam possimus, obcaecati voluptas
                        doloribus ducimus
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FantasyStories;
