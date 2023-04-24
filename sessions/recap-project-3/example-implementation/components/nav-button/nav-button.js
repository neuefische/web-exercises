export default function createNavButton(text, onClick) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}
