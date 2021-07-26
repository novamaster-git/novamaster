import React, { Fragment, useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
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
  @media (max-width: 499px) {
    margin-top: 25px;
    font-size: 30px;
  }
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e3eefe;
  > h4 {
    font-size: 28px;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    margin-bottom: 5px;
  }
`;
function App(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <LoadingContainer>
          <h4>NOVA_MASTER</h4>
          <BarLoader width={200} color={"#532EEE"} loading={loading} />
        </LoadingContainer>
      ) : (
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
      )}
    </Fragment>
  );
}

export default App;
