import React from "react";
import "./formContact.css";

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="tittle">Let's talk</div>
          <div className="intro">
            Please if you want to contact me send me and email
          </div>
          <div className="name">Name</div>
          <div className="input-name">
            <input className="txt-name" id="txtName" placeholder="Name"></input>
          </div>
          <div className="email">Email</div>
          <div className="input-email">
            <input
              className="txt-input"
              id="txtEmail"
              placeholder="Email"
            ></input>
            <div className="text-Msg">
              <div className="Message"> Insert your Message</div>
              <textarea className="txt-Message" id="txtAreaMessage"></textarea>
            </div>
            <div>
              <div>
                <button>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
