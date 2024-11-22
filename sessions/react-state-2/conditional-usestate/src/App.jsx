import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <div className="container">
        <h1>
          Message is hidden{" "}
          <span role="img" aria-label="scream">
            😱
          </span>
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </button>
      </div>
    );
  }

  const [message, setMessage] = useState("Secret message incoming...");

  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => setShowMessage(false)}
      >
        Hide Message
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          setMessage("The secret of Monkey Island is ... wait, no spoilers!")
        }
      >
        Now really show the message!
      </button>
      <h2>{message}</h2>
    </div>
  );
}
