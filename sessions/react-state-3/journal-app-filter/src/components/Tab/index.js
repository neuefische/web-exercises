import "./Tab.css";

export default function Tab({ children, isActive }) {
  return (
    <button className={`tab${isActive ? " tab--active" : ""}`}>
      {children}
    </button>
  );
}
