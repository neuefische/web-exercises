const firstInput = document.querySelector('[data-js=first-input]');
const secondInput = document.querySelector('[data-js=second-input]');
const button = document.querySelector('[data-js=button]');

/* # Sub-Challenge 1
Implement the following functionality: The value of the first input field is copied into the second input field on button click */

// --v-- write your code here --v--

/* button.addEventListener('click', () => {
  secondInput.value = firstInput.value
}); */

// --^-- write your code here --^--

/* # Sub-Challenge 2: 
First: Comment out the Sub-Challenge 1 code to test this Sub-Challenge.

Implement the following functionality: The value of the first input field is copied in uppercase into the second input field on button click */

// --v-- write your code here --v--

/* button.addEventListener('click', () => {
  secondInput.value = firstInput.value.toUpperCase()
}); */

// --^-- write your code here --^--

/* # Sub-Challenge 3. 
First: Comment out the previous Sub-Challenges to test this Sub-Challenge.

Implement the following functionality: The values of the two input fields switch on button click */

// --v-- write your code here --v--

button.addEventListener('click', () => {
  const firstInputValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstInputValue;
});

// --^-- write your code here --^--
