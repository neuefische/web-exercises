console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
