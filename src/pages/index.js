import React from "react";
import Header from "../components/Header";
import Particles from "../components/Particles";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <Header resumeData={data} />
      <Particles />
    </React.Fragment>
  )
}

export default IndexPage

export const query = graphql`
  query {
    resume: resumeDataJson {
      name
      homeSkills {
        skillname
      }
    }
  }
`;
