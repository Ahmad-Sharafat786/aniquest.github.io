import React from 'react'
import images from '../../assets/Assets/index'
import { Container, Row, Col } from 'react-bootstrap'




const AniquestMap = () => {
  return (
    <div className='main-map-calss'>
        <Container>
            <Row>
                <Col >
                <img src={images.map} alt="" srcset="" className='img-fluid w-100 h-100'/>
                </Col>
            </Row>
        </Container>
     
    </div>
  )
}

export default AniquestMap