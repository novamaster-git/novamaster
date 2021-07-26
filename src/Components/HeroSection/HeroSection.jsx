import React, { Fragment } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styled from "styled-components";
import Profile from "../../res/img/Profile.jpg";
import Goggles from "../../res/img/losisdos.png";
import CardTitle from "../CardTitle/CardTitle";
import { FaGithub, FaCodepen, FaLinkedinIn } from "react-icons/fa";
const HeroContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  background-color: #eaf6ff;
  margin-top: 40px;
  border-radius: 10px 10px 10px 10px;
  padding: 30px 30px 20px 30px;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.5s ease-in-out;
  @media (max-width: 1260px) {
    height: 300px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  flex: 2;
  margin-left: 20px;
  &:hover {
    .googles {
      opacity: 1;
      top: 48px;
    }
  }
  .profileImg {
    position: relative;
    width: 240px;
    border-radius: 5px;
  }
  .googles {
    opacity: 0;
    position: absolute;
    top: -40px;
    left: 70px;
    width: 100px;
    transition: all 0.5s ease;
  }
  @media (max-width: 1260px) {
    > img {
      width: 180px;
      border-radius: 5px;
    }
  }
  @media (max-width: 800px) {
    > img {
      width: 220px;
      border-radius: 5px;
    }
  }
  @media (max-width: 499px) {
    width: 100%;
    > img {
      width: 250px;
      border-radius: 5px;
    }
  }
`;
const ProfileContainer = styled.div`
  .aws-btn {
    margin-top: 15px;
    --button-default-height: 51px;
    --button-default-font-size: 14px;
    --button-default-border-radius: 2px;
    --button-horizontal-padding: 20px;
    --button-raise-level: 8px;
    --button-hover-pressure: 1;
    --transform-speed: 0.175s;
    --button-primary-color: #1e88e5;
    --button-primary-color-dark: #1360a4;
    --button-primary-color-light: #ffffff;
    --button-primary-color-hover: #187bd1;
    --button-primary-border: none;
    --button-secondary-color: #f2f6f9;
    --button-secondary-color-dark: #1360a4;
    --button-secondary-color-light: #1e88e5;
    --button-secondary-color-hover: #e1eaf1;
    --button-secondary-border: 2px solid #1e88e5;
    --button-anchor-color: #0e4f88;
    --button-anchor-color-dark: #072743;
    --button-anchor-color-light: #ffffff;
    --button-anchor-color-hover: #0d4a7f;
    --button-anchor-border: none;
  }
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  > h1 {
    font-weight: 400;
    font-size: 35px;
  }
  .ability {
    letter-spacing: 2px;
  }
  .desc {
    margin-top: 20px;
    font-size: 18px;
  }
  @media (max-width: 1260px) {
    > h1 {
      font-weight: 400;
      font-size: 35px;
    }
    .ability {
      letter-spacing: 2px;
      font-size: 18px;
    }
    .desc {
      margin-top: 20px;
      font-size: 16px;
    }
  }
  @media (max-width: 950px) {
    width: 100%;
    > h1 {
      font-weight: 400;
      font-size: 35px;
    }
    .ability {
      letter-spacing: 1px;
      font-size: 16px;
    }
    .desc {
      margin-top: 20px;
      font-size: 14px;
    }
  }
  @media (max-width: 499px) {
    width: 100%;
    padding: 20px 10px;
    align-items: center;
    > h1 {
      font-weight: 400;
      font-size: 30px;
    }
    .ability {
      margin-top: 5px;
      letter-spacing: 1px;
      font-size: 14px;
    }
    .desc {
      width: 100%;
      margin-top: 20px;
      font-size: 14px;
    }
  }
`;
const SocialLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  > a {
    text-decoration: none;
  }
  .icon-size {
    cursor: pointer;
    font-size: 48px;
    background-color: #cacaca40;
    padding: 10px;
    color: #1637f1cf;
    border-radius: 10px;
    &:hover {
      color: #0f29c0cf;
    }
  }
  @media (max-width: 1260px) {
    height: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const HeroSection = (props) => {
  return (
    <Fragment>
      <HeroContainer>
        <ImageContainer>
          <img className="profileImg" src={Profile} alt="Failed" />
          <img className="googles" src={Goggles} alt="chosma" />
        </ImageContainer>
        <ProfileContainer>
          <h1>Soumen Samanta</h1>
          <p className="ability">MERN STACK DEVELOPER | ELECTRONICS ENGINEER</p>
          <p className="desc">
            I am a Self-Taught and motivated Programmer who is Passionate about
            learning new things.Now I want to be a part of an Organization/Team
            to build production level code.
          </p>
          <AwesomeButton className="aws-btn" size="medium">
            Resume
          </AwesomeButton>
        </ProfileContainer>

        <SocialLinks>
          <a
            href="https://www.linkedin.com/in/soumen-samanta/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon-size" />
          </a>
          <a
            href="https://github.com/novamaster-git"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="icon-size" />
          </a>
          <a
            href="https://codepen.io/nova_master"
            target="_blank"
            rel="noreferrer"
          >
            <FaCodepen className="icon-size" />
          </a>
        </SocialLinks>
        <CardTitle top="80" right="-120">
          #About
        </CardTitle>
      </HeroContainer>
    </Fragment>
  );
};
export default HeroSection;
