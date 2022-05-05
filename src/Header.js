export default function Header(props) {
  const { toggleDarkMode } = props;

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </header>
  );
}
