import React from "react";
import "../../../App.css";
import Hero from "../../Hero";
import Cards from "../../Cards";
import Aboutme from "../../Aboutme";



function Home() {
  return (
    <main className="hero-content">
      <Hero />
      <Cards />
      <Aboutme />
    </main>
  );
}

export default Home;
