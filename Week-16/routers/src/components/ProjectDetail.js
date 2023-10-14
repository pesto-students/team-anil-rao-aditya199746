import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectData";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* <img src={project.image} alt={project.title} /> */}
    </div>
  );
}

export default ProjectDetail;
