console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

let value = '';

input.addEventListener('input', event => {
  value = event.target.value;

  input.value = value.toUpperCase();
});
