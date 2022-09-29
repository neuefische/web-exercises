console.clear();

// EXERCISE 1
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.

const item = ['Egg', 0.25, 12];

const name = 'Destructure the array item';
const price = 'Destructure the array item';
const quantity = 'Destructure the array item';

// EXERCISE 2
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.

const personChris = [12, 'Chris', 'Owen'];

const firstNameOfChris = 'Destructure the array personChris';
const lastNameOfChris = 'Destructure the array personChris';
const ageOfChris = 'Destructure the array personChris';

// EXERCISE 3
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// Make sure not to have unused variables.

const personAlex = ['Alex', 12, 'Main'];

const firstNameOfAlex = 'Destructure the array personAlex';
const lastNameOfAlex = 'Destructure the array personAlex';

// EXERCISE 4
// Use Array Destructuring to get the last name from the array.

const students = ['Christina', 'Jon', 'Alexandare'];

const lastName = 'Destructure the array students';

// EXERCISE 5
// Use Array Destructuring to get all of the names from this nested array.

const nestedStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

const student1 = 'Destructure the array nestedStudents';
const student2 = 'Destructure the array nestedStudents';
const student3 = 'Destructure the array nestedStudents';
const student4 = 'Destructure the array nestedStudents';
const student5 = 'Destructure the array nestedStudents';

// EXERCISE 6
// Spread the values of the values array in to the function call of the add function.

const values = [1, 6, 7, 9, 12, 5, 4];

const result = add(1); // Spread values inside this function call

function add(...values) {
	return values.reduce((previousValue, currentValue) => previousValue + currentValue);
}

export {
	name,
	price,
	quantity,
	firstNameOfChris,
	lastNameOfChris,
	ageOfChris,
	firstNameOfAlex,
	lastNameOfAlex,
	lastName,
	student1,
	student2,
	student3,
	student4,
	student5,
	result,
};
