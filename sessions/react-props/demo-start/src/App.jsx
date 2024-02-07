import "./App.css";

export default function App() {
  return (
    <div>
      <Pet />
      <Pet />
      <Pet />
    </div>
  );
}

function Pet() {
  return (
    <div>
      Meow{" "}
      <span role="img" aria-label="A cat">
        🐈
      </span>
    </div>
  );
}
