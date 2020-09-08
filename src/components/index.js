import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Particles from "./Particles";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Particles />
    </BrowserRouter>
  );
};

export default Home;
