import React, { Fragment } from "react";
import styled from "styled-components";
const Card = styled.div`
  /* overflow: hidden; */
  width: 100%;
  background-color: #eaf6ff;
  border-radius: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
  margin-bottom: 20px;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    padding: 20px 20px 40px 20px;
  }
`;
const CardTitle = styled.h2`
  width: 100%;
  color: black;
  font-weight: 400;
  font-size: 28px;
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const Discription = styled.p`
  padding: 20px 10px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Tag = styled.div`
  font-size: 14px;
  background-color: ${({ color }) => color};
  color: white;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0px 5px;
  text-align: center;
  @media (max-width: 600px) {
    margin: 5px 10px;
    width: auto;
    flex-direction: column;
  }
`;
const VisitButton = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Poppins", sans-sarif;
  background-color: #512da8;
  padding: 7px 15px;
  border-radius: 5px;
  display: inline;
  float: right;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;
const ProjectCard = styled.div`
  width: 100%;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  padding: 20px 20px;
  background-color: #effcfc;
  margin: 10px 0px;
`;
const ProjectTitle = styled.h3`
  width: 100%;
  font-weight: 500;
  font-family: "Quicksand", sans-serif;
  font-size: 24px;
`;
const ClientCard = (props) => {
  return (
    <Fragment>
      <Card>
        <CardTitle>Client's Projects</CardTitle>
        <ProjectContainer>
          <ProjectCard>
            <ProjectTitle>
              Dynamic Resume Site for a Researcher Fellow
            </ProjectTitle>
            <Discription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores fuga atque architecto expedita commodi quos id nobis
              earum quia adipisci, ratione deserunt sunt cupiditate culpa.
              Repellendus similique voluptates consectetur voluptate!
            </Discription>
            <p>Languages Used : </p>
            <TagContainer>
              <Tag color="#F57F17">JavaScript</Tag>
              <Tag color="#D84315">Html</Tag>
              <Tag color="#4527A0">Css</Tag>
              <Tag color="#6200EA">MySql</Tag>
              <Tag color="#B71C1C">Node.js + Express</Tag>
            </TagContainer>
            <VisitButton>Visit Project</VisitButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Food delivery App REST API</ProjectTitle>
            <Discription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores fuga atque architecto expedita commodi quos id nobis
              earum quia adipisci, ratione deserunt sunt cupiditate culpa.
              Repellendus similique voluptates consectetur voluptate!
            </Discription>
            <p>Languages Used : </p>
            <TagContainer>
              <Tag color="#F57F17">PHP</Tag>
              <Tag color="#B71C1C">laravel</Tag>
              <Tag color="#D84315">Html</Tag>
              <Tag color="#4527A0">Css</Tag>
              <Tag color="#6200EA">MySql</Tag>
            </TagContainer>
          </ProjectCard>
        </ProjectContainer>
      </Card>
    </Fragment>
  );
};
export default ClientCard;
