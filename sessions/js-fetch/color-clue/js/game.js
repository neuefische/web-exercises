import { fetchNewColor } from "./fetch.js";
import {
  colorInput,
  form,
  submitButton,
  background,
  distanceDisplay,
  restartScreen,
  colorToGuess,
  colorDistance,
  rgbToHsl,
  restartButton,
  IDLE_BACKGROUND_COLOR,
} from "./utils.js";

let colorGuess = "#ffffff";

// update form when choosing a color
colorInput.addEventListener("input", (event) => {
  colorGuess = event.target.value;
  form.style.backgroundColor = colorGuess;
});

// Reveal the correct color
submitButton.addEventListener("click", () => {
  background.style.backgroundColor = colorToGuess.hexCode;
  background.style.color =
    rgbToHsl(colorToGuess.hexCode)[2] < 30
      ? "rgb(255 255 255 / 0.7)"
      : "rgb(0 0 0 / 0.7)";
  const distance = colorDistance(colorToGuess.hexCode, colorGuess);
  distanceDisplay.textContent = `
		You matched the color ${colorToGuess.name} with an accuracy of
		${Math.round(((distance[0] + distance[1] + distance[2]) / 3) * 100) / 100}%
  `;
  submitButton.classList.toggle("display--hidden");
  restartScreen.classList.toggle("display--hidden");
  background.classList.toggle("fast-transition");
});

restartButton.addEventListener("click", () => {
  fetchNewColor();
  colorGuess = "#ffffff";
  form.style.backgroundColor = colorGuess;
  colorInput.value = colorGuess;
  background.style.backgroundColor = IDLE_BACKGROUND_COLOR;
  background.style.color = "black";
  submitButton.classList.toggle("display--hidden");
  restartScreen.classList.toggle("display--hidden");
  background.classList.toggle("fast-transition");
});

fetchNewColor();
