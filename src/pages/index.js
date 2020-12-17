import React from "react";
import Header from "../components/Header";
import Particles from "../components/Particles";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Home" />
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
