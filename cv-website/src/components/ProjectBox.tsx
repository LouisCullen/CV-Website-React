import React from "react";
import { projectInterface } from "./Projects";

interface props {
  project: projectInterface;
  position: "0" | "-100cqw" | "100cqw";
}

const ProjectBox = ({ project, position }: props) => {
  return (
    <div
      className="projectBox"
      style={{
        left: position,
        opacity: position === "0" ? 1 : 0,
      }}
    >
      <div className="projectBoxContent">
        <h2>{project.name}</h2>
        <h3>{project.summary}</h3>
        {project.description}
      </div>
    </div>
  );
};

export default ProjectBox;
