import { shuffleArray } from "../../utils/shuffle.js";
import { baseSymbols } from "../../utils/symbols.js";

export function Wheel() {
  const wheelElement = document.createElement("div");
  wheelElement.classList.add("wheel");

  const symbolElement = document.createElement("div");
  symbolElement.classList.add("symbol");
  wheelElement.append(symbolElement);

  const symbols = shuffleArray(baseSymbols);
  let symbolIndex = Math.floor(Math.random() * symbols.length);
  let turns = 0;

  symbolElement.textContent = symbols[symbolIndex];

  function maybeChoke() {
    if (Math.random() <= turns / 6000) {
      symbolElement.textContent = "💥";
      throw new Error("Choked");
    }
  }

  function turnToNextSymbol() {
    return new Promise((resolve) => {
      setTimeout(() => {
        symbolIndex = (symbolIndex + 1) % symbols.length;
        turns++;
        resolve();
      }, Math.min(50 + turns ** 1.5, 500));
    });
  }

  async function spin() {
    const targetIndex = Math.floor(Math.random() * symbols.length);

    while (symbolIndex !== targetIndex || turns < Math.random() * 20 + 15) {
      maybeChoke();
      await turnToNextSymbol();
      symbolElement.textContent = symbols[symbolIndex];
    }

    // Reset counter vars
    symbolIndex = Math.floor(Math.random() * symbols.length);
    turns = 0;

    return symbols[targetIndex];
  }

  wheelElement.spin = spin;

  return wheelElement;
}
