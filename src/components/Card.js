import React from "react";
import doughnut from "../img/doughnut.png";

import "./Card.css";

const Card = () => {
  return (
    <article className="project-card">
      <div className="card-front">
        <img src={doughnut} alt="Doughnut Logo" />
        <h2>Filter Project</h2>
      </div>
      <div className="card-back">
        <p>Project description</p>
        <button>Visit Website</button>
      </div>
    </article>
  );
};

export default Card;
