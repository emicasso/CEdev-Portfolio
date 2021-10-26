import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import background from "../../../media/backAbouttoop.svg";
import me from "../../../media/m3.png";
import "./About.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Data() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="data__content">
      <div
        className="container-fluid  d-flex align-items-end "
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container bg content-about">
          <div className="row align-items-center text-center">
            <div className="col-sm-6" data-aos="fade-right">
              <div className="container mt-5">
                <img src={me} alt="" className="img-fluid mt-2" />
              </div>
            </div>
            <div
              className="col-sm-6 text-about about-title"
              data-aos="fade-down-left"
            >
              <h1 data-aos="fade-down-left">
                You have to know this about me <span>&#128071;</span>
              </h1>
              <p data-aos="fade-down-left">
                Hi, I'm Emiliano Cassoni, I'm 24. I'm living in Corrientes, ARG.
                I study a Bachelor's Degree in Information Systems at UNNE. I'm
                a Front-End Jr Developer since 2019, working with the most
                frequent languages as HTML, JS, CSS. Framework like Rect js,
                Angular, Node js, Bootstrap, etc. On my way to become Full
                Stack Developer. As a programmer, I describe myself as a very
                skilled person and capable of learning existing programming
                languages ​​very quickly. I'd like to expand my knowledge and be
                able to help as much as possible.
              </p>
              <div className="container">
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/Emiliano-Cassoni-Carta-Presentacion.pdf"
                  }
                  download
                >
                  <Button variant="outline-dark">Download CV</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
