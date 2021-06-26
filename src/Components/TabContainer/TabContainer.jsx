import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {BiHomeAlt, BiGitRepoForked, BiMessageSquareDetail} from "react-icons/bi";
const Tabs = styled.div`
  margin-top: 40px;
  width: 100%;
  background-color: #eaf6ff;
  display: flex;
  justify-content: space-around;
  border-radius: 10px 10px 10px 10px;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  .active {
    color: #1637f1;
    background-color: #BBDEFB;
  }
  @media (max-width:499px){
    flex-direction: column;
  }
`;
const Links = styled(NavLink)`
  color: #1637f1cf;
  text-decoration: none;
  font-size: 22px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  padding: 10px 25px 10px 25px;
  background-color: transparent;
  .icon{
    font-size: 24px;
    margin-right: 5px;
  }
  @media (max-width:800px){
    font-size: 18px;
  }
  @media (max-width:650px){
    font-size: 14px;
    .icon{
    font-size: 16px;
    margin-right: 5px;
  }
  }
  @media (max-width:499px){
    padding: 15px 25px 15px 25px;
    font-size: 14px;
    .icon{
    font-size: 16px;
    margin-right: 5px;
  }
  }
`;
const TabContainer = (props) => {
  return (
    <Fragment>
      <Tabs>
        <Links to="/" exact activeClassName="active">
         <BiHomeAlt className="icon"/> Home
        </Links>
        <Links to="/projects" activeClassName="active">
          <BiGitRepoForked className="icon"/>Projects
        </Links>
        <Links to="/contact" activeClassName="active">
          <BiMessageSquareDetail className="icon"/>Contact Me
        </Links>
      </Tabs>
    </Fragment>
  );
};
export default TabContainer;
