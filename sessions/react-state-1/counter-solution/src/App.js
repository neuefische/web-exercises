import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={decrementCount}>
          -
        </button>
        <button type="button" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
}
