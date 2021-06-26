import React, { Fragment } from "react";
import styled from "styled-components";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const FooterCard = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 80px;
  background-color: #eaf6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  .copyright {
    display: flex;
    align-items: center;
    > a {
      text-decoration: none;
      color: black;
      margin: 0px 10px;
    }
  }
  .icon {
    margin-right: 5px;
  }
`;
const Footer = (props) => {
  return (
    <Fragment>
      <FooterCard>
        <div className="copyright">
          <AiOutlineCopyrightCircle className="icon" />
          2021
        </div>
        <div className="copyright">
          <a href="www.google.com">LinkedIn</a> |{" "}
          <a href="www.google.com">Github</a>
        </div>
        <div style={{color:'transparent'}}>Icons made by <a style={{color:'transparent'}} href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" style={{color:'transparent'}} title="Flaticon">www.flaticon.com</a></div>
      </FooterCard>
    </Fragment>
  );
};
export default Footer;
