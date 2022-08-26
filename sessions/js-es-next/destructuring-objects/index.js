console.clear();

// EXERCISE 1
// Extract only the course name from the company object.

const company = {
  name: 'neuefische',
  course: 'Web Development',
  location: 'Hamburg',
};

const course = 'Destructure the object company';

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property)

const user = {name: 'John', years: 30};

const name = 'Destructure the object user';
const years = 'Destructure the object user';
const isAdmin = 'Destructure the object user';

// EXERCISE 3
// Extract the variables from the dog object and rename them like the variables below.

const dog = {
  name: 'Pluto',
  greed: 'husky',
  age: 5,
};

const dogName = 'Destructure the object dog';
const dogGreed = 'Destructure the object dog';
const dogAge = 'Destructure the object dog';

// EXERCISE 4
// Extract the lastname variable from the person object as "personLastname". Store all other variables in an object called "moreInformation".

const person = {
  lastname: 'Main',
  age: 24,
  firstname: 'Alex',
};

const personLastname = 'Destructure the object person';
const moreInformation = {
  firstname: 'Destructure the object person',
  age: 'Destructure the object person',
};

export {
  course,
  name,
  years,
  isAdmin,
  dogName,
  dogGreed,
  dogAge,
  personLastname,
  moreInformation,
};
