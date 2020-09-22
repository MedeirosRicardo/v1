import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import resumeData from './resumeData';

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => ( <Home {...props} resumeData={resumeData} /> )} />
        <Route exact path="/resume" render={(props) => ( <Resume {...props} resumeData={resumeData} /> )} />
        <Route exact path="/portfolio" render={(props) => ( <Portfolio {...props} resumeData={resumeData} /> )} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
