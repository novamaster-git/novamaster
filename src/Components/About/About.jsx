import React, { Fragment } from "react";
import HeroSection from "../HeroSection/HeroSection";
import ExparianceCard from "./ExparianceCard/ExparianceCard";
import Skills from "./Skills/Skills";
const About = (props) => {
  return (
    <Fragment>
      <HeroSection />
      <Skills />
      <ExparianceCard />
      
    </Fragment>
  );
};
export default About;
