import "./App.css";

import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <>
      <header className="header">
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <nav>
          <a className="navigation__link" href="#home">
            Home
          </a>
          <a className="navigation__link" href="#about">
            About
          </a>
          <a className="navigation__link" href="#impressum">
            Impressum
          </a>
        </nav>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </header>
      <main>content goes here…</main>
    </>
  );
}
