import "./Badge.css";

export default function Badge({ children, isActive }) {
  return (
    <span className={`badge${isActive ? " badge--active" : ""}`}>
      {children}
    </span>
  );
}
