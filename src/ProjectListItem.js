import { useState } from "react";

export default function ProjectListItem(props) {
  const { project } = props;
  const { image, name, about, link, phase } = project;
  const [claps, setClaps] = useState(0);

  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={() => setClaps(claps + 1)}>
          Clap ({claps})
        </button>
      </div>
      <div className="details">
        <h4>{name}</h4>
        {about && <p>{about}</p>}
        {link && (
          <p>
            {" "}
            <a href={link}>Link</a>{" "}
          </p>
        )}
      </div>
      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}
