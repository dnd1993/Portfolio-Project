import React from "react";

import "./Card.css";

const Card = ({ project }) => {
  const { about, background, name, alt, img } = project;

  return (
    <article className="project-card" style={{ background: `${background}` }}>
      <div className="card-front">
        <img src={img} alt={alt} />
        <h2>{name}</h2>
      </div>
      <div className="card-back">
        <p>{about}</p>
        <button>
          <a href="https://www.yandex.ru">Visit Website</a>
        </button>
      </div>
    </article>
  );
};

export default Card;
