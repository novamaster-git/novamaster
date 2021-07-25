import React, { Fragment } from "react";
import Styled from "styled-components";
const ContainerTag = Styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const TotalContainer = Styled.div`
    /* width: 55%; */
    height: auto;
    @media only screen and (max-width: 1920px){
      width: 65%;
      /* display:none; */
    }
    @media only screen and (max-width: 1555px){
      width: 75%;
    }
    @media only screen and (max-width: 1366px){
      width: 75%;
    }
    @media only screen and (max-width: 1280px){
      width: 80%;
    }
    @media only screen and (max-width: 499px){
      width:90%;
    }




    
`;
const HeroSection = (props) => {
  return (
    <Fragment>
      <ContainerTag>
        <TotalContainer>{props.children}</TotalContainer>
      </ContainerTag>
    </Fragment>
  );
};
export default HeroSection;
