import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Place your order</h1>
      <FoodOrder />
    </>
  );
}

function FoodOrder() {
  const [food, setFood] = useState("❓");
  const [vegan, setVegan] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setFood("🍔")}>🍔</button>
        <button onClick={() => setFood("🍕")}>🍕</button>
        <button onClick={() => setFood("🌮")}>🌮</button>
      </div>
      <p>Selected food: {food}</p>
      <button onClick={() => setVegan(!vegan)}>
        Make it vegan: {vegan ? "👍" : "👎"}
      </button>
    </>
  );
}
