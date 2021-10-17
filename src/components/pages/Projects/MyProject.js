import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./CardProjects.css";
import "aos/dist/aos.css";
import Aos from "aos";

function MyProject(project) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className="movie_card" data-aos="fade-up"
        id="bright"
      >
        <div className="info_section">
          <div className="movie_header">
            <img src={project.imageS} className="locandina" alt="" />
            <h1>{project.name}</h1>
            <h4>Create for {project.Autor}</h4>
            <span className="minutes">{project.Create}</span>
            <p className="type">{project.Autor}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{project.Description}</p>
            <Button variant="outline-dark">
              {" "}
              <a
                href={project.Url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Demo
              </a>
            </Button>
          </div>
          <div className="container mb-2">
            <span
              className="border border-secondary px-1 rounded mx-1 "
              style={{ color: "#757171" }}
            >
              {project.Technologies[0]}
            </span>
            <span
              className="border border-secondary px-1 rounded mx-1"
              style={{ color: "#757171" }}
            >
              {project.Technologies[1]}
            </span>
            <span
              className={
                project.Technologies[2]
                  ? "border border-secondary px-1 rounded mx-1"
                  : "invisible"
              }
              style={{ color: "#757171" }}
            >
              {project.Technologies[2]}
            </span>
            <span
              className={
                project.Technologies[3]
                  ? "border border-secondary px-1 rounded mx-1"
                  : "invisible"
              }
              style={{ color: "#757171" }}
            >
              {project.Technologies[3]}
            </span>
            <span
              className={
                project.Technologies[4]
                  ? "border border-secondary px-1 rounded mx-1"
                  : "invisible"
              }
              style={{ color: "#757171" }}
            >
              {project.Technologies[4] ? `+` : ""}
            </span>
            <br />
          </div>
        </div>
        <div
          className="blur_back "
          style={{ background: `url(${project.imageP})` }}
        ></div>
      </div>
    </>
  );
}

export default MyProject;
