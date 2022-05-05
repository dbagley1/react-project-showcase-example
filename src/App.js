import "./styles.css";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import projectData from "./projectData";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const [projects, setProjects] = useState(projectData);

  function onFormSubmit(newProject) {
    newProject.id = Date.now();
    console.log(newProject);
    setProjects((projects) => [...projects, newProject]);
  }

  return (
    <div className={`App ${!darkMode && "light"}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <ProjectForm onSubmit={onFormSubmit} />
      <ProjectList projects={projects} />
    </div>
  );
}
