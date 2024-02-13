const bodyElement = document.querySelector('[data-js="body"]');

const lightMode = document.querySelector('[data-js="light-mode-button"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');

const toggleMode = document.querySelector('[data-js="toggle-button"]');

lightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

darkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
