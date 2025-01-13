import React from "react";

import Header from "components/Header";
import ProjectCard from "components/ProjectCard";

import "./styles.css";
import projects from "utils/projects";
import { DownArrow } from "assets";

const Projects = () => (
  <div className="projects-main-container">
    <Header selected="projects" />
    <h1 className="projects-title">PROJECTS</h1>
    <div className="projects-container">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.key} />
      ))}
    </div>
    <div className="projects-down-arrow-container">
      <img
        className="projects-down-arrow"
        src={DownArrow}
        alt="go down arrow"
      />
    </div>
  </div>
);

export default Projects;
