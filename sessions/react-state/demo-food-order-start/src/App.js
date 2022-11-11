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
  const food = "❓";
  const vegan = true;

  return (
    <>
      <div>
        <button onClick={() => {}}>🍔</button>
        <button onClick={() => {}}>🍕</button>
        <button onClick={() => {}}>🌮</button>
      </div>
      <p>Selected food: {food}</p>
      <button onClick={() => {}}>Make it vegan: {vegan ? "👍" : "👎"}</button>
    </>
  );
}
