import "./Tab.css";

export default function Tab({ children, active, onClick }) {
  return (
    <button className={`tab${active ? " tab--active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}
