import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "counter dark" : "counter"}>
      <h2>You have clicked {count} times</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("Button clicked", count);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}