console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener('click', () => {
  input.value = input.value.toUpperCase();
});

lowercaseButton.addEventListener('click', () => {
  input.value = input.value.toLowerCase();
});
