import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Whatwedo = () => {
  return (
    <div className="main-what-we-do">
      <Container>
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <h1 className="what-fontsize">
              What <span style={{ color: "#ca3fd6" }}> We </span> <span style={{color: '#0d0c54'}}>Do</span>
            </h1>
          </Col>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <Card className='rounded-4 border-0 mt-5'
                style={{ width: "80%", backgroundColor: "#efebf8" }}
               
              >
                <Card.Body>
                  <Row>
                    <Col lg={12}>
                      <p className="what-we-do">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit quo sapiente quam eum sunt, alias doloremque
                        impedit suscipit laborum a animi fugiat soluta nemo
                        repellendus, illum eligendi iusto reiciendis sit
                        architecto dolores. Neque esse soluta recusandae illum,
                        adipisci expedita officiis doloremque quis iste
                        consequuntur numquam sint, quibusdam repellat asperiores
                        aspernatur.
                      </p>
                      <p className="what-we-do">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit quo sapiente quam eum sunt, alias doloremque
                        impedit suscipit laborum a animi fugiat soluta nemo
                        repellendus, illum eligendi iusto reiciendis sit
                        architecto dolores. Neque esse soluta recusandae illum,
                        adipisci expedita officiis doloremque quis iste
                        consequuntur numquam sint, quibusdam repellat asperiores
                        aspernatur.
                      </p>
                      <p className="what-we-do">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit quo sapiente quam eum sunt, alias doloremque
                        impedit suscipit laborum a animi fugiat soluta nemo
                        repellendus, illum eligendi iusto reiciendis sit
                        architecto dolores. Neque esse soluta recusandae illum,
                        adipisci expedita officiis doloremque quis iste
                        consequuntur numquam sint, quibusdam repellat asperiores
                        aspernatur.
                      </p>
                      <p className="what-we-do">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit quo sapiente quam eum sunt, alias doloremque
                        impedit suscipit laborum a animi fugiat soluta nemo
                        repellendus, illum eligendi iusto reiciendis sit
                        architecto dolores. Neque esse soluta recusandae illum,
                        adipisci expedita officiis doloremque quis iste
                        consequuntur numquam sint, quibusdam repellat asperiores
                        aspernatur.
                      </p>
                      <p className="what-we-do mb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit quo sapiente quam eum sunt, alias doloremque
                        impedit suscipit laborum a animi fugiat soluta nemo
                        repellendus, illum eligendi iusto reiciendis sit
                        architecto dolores. Neque esse soluta recusandae illum,
                        adipisci expedita officiis doloremque quis iste
                        consequuntur numquam sint, quibusdam repellat asperiores
                        aspernatur. consequuntur numquam sint, quibusdam repellat asperiores
                        aspernatur.consequuntur numquam sint, quibusdam repellat
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="free-trial-btn border-0 px-5 py-3">Free Trial</Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};          

export default Whatwedo;
