import "./styles.css";

export default function App() {
  let count = 0;

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
