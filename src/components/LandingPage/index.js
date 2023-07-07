import React from "react";
import Anime from "./Anime";
import Anime2 from "./Anime2";
import Besttools from "./Besttools";
import DigiSlider from "./DigiSlider";
import Empty from './Empty'
import Empty2 from './Empty2'
import Empty3 from './Empty3'
import FantasyStories from './FantasyStories'
import Footer from './Footer'
import Main from './Main'
import QualityCards from './QualityCards'
import Form from './Form'


function LandingPage() {
  return <div >
      <Main />
      <QualityCards />
      <Anime />
      <Besttools />
      <Anime2 />
      <FantasyStories />
      <div className="position-relative">
        <DigiSlider />
        <Empty />
        <Form />
      </div>
      <Footer /> 
   
  </div>;
}

export default LandingPage;
