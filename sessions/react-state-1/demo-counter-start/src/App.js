import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  return (
    <div className="counter">
      <p>You have clicked 0 times</p>
      <button>Click me</button>
    </div>
  );
}
