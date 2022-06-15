console.clear();

/*
Exercise: add a second button, that changes the input to lowercase
*/

const input = document.querySelector('[data-js="firstInput"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener('click', () => {
	input.value = input.value.toUpperCase();
});
