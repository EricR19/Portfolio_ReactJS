import React, { useState } from "react";
import "./projects.css";

export function Project() {
  const [contador, setContador] = useState(0);
  return (
    <div className="main-box">
      <div className="child-box">
        <div className="card"> Projects images {contador} </div>
        <div className="button">
          <button onClick={() => setContador(contador + 1)}>
            Change project
          </button>
        </div>
      </div>
    </div>
  );
}
