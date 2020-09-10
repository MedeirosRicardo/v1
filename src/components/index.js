import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Particles from "./Particles";

const Home = (props) => {
  return (
    <BrowserRouter>
      <Header resumeData={props.resumeData} />
      <Particles />
    </BrowserRouter>
  );
};

export default Home;
