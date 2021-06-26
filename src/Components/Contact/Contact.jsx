import React, { Fragment } from "react";
import styled from "styled-components";
import {AiOutlineCopy} from 'react-icons/ai';
import {  FaDiscord, FaLinkedinIn,FaInstagram } from "react-icons/fa";
import Email from "../../res/img/email2.png"

const ContactContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  height:500px;
  background-color:#eaf6ff;
  border-radius: 10px;
  padding: 20px;
  display:flex;
  flex-direction:row;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  @media (max-width: 499px){
    padding: 20px 0px;
  }
`;
const SocialTitle = styled.div`
margin-top: 10px;
  font-size:22px;
`;
const SocialLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* height: 60%; */
  width: 100%;
  border: 1px dashed grey;
  margin-top: 5px;
  .icon-size {
    font-size: 72px;
    background-color: #cacaca40;
    padding: 10px;
    color: #1637f1cf;
    border-radius: 10px;
    &:hover{
      color: #051eaccf;
    }
  }
`;
const ContactCard = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px;
  .icon{
    position: absolute;
    right:8px;
    font-size: 26px;
    height:100%;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
      color: #007ce9;

    }
  }
`;
const Blank = styled.div`
  flex:1;
  background: url(${({url}) => url});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  @media (max-width: 950px){
    display: none;
  }
 
`;
const CardTitle = styled.h2`
  width: 100%;
  color: #000000;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 42px;
`;
const Copypad = styled.input`
  padding: 10px 20px;
  font-size:18px;
  font-weight: 200;
  width:100%;
  border: 1px dashed grey;
  position: relative;
  top: 0;
  left:0;
  @media (max-width: 600px){
    font-size: 14px;
  }
`;
const Contact = (props) => {
  return (
    <Fragment>
      <ContactContainer>
        <Blank url={Email}/>
        <ContactCard>
          <CardTitle>Contact Me</CardTitle>
          <label for="email" style={{fontSize: '22px'}}>Email : </label>
          <div style={{position: "relative", width: "100%", marginTop:"5px"}}>
          <Copypad id="email" value="soumensamanta.official@gmail.com" disabled/>
          <AiOutlineCopy className="icon" onClick={() =>  navigator.clipboard.writeText('soumensamanta.official@gmail.com')}/> 
          </div>
          <label for="phone" style={{fontSize: '22px', marginTop:"5px"}}>Contact No : </label>
          <div style={{position: "relative", width: "100%", marginTop:"5px"}}>
          <Copypad id="phone" value="+91-XXXXXXXXXX" disabled/>
          <AiOutlineCopy className="icon" onClick={() =>  navigator.clipboard.writeText('soumensamanta.official@gmail.com')}/> 
          </div>
          <SocialTitle>
            Also Connect With Me on:
          </SocialTitle>
          <SocialLinks>
          <FaLinkedinIn className="icon-size" />
          <FaInstagram className="icon-size" />
          <FaDiscord className="icon-size" />
        </SocialLinks>
        </ContactCard>
      </ContactContainer>
      
    </Fragment>
  );
};
export default Contact;
