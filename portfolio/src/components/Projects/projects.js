import React, { useState } from "react";
import "./projects.css";
import img1 from "../Resources/web.png";
import img2 from "../Resources/codigo.jpg";
import img3 from "../Resources/projectImg.png";
import img4 from "../Resources/services.png";

const data = [img1, img2, img3, img4];
export function Project() {
  const [count, setToggle] = useState(0);
  const validacion = () => {
    if (count < 3) {
      setToggle(count + 1);
    } else {
      return setToggle(0);
    }
  };
  return (
    <div className="big-box">
      <div className="main-box">
        <div className="child-box">
          <div className="card">
            <img src={data[count]}></img>
          </div>
        </div>
        <div className="button">
          <button onClick={() => validacion()}>Change project</button>
        </div>
      </div>
    </div>
  );
}
