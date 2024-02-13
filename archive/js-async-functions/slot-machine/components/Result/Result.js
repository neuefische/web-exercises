import { Status } from "../Status/Status.js";
import { Score } from "../Score/Score.js";

export function Result() {
  const resultElement = document.createElement("div");
  resultElement.classList.add("result");

  const status = Status();
  const score = Score();

  resultElement.append(status, score);

  function setSpinning() {
    status.setSpinning();
  }

  function setResult(points) {
    status.setResult(points);
    score.addPoints(points);
  }

  function setMachineChoked() {
    status.setMachineChoked();
    score.addPoints(-10);
  }

  resultElement.setSpinning = setSpinning;
  resultElement.setResult = setResult;
  resultElement.setMachineChoked = setMachineChoked;

  return resultElement;
}
