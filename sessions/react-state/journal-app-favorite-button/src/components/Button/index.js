import "./Button.css";

export default function Button({ href, children }) {
  return href ? (
    <a href={href} className="Button">
      {children}{" "}
    </a>
  ) : (
    <button type="button" className="Button">
      {children}
    </button>
  );
}
