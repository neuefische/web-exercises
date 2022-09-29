console.clear();

// EXERCISE 1
// Destructure the "person" object; extract the variables "age" and "contact".
// Use the rest parameter to collect the values of "name", "email", and "phone"
// and put them into "contact".

const person = {
	name: 'Jane Doe',
	age: 32,
	email: 'jane@doe.com',
	phone: '12345',
};

// EXERCISE 2
// Use array destructuring to extract the variables "first" and "second";
// all other items should go into a variable called "restOfList".

const list = ['one', 'two', 'three', 'four', 'five'];

// EXERCISE 3
// The `add` function does not work because it needs an array as argument.
// Use the rest parameter with the `allNumbers` argument to fix it.
// Make sure you understand what the rest parameter does here.

function add(allNumbers) {
	return allNumbers.reduce((a, b) => a + b);
}

const sum = add(3, 2, 3, 2, 1, 2, 3, 4);

// EXERCISE 4
// Below, the `add` function is called with an array as argument.
// Use the spread syntax with the `numbers` argument to fix this.
// Make sure you understand what the spread syntax does here.

const numbers = [3, 2, 1];
const result = add(numbers);

// EXERCISE 5
// Create a variable `allFruits` which contains `anotherFruit` and `fruits` as a plain array.
// Use the spread syntax to achieve this.

const fruits = ['apple', 'banana', 'orange', 'papaya'];
const anotherFruit = 'cherry';
const allFruits = [anotherFruit, ...fruits];

export {age, contact, first, second, restOfList, sum, result, allFruits};
