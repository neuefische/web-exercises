import React from "react";
import "./styles.css";

export default function App() {
  let code = "?";

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          🐡
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          🐋
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        >
          🐠
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
