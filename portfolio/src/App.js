import "./App.css";
import Header from "../src/components/Header/header";
import Container from "./components/Container/Container";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Header />
      </div>
    );
  }
}
export default App;
