import React, { Fragment, useState } from "react";
import styled from "styled-components";
import CardTitle from "../../CardTitle/CardTitle";
import { BsAward, BsLightning } from "react-icons/bs";

const Card = styled.div`
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  position: relative;
  top: 0;
  left: 0;
  margin-top: 60px;
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
  background-color: #eaf6ff;
  border-radius: 10px;
  padding: 25px 40px;
  @media (max-width: 950px) {
    padding: 15px 20px;
  }
  @media (max-width: 800px) {
    height: auto;
    padding: 20px 20px;
  }
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
  /* border: 2px solid black; */
  .active {
    background: linear-gradient(
      90deg,
      rgba(111, 0, 207, 1) 0%,
      rgba(22, 55, 241, 1) 100%
    );
    background-size: 200% 200%;
    color: white;
  }
  @media (max-width: 800px) {
    flex-direction: row;
    height: auto;
    margin-bottom: 10px;
    width: 100%;
    .active {
      background: transparent;
      color: rgba(22, 55, 241, 1);
    }
  }
`;
const Timeline = styled.div`

  width: 100%;
  .sessions {
    position: relative;
    list-style-type: none;
  }
  li {
    padding-bottom: 2rem;
    border-left: 1px solid #abaaed;
    position: relative;
    padding-left: 25px;
    margin-left: 12px;
    &:last-child {
      border: 0px;
      padding-bottom: 0;
    }
    &:before {
      content: "";
      width: 20px;
      height: 20px;
      background: white;
      border: 1px solid #4e5ed3;
      box-shadow: 3px 3px 0px #bab5f8;
      box-shadow: 3px 3px 0px #bab5f8;
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 0px;
    }
  }
  .time {
    color: #2a2839;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;
    @media (max-width: 950px) {
      font-size: 20px;
    }
  }
`;

const Title = styled.h2`
  font-weight: 400;
  width: 300px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
  padding: 12px 30px;
  border-radius: 10px;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  .icon {
    margin-right: 8px;
    font-size: 32px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px 10px;
    margin: 0px 0px;
    width: auto;
    .icon {
      margin-right: 8px;
      font-size: 22px;
    }
  }
`;

const ExparianceCard = () => {
  const [education, setEducation] = useState(false);
  const educationHandler = () => {
    setEducation(false);
  };
  const workHandler = () => {
    setEducation(true);
  };
  return (
    <Fragment>
      <Card>
        <Row>
          <Column>
            <Title
              onClick={educationHandler}
              className={education ? "" : "active"}
            >
              <BsAward className="icon" /> Education
            </Title>
            <Title onClick={workHandler} className={education ? "active" : ""}>
              <BsLightning className="icon" /> Application
            </Title>
          </Column>
          <Column>
            <Timeline>
              {!education ? (
                <ul className="sessions">
                  <li>
                    <div className="time">Secondary Education</div>
                    <p>Hantal Bishalakshi High School</p>
                  </li>
                  <li>
                    <div className="time">Higher Secondary</div>
                    <p>Hantal Bishalakshi High School</p>
                  </li>
                  <li>
                    <div className="time">
                      Electronics And TeleCommunication
                    </div>
                    <p>Ramakrishna Mission Shilpamandira</p>
                  </li>
                </ul>
              ) : (
                <ul className="sessions">
                  <li>
                    <div className="time">As a Freelancer</div>
                    <p>Since 2019</p>
                  </li>
                  <li>
                    <div className="time">Mobotics</div>
                    <p>Since 2020</p>
                  </li>
                  <li>
                    <div className="time">Microsoft Corporation</div>
                    <p>Since 2023</p>
                  </li>
                </ul>
              )}
            </Timeline>
          </Column>
        </Row>
        <CardTitle>#Experience</CardTitle>
      </Card>
    </Fragment>
  );
};
export default ExparianceCard;
