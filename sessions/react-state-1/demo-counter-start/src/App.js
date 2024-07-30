import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  return (
    <div className="counter">
      <h2>You have clicked 0 times</h2>
      <button
      >
        Click me
      </button>
    </div>
  );
}
