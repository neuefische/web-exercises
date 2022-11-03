import { Wheel } from "./components/Wheel/Wheel.js";
import { SpinButton } from "./components/SpinButton/SpinButton.js";
import { Machine } from "./components/Machine/Machine.js";
import { Result } from "./components/Result/Result.js";

console.clear();

const root = document.body;

// Assemble the machine… (nothing to change here)
const machine = Machine();
const wheel1 = Wheel();
const wheel2 = Wheel();
const wheel3 = Wheel();
machine.append(wheel1, wheel2, wheel3);
const spinButton = SpinButton();
const result = Result();
root.append(machine, spinButton, result);

// Spin the machine on button click…
// This time the function is already defined as an async function. 🫡
//                                      ↙️
spinButton.addEventListener("click", async () => {
  spinButton.disabled = true;
  /**
   * Hint 1:
   * The wheel elements have a spin method that returns a promise.
   * That promise resolves with the symbol that the wheel stopped on.
   * You can call it like this: `wheel1.spin()`, `wheel2.spin()` and
   * `wheel3.spin()`.
   *
   * Hint 2:
   * You can use Promise.all to wait for all promises to resolve.
   *
   * Hint 3:
   * `utils/symbols.js` exports a `getMaxCount` function that returns the
   * maximum number of times any symbol appears in an array of symbols.
   * e.g. `['🍉', '🍉', '🍇']` => 2
   *
   * Hint 4:
   * Three identical symbols are worth 100 points.
   * Two identical symbols are worth 10 points.
   * Every other combination is worth 0 points.
   *
   * Hint 5:
   * You can use `result.setResult(newPoints)` to update the result display
   * and keep track of the score.
   *
   * Hint 6:
   * You can use `result.setSpinning()` before calling the spin methods to
   * show the spinning text.
   *
   * Hint 7:
   * On occasion, the spin function will throw an error. You can use a
   * try/catch block for the whole event handler function body to handle
   * the error.
   * Use `result.setMachineChoked()` inside the catch block to let the user
   * know what happend and to subtract some points from the score.
   *
   * Hint 8:
   * Be careful where you put the `spinButton.disabled = false` statement
   * and make sure it is always executed after the wheels have stopped,
   * even if an error was thrown.
   */

  spinButton.disabled = false;
});

/**
 * Bonus hint:
 * You can change the symbols that appear on the wheels by changing the
 * `baseSymbols` array in `utils/symbols.js`. Have fun!
 */
