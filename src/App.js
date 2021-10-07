import React from "react";
import Navbar from './components/Navvbar'
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/pages/HomePage/Home";
import Projects from "./components/pages/Projects/Projects";
import AboutMe from "./components/pages/AboutMe/About";

library.add(fab, faCheckSquare, faCoffee);
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
            </Switch>
      </Router>
    </div>
  );
}

export default App;
