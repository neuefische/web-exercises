/*
Exercise: Implement the calculator funtionality!

- [ ] All results should be stored in the element holding the result
- [ ] The add-button should add the two numbers written in the input fields.
- [ ] The subtract-button should subtract the two numbers written in the input fields.
- [ ] The multiply-button should multiply the two numbers written in the input fields.
- [ ] The divide-button should divide the two numbers written in the input fields.
- [ ] Make sure that dividing by 0 is not possible and the user gets informed (e.g. write warning into the page or console.log).
- [ ] The random-button should fill both input fields with a random value between 1 and 100
*/

const resultOutput = document.querySelector('[data-js="result"]');
const addButton = document.querySelector('[data-js="add-button"]');
const subtractButton = document.querySelector('[data-js="subtract-button"]');
const multiplyButton = document.querySelector('[data-js="multiply-button"]');
const divideButton = document.querySelector('[data-js="divide-button"]');
const randomButton = document.querySelector('[data-js="random-button"]');
const firstInput = document.querySelector('[data-js="input1"]');
const secondInput = document.querySelector('[data-js="input2"]');

