import React from "react";
import "./styles.css";

export default function App() {
  return <Button color="red" disabled={false} text="Hello React" />;
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ color }} disabled={disabled}>
      {text}
    </button>
  );
}
