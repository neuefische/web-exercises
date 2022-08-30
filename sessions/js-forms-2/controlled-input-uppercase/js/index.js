console.clear();

const input = document.querySelector('[data-js="firstValue"]');

let value = '';

input.addEventListener('change', event => {
  value = event.target.value;

  input.value = value.toUpperCase();
});
