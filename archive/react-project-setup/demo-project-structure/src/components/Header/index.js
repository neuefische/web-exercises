import Link from "../Link";
import "./Header.css";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <img src={logo} className="header__logo" alt="logo" />
        <nav className="header__navigation">
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
