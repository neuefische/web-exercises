import "./Badge.css";

export default function Badge({ children, active }) {
  return (
    <span className={`badge${active ? " badge--active" : ""}`}>{children}</span>
  );
}
