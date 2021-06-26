import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Card = styled.div`
  width: 100%;
  background-color: #2c3e50;
  border-radius: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  @media (max-width: 499px){
    padding: 20px 20px 40px 20px;
  }
`;
const CardTitle = styled.h2`
  width: 100%;
  color: white;
  font-weight: 400;
`;
const RepoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 10px;
  margin-top: 25px;
  @media (max-width: 800px){
    grid-template-columns: 1fr;
  }
  @media (max-width: 499px){
    grid-template-columns: 1fr;
  }
`;
const RepoCards = styled.div`
  position: relative;
  display: block;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 10px 20px 20px 20px;
  color: white;
  background-color: #01152955;
  .repo-title {
    display: inline;
    font-size: 22px;
    font-weight: 400;
  }
  .desc {
    font-size: 16px;
    font-weight: 200;
  }
  .language {
    display: inline;
    float: right;
    padding: 5px 10px;
    background-color: crimson;
    border-radius: 5px;
    font-size: 12px;
  }
  .fokes {
  }
`;
const fetchGit = async (url) => {
  try {
    var repos = await fetch(
      url
    );
    var reposJson = await repos.json();
    return reposJson;
  } catch (ex) {
    console.log(ex);
  }
};

const GithubCard = (props) => {
  const url="https://api.github.com/users/novamaster-official/repos";
  useEffect(() => {
    fetchGit(url)
      .then((result) => {
        setDone(true);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  const [done, setDone] = useState(false);
  const [data, setData] = useState([]);
  if (!done) {
    return <div>Loading...</div>;
  } else {
    return (
      <Card>
        <CardTitle>Project Repos at Github</CardTitle>
        <RepoContainer>
          {data.map((element) => {
            return (
              <RepoCards key={element.id}>
                <h2 className="repo-title">{element.name}</h2>
                <p className="language">{element.language}</p>
                <p className="desc">{element.description}</p>
                <p className="fokes">
                  Forks : {element.forks}
                  <br /> Updated at :{" "}
                  {new Date(element.updated_at).toDateString()}
                </p>
              </RepoCards>
            );
          })}
        </RepoContainer>
      </Card>
    );
  }
};
export default GithubCard;
