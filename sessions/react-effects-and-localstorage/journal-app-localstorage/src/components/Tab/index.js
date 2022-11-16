import "./Tab.css";

function Tab({ children, active, onClick }) {
  return (
    <button className={`tab${active ? " tab--active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Tab;
