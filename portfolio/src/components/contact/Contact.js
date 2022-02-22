import "../Base/base.css";
import Header from "../header/header";
import FormContact from "../formContact/FormContact";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <FormContact />
      </div>
    );
  }
}
export default App;
