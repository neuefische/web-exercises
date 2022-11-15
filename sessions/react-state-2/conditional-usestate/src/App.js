import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  if (!showMessage) {
    return (
      <div className="container">
        <h1>Message is hidden 😱</h1>
        <button type="button" className="button" onClick={() => setShowMessage(true)}>
          Show Message
        </button>
      </div>
    );
  }
  const [message, setMessage] = useState("Secret message incoming...");

  return (
    <div className="container">
      <button className="button" onClick={() => setShowMessage(false)}>
        Hide Message
      </button>
      <h2>{message}</h2>
      <button className="button" onClick={() => setMessage("Hello, world!")}>
        Set Message to &quot;Hello, world!&quot;
      </button>
    </div>
  );
}
