import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";

function Navbar() {
  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" className="menu-icon">
        <FontAwesomeIcon icon={faBars}  />
      </label>

      <div className="slideout-sidebar">
        <ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
