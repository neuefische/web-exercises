import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <RestaurantOrder />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You have clicked this button {count} times
    </button>
  );
}

function RestaurantOrder() {
  const [meals, setMeals] = useState("");
  const [vegan, setVegan] = useState(true);

  return (
    <>
      <p>Your order: {meals}</p>
      <div>
        <button onClick={() => setMeals(meals + "🍔")}>🍔</button>
        <button onClick={() => setMeals(meals + "🍕")}>🍕</button>
        <button onClick={() => setMeals(meals + "🌮")}>🌮</button>
      </div>
      <button
        onClick={() => {
          setVegan(!vegan);
        }}
      >
        Make it vegan: {vegan ? "👍" : "👎"}
      </button>
    </>
  );
}
