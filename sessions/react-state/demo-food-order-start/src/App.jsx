import "./App.css";

export default function App() {
  return (
    <>
      <h1>Place your order</h1>
      <FoodOrder />
    </>
  );
}

function FoodOrder() {
  const food = "?";
  const vegan = true;

  return (
    <>
      <div>
        <button onClick={() => {}}>
          <span role="img" aria-label="A hamburger">
            🍔
          </span>
        </button>
        <button onClick={() => {}}>
          <span role="img" aria-label="A pizza">
            🍕
          </span>
        </button>
        <button onClick={() => {}}>
          <span role="img" aria-label="A taco">
            🌮
          </span>
        </button>
      </div>
      <p>Selected food: {food}</p>
      <button onClick={() => {}}>
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
