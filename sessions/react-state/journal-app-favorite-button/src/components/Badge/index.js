import "./Badge.css";

function Badge({ children, active }) {
  return (
    <span className={`badge${active ? " badge--active" : ""}`}>{children}</span>
  );
}

export default Badge;
