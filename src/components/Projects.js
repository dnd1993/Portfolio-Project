import React from "react";

import "./Projects.css";
import Card from "./Card";

export const Projects = () => {
  return (
    <section className="section-projects">
      <h1>My Projects</h1>
      <p>Small projects I've developed myself or while taking courses</p>
      <div className="projects-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
