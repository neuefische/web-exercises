import ColoredNumber from "./ColoredNumber";
import "./Counter.css";


export default function Counter() {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={0} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
