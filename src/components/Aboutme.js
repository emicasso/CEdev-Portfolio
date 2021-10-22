import React from "react";
import me from "../media/about.png";
import "./Aboutme.css";
import Button from "react-bootstrap/Button";
import background from "../media/backbot2.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Aboutme() {
  return (
    <div
      className="about-container py-5"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Container className="hero align-items-center justify-content-center py-5">
        <Container className="py-5">
          <Row className="text-center justify-content-center py-5"></Row>
          <Container>
            <Row className="justify-content-center align-items-center about--text">
              <Col xs={6} className="text-center about-img">
                <Container className="about">
                  <img src={me} alt="" className="img-fluid rounded" />
                </Container>
              </Col>
              <Col xs={6} className="text-light about--text">
                <h1>
                  Let me tell you something about me<span>&#128170;</span>!
                </h1>
                <p>
                  I describe myself as an active, dynamic person, enthusiastic
                  about achieving work goals. My goals are to gain experience,
                  develop my work with excellent quality, with the greatest
                  responsibility, be useful and perform with great success and
                  as a good Argentine I love mate.
                </p>
                <Link to="/about-me">
                  <Button variant="outline-dark text-light border-light">
                    All About Me
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default Aboutme;
