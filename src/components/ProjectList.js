import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(function(project) {
          return (
            <ProjectItem
              key={project.id} // Set key prop 
              title={project.title} // Pass title prop
              description={project.description} // Pass description prop
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
