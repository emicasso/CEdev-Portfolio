import SlideToggle from "react-slide-toggle";
import React from "react";
import "./Slide.css";

const ProgressBar = ({ progress }) => {
  return (
    <span className="progress-bar">
      <span
        className="progress-bar__inner"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </span>
  );
};

function Slide() {
  return (
    <div className="slide__content py-5 text-light" style={{backgroundColor:"#001122"}}>
      <div className="container-fluid d-flex align-items-center">
        <div className="container align-items-center my-5">
          <div className="row align-items-center text-center">
            <div className="col-sm">
              
              <SlideToggle
                duration={800}
                collapsed
                render={({
                  toggle,
                  setCollapsibleElement,
                  toggleState,
                  progress,
                  range,
                }) => (
                  <div className="slide-toggle my-5">
                    <div className="slide-toggle__header">
                      <button className="slide-toggle__toggle" onClick={toggle}>
                        Work Experience
                      </button>
                      <ProgressBar progress={progress} />
                    </div>
                    <div
                      className="slide-toggle__box"
                      ref={setCollapsibleElement}
                    >
                      <div className="slide-toggle__box-inner">
                        <div className="container">
                          <div className="row">
                            <div className="container">
                              <h2>Front End Developer Autonomous 2020-2021(HTML, JS, CSS, REACT, PHP, CodeIgniter, REACT NATIVE, ADOBE XD)</h2>
                              <h5>Creating personal and training projects. Implementing new programming tools and knowing my professional tastes.</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
              <SlideToggle
                duration={800}
                collapsed
                whenReversedUseBackwardEase
                render={({
                  toggle,
                  progress,
                  setCollapsibleElement,
                  range,
                  toggleState,
                }) => (
                  <div className="slide-toggle my-2">
                    <div className="slide-toggle__header">
                      <button className="slide-toggle__toggle" onClick={toggle}>
                        Education && Certifications
                      </button>
                      <ProgressBar progress={progress} />
                    </div>
                    <div
                      className="slide-toggle__box"
                      ref={setCollapsibleElement}
                    >
                      <div className="slide-toggle__box-inner">
                        <div className="container">
                          <div className="row">
                            <div className="container">
                            <h1>University</h1>
                                    <h2>Degree in Systems at <a href="http://exa.unne.edu.ar/carreras/lic_sistemas_informacion.php">FACENA UNNE</a> (Actual studying)</h2>
                                    <h3>2019 January - (NOW) </h3>
                                    <p>I am currently studying this career. I'm in the second year/level.</p>
                            </div>
                            <div className="container">
                            <h1>Certifications</h1>
                                    <h3 >(You can see them in my <a href="https://www.linkedin.com/in/emiliano-cassoni/" target="_blank" rel="noreferrer">LinkedIn</a>)</h3>
                                    <ul style={{ listStyleType: "none" }}>
                                        <li>
                                            Desarrollo Web con Angular 11+ (Udemy) (August 2021)
                                        </li>
                                        <li>
                                            GitHub para programadores (LinkedIn) (August 2021)
                                        </li>
                                        <li>
                                            React Native: Crea aplicaciones moviles reales IOS y Android(Udemy) (March 2020)
                                        </li>
                                        <li>
                                            HTML, CSS, & JavaScript - Certification course for Beginners (Udemy) (January 2021)
                                        </li>
                                        <li>
                                            Web Development MasterClass - Complete Certificate (Udemy) (January 2021)
                                        </li>
                                        <li>
                                            SQL: Creacion de Base de Datos  (Udemy) (December 2020)
                                        </li>
                                        <li>
                                            Adobe XD 2021 Ultimate Curse (LinkedIn) (March 2021)
                                        </li>
                                    </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
