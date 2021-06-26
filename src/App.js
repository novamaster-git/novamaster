import React, { Fragment } from "react";
import styled from "styled-components";
import Container from "./Components/Container/Container";
import TabContainer from "./Components/TabContainer/TabContainer";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
const Title = styled.div`
  font-size: 52px;
  font-weight: 400;
  color: white;
  font-family: "Raleway", sans-serif;
  text-align: center;
  margin-top: 50px;
  text-transform: uppercase;
  @media (max-width: 499px){
    margin-top: 25px;
    font-size: 30px;
  }
`;
function App(props) {
  return (
    <Fragment>
      <Container>
        <Title>Nova_Master</Title>
        <TabContainer />
        <Switch>
          <Route exact path="/" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
