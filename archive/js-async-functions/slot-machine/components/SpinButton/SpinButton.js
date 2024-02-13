export function SpinButton() {
  const spinButtonElement = document.createElement("button");
  spinButtonElement.type = "button";
  spinButtonElement.classList.add("spin-button");

  spinButtonElement.textContent = "SPIN";

  return spinButtonElement;
}
