import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");
  console.log(code);
  const validCode = "🐡🐠🐋";

  function handleCode(emoji) {
    setCode(code + emoji);
  }

  function handleResetCode() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleCode("🐡")}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={() => handleCode("🐋")}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={() => handleCode("🐠")}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleResetCode}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
