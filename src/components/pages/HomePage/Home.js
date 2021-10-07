import React from "react";
import "../../../App.css";
import Hero from "../../Hero";
import Cards from "../../Cards";
import Aboutme from "../../Aboutme";
import Footer from "../../Footer";

function Home() {
  return (
    <div className="hero-content">
      <Hero />
      <Cards />
      <Aboutme />
      <Footer/>
    </div>
  );
}

export default Home;
