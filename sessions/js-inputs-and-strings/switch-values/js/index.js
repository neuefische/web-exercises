/*

Switching th input value from first and second fields when clicking the button

- [ ] Add a second input element to the index.html 
- [ ] Declare a variable and assign the second input element
- [ ] Add a third button element to the index.html 
- [ ] Declare a variable and assign the third button element (the switch button)
- [ ] Implementing a switch functionality: When the switch button is clicked, the first input field display the value of the second input field and the second display the value of the first
- [ ] Add an event listener and convert to the uppercase and lowercase buttons: Make sure that they also apply to the new second input value as well

Hint: the HTML entity for the switch buttton is: &updownarrow 

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener('click', () => {
	input.value = input.value.toUpperCase();
});

lowercaseButton.addEventListener('click', () => {
	input.value = input.value.toLowerCase();
});
