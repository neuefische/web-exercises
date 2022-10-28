import { launch } from "./core/protocol.js";
import * as launchSequence from "./launchSequence.js";

const launchSequenceFunction = launchSequence?.default;

export function initialize() {
  const launchButton = document.querySelector('[data-js="launch"]');
  launchButton.addEventListener("click", () => {
    launch(launchSequenceFunction);
  });
}
