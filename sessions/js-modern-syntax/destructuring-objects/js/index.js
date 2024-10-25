console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

// example: export const {value1} = myObject;

// EXERCISE 2
// We have an object called "user".
// Use destructuring assignment to extract the following:
//  2.1: The "name" property into the variable "name".
//  2.2: The "years" property into the variable "age".
//  2.3: The "isAdmin" property into the variable "isAdmin".
//       Set a default value of "false" if the "isAdmin" property does not exist.

const user = { name: "John", years: 30 };

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

// EXERCISE 5
// Rewrite the following function to use destructuring assignment for the
// three variables "name", "country" and "numPeople"  it creates.
// Hint: You may need to rename one of the properties during destructuring.

export function logInfo(city) {
  const name = city.name;
  const country = city.country;
  const numPeople = city.population;

  return  `${name} is in ${country} and has ${numPeople} inhabitants in it.`
}

// This is how you call it:
console.log(logInfo({ name: "Marseille", country: "France", population: 861635 }));
