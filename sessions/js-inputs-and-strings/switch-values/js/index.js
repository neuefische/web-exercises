console.clear();

const input = document.querySelector('[data-js="firstInput"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener('click', () => {
	input.value = input.value.toUpperCase();
});

lowercaseButton.addEventListener('click', () => {
	input.value = input.value.toLowerCase();
});

/*
Tasks:
1. Add a second input.
2. Add a third button.
3. In JS, add an event listener for your switch button. The button should switch the value between the two inputs.
4. Make sure that your upper and lower case button now  apply to your new second input as well.
*/
