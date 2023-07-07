import React from 'react'
import Main from './Main'
import Textpad from './Textpad'
import DigiSlider from '../LandingPage/DigiSlider'
import Empty from './Empty'
import Footer from '../LandingPage/Footer'
const index = () => {
  return (
    <div>
        <Main/>
        <Textpad/>
        <div className='translator-slider'>
        <DigiSlider/>
         </div>
         <Empty/>
         
         <Footer paddingTop="8rem"/>
        
    </div>
  )
}

export default index