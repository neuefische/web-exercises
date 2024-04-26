import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>button 1</Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
      <Button>button 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
