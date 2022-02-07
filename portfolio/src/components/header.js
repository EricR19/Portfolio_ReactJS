import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="up-content">
        <div className="logo">
          {" "}
          LOGO
          <img className="img"></img>
        </div>
        <div className="projects">PROJECTS</div>
        <div className="contact">CONTACT</div>
      </div>
    </div>
  );
}

export default Header;
