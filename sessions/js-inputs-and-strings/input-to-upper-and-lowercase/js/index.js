console.clear();

/*

Adding a second button to convert the input value to lowercase

– [ ] Declare a variable and assign the second button element
– [ ] Add an event listener to the second button and convert the input value to lowercase by using a string method

Hint: Accessing the value by using `.value` on the input element

*/


const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener('click', () => {
	input.value = input.value.toUpperCase();
});
