import "./App.css";
import Header from "../src/components/Header/header";
import Container from "./components/container/Container";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <Container />
      </div>
    );
  }
}
export default App;
