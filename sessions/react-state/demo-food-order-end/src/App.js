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
  const [food, setFood] = useState("?");
  const [vegan, setVegan] = useState(true);

  return (
    <>
      <div>
        <button
          onClick={() =>
            setFood(
              <span role="img" aria-label="A hamburger">
                🍔
              </span>
            )
          }
        >
          <span role="img" aria-label="A hamburger">
            🍔
          </span>
        </button>
        <button
          onClick={() =>
            setFood(
              <span role="img" aria-label="A pizza">
                🍕
              </span>
            )
          }
        >
          <span role="img" aria-label="A pizza">
            🍕
          </span>
        </button>
        <button
          onClick={() =>
            setFood(
              <span role="img" aria-label="A taco">
                🌮
              </span>
            )
          }
        >
          <span role="img" aria-label="A taco">
            🌮
          </span>
        </button>
      </div>

      <p>Selected food: {food}</p>
      <button onClick={() => setVegan(!vegan)}>
        Make it vegan:{" "}
        {vegan ? (
          <span role="img" aria-label="Thumbs up">
            👍
          </span>
        ) : (
          <span role="img" aria-label="Thumbs down">
            👎
          </span>
        )}
      </button>
    </>
  );
}
