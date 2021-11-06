import React from "react";
import "./Tech.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

function Technologies() {
  return (
    <>
      <div
        className="container-fluid pt-5 d-flex justify-content-center text-light"
        style={{ backgroundColor: "#001122" }}
      >
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-sm">
              <div className="container border pe-5 rounded">
                <div className="row  justify-content-center text-center ">
                  <div className="col-sm">
                    <div className="row justify-content-around ">
                      <div className="container">
                        <div className="row">
                          <div className="container py-3 ">
                            <div className="tech-title">
                              <h1>Technologies & Tools I work with</h1>
                            </div>

                            <div className="container py-5">
                              <div className="container">
                                <FontAwesomeIcon
                                  icon={["fab", "js"]}
                                  size="4x"
                                  data-tip
                                  data-for="happyFace"
                                  className="mx-3 iconBg "
                                />
                                <ReactTooltip id="happyFace" type="light">
                                  <span>JavaScript</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "react"]}
                                  size="4x"
                                  data-tip
                                  className="mx-3 iconBg "
                                  data-for="react"
                                />{" "}
                                <ReactTooltip id="react" type="light">
                                  <span>React JS</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "html5"]}
                                  size="4x"
                                  data-tip
                                  className="mx-3 iconBg "
                                  data-for="HTML"
                                />{" "}
                                <ReactTooltip id="HTML" type="light">
                                  <span>HTML</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "css3-alt"]}
                                  size="4x"
                                  data-tip
                                  data-for="CSS3"
                                  className="mx-3 iconBg "
                                />{" "}
                                <ReactTooltip id="CSS3" type="light">
                                  <span>CSS3</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "php"]}
                                  size="4x"
                                  className="mx-3 iconBg "
                                  data-tip
                                  data-for="PHP"
                                />{" "}
                                <ReactTooltip id="PHP" type="light">
                                  <span>PHP</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "git-alt"]}
                                  size="4x"
                                  data-tip
                                  data-for="GIT"
                                  className="mx-3 iconBg "
                                />{" "}
                                <ReactTooltip id="GIT" type="light">
                                  <span>GIT</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "bootstrap"]}
                                  size="4x"
                                  data-tip
                                  data-for="bootstrap"
                                  className="mx-3 iconBg"
                                />
                                <ReactTooltip id="bootstrap" type="light">
                                  <span>BOOTSTRAP</span>
                                </ReactTooltip>
                              </div>
                              <div className="container my-4">
                                <FontAwesomeIcon
                                  icon={["fab", "sass"]}
                                  size="4x"
                                  data-tip
                                  data-for="sass"
                                  className="mx-3 iconBg"
                                />
                                <ReactTooltip id="sass" type="light">
                                  <span>SASS</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "font-awesome-alt"]}
                                  size="4x"
                                  data-tip
                                  data-for="font-awesome"
                                  className="mx-3 iconBg"
                                />
                                <ReactTooltip id="font-awesome" type="light">
                                  <span>FONT-AWESOME</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "npm"]}
                                  size="4x"
                                  data-tip
                                  data-for="npm"
                                  className="mx-3 iconBg"
                                />
                                <ReactTooltip id="npm" type="light">
                                  <span>NPM</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fab", "yarn"]}
                                  size="4x"
                                  data-tip
                                  data-for="yarn"
                                  className="mx-3 iconBg"
                                />
                                <ReactTooltip id="yarn" type="light">
                                  <span>YARN</span>
                                </ReactTooltip>
                                <FontAwesomeIcon
                                  icon={["fas", "chart-pie"]}
                                  size="4x"
                                  data-tip
                                  data-for="scrum"
                                  className="mx-3 iconBg"
                                />
                                <ReactTooltip id="scrum" type="light">
                                  <span>SCRUM</span>
                                </ReactTooltip>
                              </div>
                              <FontAwesomeIcon
                                icon={["fab", "angular"]}
                                size="4x"
                                data-tip
                                data-for="angular"
                                className="mx-3 iconBg"
                              />
                              <ReactTooltip id="angular" type="light">
                                <span>ANGULAR</span>
                              </ReactTooltip>
                              <FontAwesomeIcon
                                icon={["fab", "java"]}
                                size="4x"
                                data-tip
                                data-for="java"
                                className="mx-3 iconBg"
                              />
                              <ReactTooltip id="java" type="light">
                                <span>JAVA</span>
                              </ReactTooltip>
                              <FontAwesomeIcon
                                icon={["fab", "node"]}
                                size="4x"
                                data-tip
                                data-for="node"
                                className="mx-3"
                              />
                              <ReactTooltip id="node" type="light">
                                <span>NODEJS</span>
                              </ReactTooltip>
                              <FontAwesomeIcon
                                icon={["fab", "js"]}
                                size="4x"
                                data-tip
                                data-for="sql"
                                className="mx-3 iconBg"
                              />
                              <ReactTooltip id="sql" type="light">
                                <span>MYSQL</span>
                              </ReactTooltip>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 my-5 tech text-center">
              <h5>
                These are the languages ​​in which I stand out the most and have{" "}
                <br />
                <br />
                knowledge. To see more I invite you to visit my GitHub 👇.
                <br />
                <br />
                
              </h5>
              <a
                href="https://github.com/emicasso"                
                rel="noreferrer"
              >
                <Button variant="outline-light">GitHub</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
