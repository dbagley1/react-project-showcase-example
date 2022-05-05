import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList(props) {
  const { projects } = props;
  const [phase, setPhase] = useState("all");
  const selectedProjects = projects.filter(
    (project) => phase === "all" || project.phase === phase
  );

  return (
    <section>
      <h2>Projects</h2>
      <div className="filter">
        <button
          onClick={() => setPhase("all")}
          className={`${phase === "all" ? "selected" : ""}`}
        >
          All
        </button>
        {Array(5)
          .fill(0)
          .map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setPhase(i + 1)}
                className={`${phase === i + 1 ? "selected" : ""}`}
              >
                Phase {i + 1} (
                {projects.filter((proj) => proj.phase === i + 1).length})
              </button>
            );
          })}
      </div>
      <input type="text" placeholder="Search..." />
      <ul className="cards">
        {selectedProjects.map((project) => {
          return <ProjectListItem project={project} key={project.id} />;
        })}
      </ul>
    </section>
  );
}
