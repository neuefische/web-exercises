console.clear();

/*
EXERCISE 1
Use array destructuring to extract the variables `name`, `price`, and `quantity`.
Make sure to export your variable as shown in the example below to make the tests work.
*/

const item = ["Egg", 0.25, 12];

// Example: export const [ value1, value2 ] = array;

/*
EXERCISE 2
Use array destructuring to extract the variables `firstNameOfChris`, `lastNameOfChris` and `ageOfChris`.
*/

const personChris = [12, "Chris", "Owen"];

/*
EXERCISE 3
Use array destructuring to extract the variables `firstNameOfAlex` and `lastNameOfAlex`.
Ensure no unused variables remain.
*/

const personAlex = ["Alex", 12, "Main"];

/*
EXERCISE 4
Use array destructuring to extract the last name from the array
as variable called `lastName`.
*/

const students = ["Christina", "Jon", "Alexandare"];

/*
EXERCISE 5
Use array destructuring to extract all names from the nested array `nestedStudents`.
Assign each name to a variable called "student1" through "student5", in the given order.
*/

const nestedStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

/*
EXERCISE 6
Spread the values of the `values` array into the function call of the `add` function.
Keep in mind that you need to export the variable `result` to make the test work.
*/

const values = [1, 6, 7, 9, 12, 5, 4];

const result = add(1); // Spread values inside this function call

function add(...values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}
