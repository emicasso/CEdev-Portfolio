import React from "react";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/HomePage/Home";
import Projects from "./components/pages/Projects/Projects";
import AboutMe from "./components/pages/AboutMe/About";
import Contact from "./components/pages/Contact/Contact";

library.add(fab, fas, faCheckSquare, faCoffee);
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
