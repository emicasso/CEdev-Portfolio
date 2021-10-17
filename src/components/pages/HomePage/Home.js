import React from "react";
import "../../../App.css";
import Hero from "../../Hero";
import Cards from "../../Cards";
import Aboutme from "../../Aboutme";



function Home() {
  return (
    <div className="hero-content">
      <Hero />
      <Cards />
      <Aboutme />
    </div>
  );
}

export default Home;
