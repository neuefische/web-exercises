console.clear();

const input = document.querySelector('[data-js="input"]');
const outputDisplay = document.querySelector('[data-js="outputDisplay"]');
const nextButton = document.querySelector('[data-js="nextButton"]');
const stepsCountDisplay = document.querySelector('[data-js="stepsCountDisplay"]');

/*
Implement the collatz algorithm which goes as follows:
- if the oldValue is even, divide it by two and return the outcome
- if the oldValue is odd, multiply it by 3 and add one, return the outcome
*/
function collatz(oldValue) {
	return null;
}

let currentValue = 0;
let steps = 0;

input.addEventListener('input', event => {
	currentValue = event.target.value || 0;
	steps = 0;
	updateDisplay();
});

nextButton.addEventListener('click', event => {
	event.preventDefault();
	currentValue = collatz(currentValue) || 0;
	steps++;
	updateDisplay();
});

function updateDisplay() {
	outputDisplay.textContent = currentValue;
	stepsCountDisplay.textContent = `Total steps: ${steps}`;
}
