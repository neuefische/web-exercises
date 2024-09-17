import "./Tab.css";

export default function Tab({ children, isActive, onClick }) {
  return (
    <button
      className={`tab${isActive ? " tab--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
