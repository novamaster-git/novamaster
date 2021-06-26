import React, { Fragment } from "react";
import Styled from "styled-components";
const ContainerTag = Styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const TotalContainer = Styled.div`
    width: 55%;
    height: auto;
    @media (max-width: 1366px){
      width: 75%;
    }
    @media (max-width: 1555px){
      width: 65%;
    }
    @media (max-width: 1280px){
      width: 85%;
    }
    @media (max-width: 499px){
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
