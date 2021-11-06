import React from "react";
import { Helmet } from "react-helmet";
import "../../../App.css";
import Data from "./Data";
import Slide from "./Slide";
import Technologies from "./Technologies";

function About() {
  return (
    <main>
      <Helmet>
        <title>CEdev About me</title>
        <meta
          name="description"
          content="My personal description and programming knowledge"
        />
      </Helmet>
      <Data></Data>
      <Technologies></Technologies>
      <Slide></Slide>
    </main>
  );
}

export default About;
