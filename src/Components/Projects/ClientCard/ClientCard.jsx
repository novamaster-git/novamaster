import React, { Fragment } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const Card = styled.div`
overflow: hidden;
  width: 100%;
  background-color: #eaf6ff;
  border-radius: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
  margin-bottom:20px;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  @media (max-width: 600px){
    padding: 20px 20px 40px 20px;
  }
`;

const CardTitle = styled.h2`
  width: 100%;
  color: black;
  font-weight: 400;
`;
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 10px;
  margin-top: 25px;
`;

const Discription = styled.p`
padding:20px 10px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
`;
const Tag = styled.div`
  font-size: 12px;
  background-color: ${({ color }) => color};
  color: white;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0px 5px;
`;
const VisitButton = styled.a`
    text-decoration:none;
    color:white;
    font-family: "Poppins", sans-sarif;
    background-color:#512DA8;
    padding:7px 10px;
    border-radius:5px;
    display:inline;
    float:right;
    cursor:pointer;
    &:hover{
      background-color:#1565C0;
    }
`;
const ClientCard = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card>
        <CardTitle>Client's Projects</CardTitle>

        <ProjectContainer>
          <div className={classes.root}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{width : "100%"}}
              >
                <Typography className={classes.heading} component={'span'} variant={'body2'} >
                  Dynamic Resume Site for a Researcher Fellow
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'span'} variant={'body2'}>
                  <Discription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores fuga atque architecto expedita commodi quos id
                    nobis earum quia adipisci, ratione deserunt sunt cupiditate
                    culpa. Repellendus similique voluptates consectetur
                    voluptate!
                  </Discription>
                  <p>Languages Used : </p>
                  <TagContainer>
                    <Tag color="#F57F17">JavaScript</Tag>
                    <Tag color="#D84315">Html</Tag>
                    <Tag color="#4527A0">Css</Tag>
                    <Tag color="#B71C1C">Node.js + Express</Tag>
                    <Tag color="#6200EA">MySql</Tag>
                  </TagContainer>
                  <VisitButton>Visit Project</VisitButton>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop: '10px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} component={'span'} variant={'body2'}>
                  Food delivery App REST API
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant={'body2'} component={'span'}>
                  <Discription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores fuga atque architecto expedita commodi quos id
                    nobis earum quia adipisci, ratione deserunt sunt cupiditate
                    culpa. Repellendus similique voluptates consectetur
                    voluptate!
                  </Discription>
                  <p>Languages Used : </p>
                  <TagContainer>
                    <Tag color="#F57F17">PHP</Tag>
                    <Tag color="#B71C1C">laravel</Tag>
                    <Tag color="#D84315">Html</Tag>
                    <Tag color="#4527A0">Css</Tag>
                    <Tag color="#6200EA">MySql</Tag>
                  </TagContainer>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </ProjectContainer>
      </Card>
    </Fragment>
  );
};
export default ClientCard;
