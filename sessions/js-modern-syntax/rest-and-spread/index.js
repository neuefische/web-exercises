console.clear();

// EXERCISE 1
// a) Destructure the "person" object, extract the variables "age" and "contact".
// b) Use the rest parameter to collect the values of "name", "email", and "phone"
// and put them into "contact".
// c) Make sure to export your variable as in the example below to make the tests work.

const person = {
  name: "Jane Doe",
  age: 32,
  email: "jane@doe.com",
  phone: "12345",
};

// example: export const {value 1} = myObject;

// EXERCISE 2
// Use array destructuring to extract the variables "first" and "second";
// all other items should go into a variable called "restOfList".

const list = ["one", "two", "three", "four", "five"];

// EXERCISE 3
// a) The `add` function does not work because it needs an array as argument.
// b) Use the rest syntax with the `allNumbers` parameter to fix it.
// c) Make sure you understand what the rest syntax does here.
// d) Note that the optional chaining `?.` is used to prevent an error to happen.

function add(allNumbers) {
  return allNumbers.reduce?.((a, b) => a + b);
}

export const sum = add(3, 2, 3, 2, 1, 2, 3, 4);

// EXERCISE 4
// a) Below, the `add` function is called with an array as argument.
// b) Use the spread syntax with the `numbers` argument to fix this.
// c) Make sure you understand what the spread syntax does here.

const numbers = [3, 2, 1];
export const result = add(numbers);

// EXERCISE 5
// a) Create a variable `allFruits` which contains `anotherFruit` and `fruits`
// as a plain array (and in this order).
// b) Use the spread syntax to achieve this.
// c) Remember to export `allFruits`.

const fruits = ["apple", "banana", "orange", "papaya"];
const anotherFruit = "cherry";
