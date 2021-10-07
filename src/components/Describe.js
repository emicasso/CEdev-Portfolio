import React from "react";
import "./Describe.css";

function Describe({ name, imageSrc, Autor, Technologies }) {
  return (
    <>
      <div >
        <div className="skill-card rounded shadow">
          <header className="skill-card__header rounded-top">
            <video src={imageSrc} className="skill-card__icon" autoPlay loop muted></video>
          </header>
          <section className="skill-card__body">
            <h2 className="skill-card__title">{name}</h2>
            <span className="skill-card__duration">{Autor}</span>
            <ul className="nav flex-column skill-card__knowledge">
              <li className="nav-item">{Technologies[0]}</li>
              <li className="nav-item">{Technologies[1]}</li>
              <li className="nav-item">{Technologies[2]}</li>
              <li className="nav-item">{Technologies[3]}</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Describe;
