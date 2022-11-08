import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button />
      <Button />
      <Button />
      <Button />
    </main>
  );
}

function Button() {
  return (
    <button className="button" type="button">
      Click me!
    </button>
  );
}
