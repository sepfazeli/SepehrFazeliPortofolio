import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  // Define GitHub links based on project names
  const githubLinks = {
    "react-native-vision-camera": "https://github.com/sepfazeli/react-native-vision-camera",
    "fingerspelling-ios": "https://github.com/sepfazeli/Fingerspelling-iOS",
    // Add more project names and corresponding GitHub links as needed
  };

  const githubLink = githubLinks[project.name];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={`${project.name} project`} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      )}
    </div>
  );
}

export default ProjectDisplay;
