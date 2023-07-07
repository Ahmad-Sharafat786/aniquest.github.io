import React from 'react'
import Pricing from './Pricing'
import Faq from './FAQ'
import Services from './Services'
import Footer from '../LandingPage/Footer'
const index = () => {
  return (
    <div>
    <Pricing/>
    <Faq/>
    <Services/>
    <Footer  paddingTop="8rem"/>
    </div>
  )
}

export default index