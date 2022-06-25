import React, { useState, Fragment } from "react";
import CardTitle from "../../CardTitle/CardTitle";
import { AboutContainer, ProgressValue, Row, Column } from "./SkillsStyle";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import Button from "@material-ui/core/Button";
const SkillsCard = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div className="persentage">{props.progress}</div>
      <div className="progress">
        <ProgressValue
          progressValue={props.progress}
          color={props.color}
        ></ProgressValue>
      </div>
    </div>
  );
};
const Skills = () => {
  const [checked, setChecked] = useState(true);
  const switchChangeHander = () => {
    setChecked(!checked);
  };
  return (
    <Fragment>
      <AboutContainer>
        <Fragment>
          {checked ? (
            <Row>
              <Column>
                <h1 className="division-title">Web Apps Skills</h1>
                <SkillsCard
                  title="html + css"
                  progress="85%"
                  color="linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);"
                />

                <SkillsCard
                  title="React + Redux"
                  progress="80%"
                  color="linear-gradient(to right, #7f00ff, #e100ff)"
                />
                
                <SkillsCard
                  title="Bootstrap"
                  progress="90%"
                  color="linear-gradient(to right, #ff9966, #ff5e62)"
                />
              </Column>
              <Column>
                <h1 className="division-title">App Skills</h1>
                <SkillsCard
                  title="React Native"
                  progress="70%"
                  color="linear-gradient(to right, #fc4a1a, #f7b733)"
                />
                <SkillsCard
                  title="Android Native"
                  progress="45%"
                  color="linear-gradient(to right, #f953c6, #b91d73)"
                />
                
              </Column>
            </Row>
          ) : (
            <Row>
              <Column>
                <h1 className="division-title">Programming Skills</h1>
                <SkillsCard
                  title="Javascript"
                  progress="85%"
                  color="linear-gradient(to right, #ff8008, #ffc837)"
                />
                <SkillsCard
                  title="TypeScript"
                  progress="60%"
                  color="linear-gradient(to right, #cb2d3e, #ef473a)"
                />
                <SkillsCard
                  title="java"
                  progress="70%"
                  color="linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);"
                />
                
                <SkillsCard
                  title="php"
                  progress="55%"
                  color="linear-gradient(to right, #00c6ff, #0072ff)"
                />
               
              </Column>

              <Column>
                <h1 className="division-title">Dev-Tools and Other Skills</h1>
                <SkillsCard
                  title="Git version control"
                  progress="78%"
                  color="linear-gradient(to right, #ec008c, #fc6767)"
                />
                <SkillsCard
                  title="linux terminal"
                  progress="68%"
                  color="linear-gradient(to right, #ffe259, #ffa751)"
                />
                <SkillsCard
                  title="photoshop"
                  progress="72%"
                  color="linear-gradient(to right, #5433ff, #20bdff, #a5fecb)"
                />
                <SkillsCard
                  title="postman"
                  progress="60%"
                  color="linear-gradient(to right, #ec008c, #fc6767)"
                />
                <SkillsCard
                  title="NginX"
                  progress="52%"
                  color="linear-gradient(to right, #eb3349, #f45c43)"
                />
              </Column>
            </Row>
          )}
        </Fragment>
        <CardTitle>#Skills</CardTitle>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "20px",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            marginBottom: "5px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={switchChangeHander}
            style={{
              fontSize: "24px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            {checked ? <BiCaretRightCircle /> : <BiCaretLeftCircle />}
          </Button>
        </div>
      </AboutContainer>
    </Fragment>
  );
};
export default Skills;
