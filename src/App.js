import React from "react";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { HashRouter as Router, Route } from "react-router-dom"
import {Switch} from 'react-router'

import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/HomePage/Home";
import Projects from "./components/pages/Projects/Projects";
import AboutMe from "./components/pages/AboutMe/About";
import Contact from "./components/pages/Contact/Contact";
import { Helmet } from "react-helmet";
import PageNotFound from "./components/pages/PageNotFound";

library.add(fab, fas, faCheckSquare, faCoffee);
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="My personal portfolio in reactjs cassoni emiliano" />
        <meta name="keywords" content="Personal portfolio, autonomous projects and contact information" />
      </Helmet>
      <Router>
        <ScrollToTop/>
        <Navbar/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/contact" component={Contact} />
              <Route component={PageNotFound}/>
            </Switch>
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
