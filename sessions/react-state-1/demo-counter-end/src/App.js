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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleIncreaseCount() {
    setCount(count + 1);
    console.log("Button clicked", count);
  }
  function handleToggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <div className={isDarkTheme ? "counter dark" : "counter"}>
      <p>You have clicked {count} times</p>
      <button onClick={handleIncreaseCount}>Click me</button>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
}
