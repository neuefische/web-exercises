// Query the main element and log it to the console
const mainElement = document.querySelector('[data-js="main"]');

console.log(mainElement);

// Change styling via classList
mainElement.classList.add("dark");
mainElement.classList.remove("dark");

// addEventListener
const myLoggingButton = document.querySelector('[data-js="logging-button"]');

myLoggingButton.addEventListener("click", () => {
  console.log("You clicked a button");
});

// change color on button click

const addColorButton = document.querySelector('[data-js="add-button"]');
const removeColorButton = document.querySelector('[data-js="remove-button"]');
const toggleColorButton = document.querySelector('[data-js="toggle-button"]');

addColorButton.addEventListener("click", () => {
  mainElement.classList.add("dark");
});

removeColorButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
