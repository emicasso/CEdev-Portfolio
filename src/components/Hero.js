import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import "./Hero.css";

import { Col, Container, Row } from "react-bootstrap";
import logo from "../media/logo.png";
import background from "../media/backtop.svg";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import Aos from "aos";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container
      fluid
      className=" py-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="hero align-items-center  justify-content-center pb-5">
        <Container className="py-5">
          <Row className="text-center justify-content-center ">
            {/* <Container className="logo">
              <img
                src={""}
                alt=""
                className="img-fluid "
                style={{ width: "8%" }}
              />
            </Container> */}
          </Row>
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col className="text-light about-text" data-aos="fade-right">
                <h1>
                  Hi everyone<span>&#128075;</span>!
                </h1>
                <h2>I am Cassoni Emiliano (CE) </h2>
                <h5>
                  Welcome on my portfolio page! I'm Junior Front End <br />{" "}
                  Developer on the way to Full Stack, currently working as
                  <br />
                  Freelancer React Web Developer
                </h5>
                <p>Living in Corrientes, 🇦🇷. Land of Messi and Mate. </p>

                <Link to="/contact">
                  <Button variant="outline-dark text-light border-light">
                    Contact Me
                  </Button>
                </Link>
              </Col>
              <Col className="text-center about-img">
                <Container className="about" data-aos="fade-left">
                  <img src={logo} alt="" className="img-fluid rounded" />
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Hero;
