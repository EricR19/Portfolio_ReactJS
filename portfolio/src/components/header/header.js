import React from "react";
import "./header.css";

const namesHeader = ["projects", "contact"];
const listElements = namesHeader.map((names) => (
  <div onClick={() => activeClass(names)} className={names} key={names}>
    {names}
  </div>
));
class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="up-content">
          <div className="logo">
            {" "}
            LOGO
            <img className="img"></img>
          </div>
          {listElements}
        </div>
      </div>
    );
  }
}
function activeClass(className) {
  if ((className = "projects")) {
    callProject();
  }
  if ((className = "contact")) {
    callContact();
  }
}
function callProject() {
  alert("This project page is under contruction!");
}
function callContact() {
  alert("This Contact page is under contruction!");
}

export default Header;
