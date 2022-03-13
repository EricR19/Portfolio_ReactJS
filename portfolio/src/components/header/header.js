import React from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Forms } from "../FormContact/formContact";
import { cont } from "../Container/Container";
import { Project } from "../Projects/projects";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="up-content">
            <div className="logo">
              <Link className="logo" to="/">
                LOGO
              </Link>
              <img className="img"></img>
            </div>
            <div className="projects">
              <Link className="projects" to="/projects">
                Projects
              </Link>
            </div>
            <div className="contact">
              <Link className="contact" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
function Home() {
  return cont;
}

function Contact() {
  return Forms;
}
function Projects() {
  return Project();
}
export default Header;
