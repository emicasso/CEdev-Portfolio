import React from "react";
import "./404.css";
import emoji from "../../media/emoji.png";

function PageNotFount() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div
          className="notfound-404"
          style={{
            backgroundImage: `url(${emoji})`,
            backgroundSize: "cover",
            position: "absolute",
            left: '0',
            top: '0',
            display: "inline-block",
            width: "140px",
            height: "140px",
          }}
        ></div>
        <h1>404</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <a href="/">Back to homepage</a>
      </div>
    </div>
  );
}

export default PageNotFount;
