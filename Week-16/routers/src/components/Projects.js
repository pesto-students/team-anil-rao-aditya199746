import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectData";

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projectsData.map((project, index) => (
          <li key={index}>
            <Link to={`/projects/${project.id}`}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
