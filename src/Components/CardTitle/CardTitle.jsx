import React, { Fragment } from "react";
import styled from "styled-components";
const Title = styled.div`
  position: absolute;
  /* top:  ${({ top }) => (parseInt(top)) + 'px'}; */
  /* right:  ${({ right }) => (parseInt(right)) + 'px'}; */
  top: 15px;
  right:-60px;
  display: inline-block;
  font-family: "Raleway", sans-serif;
  font-size: 48px;
  letter-spacing: 2px;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  @media (max-width: 950px){
    top: 25px;
    right:-50px;
    font-size: 32px;
  }
  @media (max-width: 950px){
display: none;
  }
`;
const About = (props) => {
  return (
    <Fragment>
      <Title top={props.top} right={props.right}>
        {props.children}
      </Title>
    </Fragment>
  );
};
export default About;
