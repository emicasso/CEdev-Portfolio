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
        className="container-fluid d-flex align-items-end "
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container bg">
          <div className="row align-items-center text-center">
            <div className="col-sm-6 " data-aos="fade-right">
              <div className="container mt-5" >
                <img src={me} alt="" className="img-fluid mt-5" />
              </div>
            </div>
            <div className="col-sm-6" data-aos="fade-down-left">
              <h2 data-aos="fade-down-left">
                You have to know this about me <span>&#128071;</span>
              </h2>
              <p data-aos="fade-down-left">
                I am Emiliano Cassoni I have 24 years living in the city of
                Corrientes, currently I am studying the Bachelor's Degree in
                Information Systems at the UNNE. I am a Front-End Developer JR,
                on my way to being a FullStack developer. I stand out for being
                a very active person in the initiatives I take. I like to
                provide support with my knowledge to third parties for the best
                decision making. Very capable when it comes to learning about
                new areas and internalizing myself in a new world. I am
                currently looking for an opportunity to expand my knowledge and
                be able to help as much as possible.
              </p>
              <div className="container" >
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
