import React from "react";
import "./CardProjects.css";

function MyProject(project) {
  return (
    <>
      <div className="movie_card" id="bright">
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
          </div>
          <div className="container mb-2">
            <span className="border border-secondary px-1 rounded mx-1 " style={{ color: "#757171" }}>
              {project.Technologies[0]}
            </span>
            <span className="border border-secondary px-1 rounded mx-1" style={{ color: "#757171" }}>
              {project.Technologies[1]}
            </span>
            <span
              className={project.Technologies[2] ? "border border-secondary px-1 rounded mx-1" : "invisible"}
              style={{ color: "#757171" }}
            >
              {project.Technologies[2]}
            </span>
            <span
              className={project.Technologies[3] ? "border border-secondary px-1 rounded mx-1" : "invisible"}
              style={{ color: "#757171" }}
            >
              {project.Technologies[3]}
            </span>
            <span
              className={project.Technologies[4] ? "border border-secondary px-1 rounded mx-1" : "invisible"}
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
