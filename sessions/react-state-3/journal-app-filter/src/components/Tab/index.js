import "./Tab.css";

export default function Tab({ children, active }) {
  return (
    <button className={`tab${active ? " tab--active" : ""}`}>{children}</button>
  );
}
