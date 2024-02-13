/*
  Goal: When the button is clicked, the text in the input should be transformed to uppercase.
*/

const input = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener('click', () => {
  input.value = input.value.toUpperCase();
});
