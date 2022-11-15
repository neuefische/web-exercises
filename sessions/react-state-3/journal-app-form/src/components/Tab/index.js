import "./Tab.css";

function Tab({ children, active }) {
  return (
    <button className={`tab${active ? " tab--active" : ""}`}>{children}</button>
  );
}

export default Tab;
