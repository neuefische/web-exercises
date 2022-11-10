import Link from "../Link";
import "./Header.css";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__inner">
        <img src={logo} className="Header__logo" alt="logo" />
        <nav className="Header__navigation">
          <Link href="#">Home</Link>
          <Link href="https://beta.reactjs.org/" target="_blank">
            Docs
          </Link>
          <Link href="https://reactjs.org/">About</Link>
        </nav>
      </div>
    </header>
  );
}
