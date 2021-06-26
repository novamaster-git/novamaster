import React, { Fragment } from "react";
import GithubCard from "./GithubCard/GithubCard";
import ClientCard from "./ClientCard/ClientCard";

const Project = (props) => {
  return (
    <Fragment>
      <GithubCard />
      <ClientCard />
    </Fragment>
  );
};
export default Project;
