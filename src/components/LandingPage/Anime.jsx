import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import images from '../../assets/Assets/index'
import { FaLongArrowAltRight } from "react-icons/fa";

const Anime = () => {
  return (
    <Container className='main-anime-class Anime-Spacing'>
        <Row>
            <Col lg={6}>
                <img src={images.animateimg} alt="" className='anime-img' />
            </Col>
            <Col lg={6} className='px-4 anime-specific-spacing' >
                <h1 className='fw-bold mt-4 anime-fontsize'>Anime text in ablink<br></br>Automatic and<br></br>Immediate</h1>
                {/* <h1 className='fw-bold anime-fontsize'>Automatic and</h1>
                <h1 className='fw-bold anime-fontsize'>Immediate</h1> */}
                <div className='mt-4 anime-text'>
                <p className='mb-0'>The technology of our AI assures a great writing</p>
                 <p className='mb-0'>without waiting,without creative block,instant</p>
                <p className='mb-0'>content only</p>
                </div>
             
                 
                 <div className='mt-5 d-flex'>
                    <img src={images.checkicon2} alt="" className='checkicon-size'/>
                    <h5 className='ms-3 powered-gpt'>Powered by GPT-3 from OpenAI</h5>
                 </div>
                 <div className='mt-2 d-flex'>
                    <img src={images.checkicon2} alt="" className='checkicon-size'/>
                    <h5 className='ms-3 powered-gpt'>Different genres and tones</h5>
                 </div>
                 <div className='mt-2 d-flex'>
                    <img src={images.checkicon2} alt="" className='checkicon-size'/>
                    <h5 className='ms-3 powered-gpt'>To publish on networks and use them on compaigns</h5>
                 </div>
                 <div>
                 <Button variant="link" className='text-decoration-none  read-more p-0'>Read More <FaLongArrowAltRight/></Button>
                 </div>
               
            </Col>
        </Row>
    </Container>
  )
}

export default Anime