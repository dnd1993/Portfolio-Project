import React from "react";

import "./Projects.css";
import projects from "../projectsData";
import Card from "./Card";

export const Projects = () => {
  return (
    <section className="section-projects">
      <h1>My Projects</h1>
      <p>
        Small projects I've developed based on my ideas or courses I've taken.
        Currently working on a large-scale project.
      </p>
      <div className="projects-container">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
