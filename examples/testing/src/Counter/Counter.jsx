import { useState } from "react";

export default function Counter({ value = 0 }) {
  const [count, setCount] = useState(value);

  function onIncrement() {
    setCount((prev) => prev + 1);
  }

  function onDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="counter">
      <span id="count-label">Count</span>
      <strong aria-labelledby="count-label" className="value">
        {count}
      </strong>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}
