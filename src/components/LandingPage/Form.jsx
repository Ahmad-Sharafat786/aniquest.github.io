import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Form = ({ bottomPosition }) => {
  const formStyle = {
    bottom: bottomPosition || "0rem" // Use the provided bottomPosition or default to "0rem"
  };
  return (
    
      <Container className="try-card-position">
        
        
            <Card
             
              className="rounded-5 border-0 try-it-form try-free-form" style={formStyle}
            >
              <Card.Img variant="top" src="" />
              <Card.Body className="try-free-spacing">
                <Card.Title>
                  <h1 className="try-it">Try it for free right now !</h1>
                </Card.Title>
                <Card.Text className="try-paragraph">
                  <p
                    className="mb-0 test-quality-content"
                  
                  >
                    Test the quality of our program and let yourself be
                    convinced by the<br></br>
                    effectiveness of our AI, start right now to generate quality
                    content!
                  </p>
                </Card.Text>
                <button
                  variant="primary"
                  className="email-button text-uppercase rounded-3"
                >
                  Signup with email
                </button>{" "}
                <button
                  variant="primary"
                  className="google-button text-uppercase rounded-3"
                >
                  Signup with google
                </button>{" "}
              </Card.Body>
            </Card>
         
        
      </Container>
   
  );
};

export default Form;
