export function Status() {
  const statusElement = document.createElement("div");
  statusElement.classList.add("status");

  statusElement.textContent = "Give it a spin! 🎰";

  function setSpinning() {
    statusElement.textContent = "Spinning... 🫣";
  }

  function setResult(points) {
    statusElement.textContent =
      points > 0 ? `You won ${points} points! 🥳` : "Try again! 🤞";
  }

  function setMachineChoked() {
    statusElement.textContent = "The machine choked and you lost 10 points! 😱";
  }

  statusElement.setSpinning = setSpinning;
  statusElement.setResult = setResult;
  statusElement.setMachineChoked = setMachineChoked;

  return statusElement;
}
