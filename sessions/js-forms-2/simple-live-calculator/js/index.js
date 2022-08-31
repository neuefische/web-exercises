console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

let firstValue = 0;
let secondValue = 0;

firstInput.addEventListener('input', event => {
  firstValue = event.target.value;
  calculateResult();
});

secondInput.addEventListener('input', event => {
  secondValue = event.target.value;
  calculateResult();
});

function calculateResult() {
  result.textContent = 'Result: ' + firstValue * secondValue;
}
