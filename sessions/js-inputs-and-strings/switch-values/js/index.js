/*
Tasks:
1. Add a second input.
2. Add a third button for implementing a switch functionality in JS: When the button is clicked, the first input field should display the value of the second input field and the second should display the value of the first.
3. Adjust the event listener for your uppercase and lowercase buttons: Make sure that they also apply to your new second input as well.
*/

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener('click', () => {
	input.value = input.value.toUpperCase();
});

lowercaseButton.addEventListener('click', () => {
	input.value = input.value.toLowerCase();
});
