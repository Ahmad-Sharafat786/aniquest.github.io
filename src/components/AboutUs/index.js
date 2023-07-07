import React from "react";
import AboutMain from "./AboutMain";
import AniquestMap from "./AniquestMap";
import Empty2 from "../AboutUs/Empty2";
import Greatstory from "./Greatstory";
import Empty3 from "../LandingPage/Empty3";
import Form from "../LandingPage/Form";
import Footer from "../LandingPage/Footer";
import Values from "./Values";
import Values2 from "./Values2";
import Whatwedo from "./Whatwedo";
const AboutPage = () => {
  return (
    <div  style={{ background: "#f7f8f9" }}>
      
      <AboutMain />
      <Greatstory />
      <Values />
      <Whatwedo />

      <Values2 />
      <AniquestMap />
      <div className="position-relative">
        <Form bottomPosition="15rem"/>
        <Empty2 />

        <Empty3 />
      </div>
      <Footer />
    </div>
   
  );
};

export default AboutPage;
