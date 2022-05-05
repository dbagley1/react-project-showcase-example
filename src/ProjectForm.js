import { useState } from "react";

export default function ProjectForm(props) {
  const { onSubmit } = props;
  const [nameInput, setNameInput] = useState("Example Project");
  const [aboutInput, setAboutInput] = useState("Lorem ipsum dolor...");
  const [phaseInput, setPhaseInput] = useState(1);
  const [imageInput, setImageInput] = useState("https://picsum.photos/400/300");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      image: imageInput,
      name: nameInput,
      about: aboutInput,
      phase: phaseInput
    });

    // Fetch new random image
    fetch("https://picsum.photos/400/300").then((res) =>
      setImageInput(res.url)
    );
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <img src={imageInput} alt={""} />
        <input
          type="text"
          id="image"
          name="image"
          value={imageInput}
          onChange={(e) => setImageInput(e.currentTarget.value)}
        />
        <input
          type="text"
          id="name"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.currentTarget.value)}
        />
        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={aboutInput}
          onChange={(e) => setAboutInput(e.currentTarget.value)}
        />
        <select
          value={phaseInput}
          onChange={(e) => setPhaseInput(+e.currentTarget.value)}
        >
          {Array(5)
            .fill(0)
            .map((_, i) => {
              return (
                <option key={i} value={i + 1}>
                  Phase {i + 1}
                </option>
              );
            })}
        </select>
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}
