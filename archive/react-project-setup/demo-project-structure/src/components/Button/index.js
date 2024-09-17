import "./Button.css";

export default function Button({ href, children }) {
  return href ? (
    <a href={href} className="button">
      {children}{" "}
    </a>
  ) : (
    <button type="button" className="button">
      {children}
    </button>
  );
}
