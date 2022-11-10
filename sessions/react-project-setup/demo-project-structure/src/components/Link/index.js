import "./Link.css";

export default function Link({ href, children }) {
  return (
    <a href={href} className="Link">
      {children}
    </a>
  );
}
