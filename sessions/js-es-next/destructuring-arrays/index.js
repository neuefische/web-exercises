import checkConditions from './helper';

console.clear();

/*
1: Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/

{
  console.log('EXERCISE 1');

  const item = ['Egg', 0.25, 12];

  // --v-- write code here --v--

  const name = item[0];
  const price = item[1];
  const quantity = item[2];

  // --^-- write code here --^--

  checkConditions(
    [name, item[0], 'name'],
    [price, item[1], 'Price'],
    [quantity, item[2], 'quantity'],
  );
}

/*
2: Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/

{
  console.log('EXERCISE 2');

  const person = [12, 'Chris', 'Owen'];

  // --v-- write code here --v--

  const firstName = person[1];
  const lastName = person[2];
  const age = person[0];

  // --^-- write code here --^--

  checkConditions(
    [firstName, person[1], 'firstName'],
    [lastName, person[2], 'lastName'],
    [age, person[0], 'age'],
  );
}

/*
3: Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
*/

{
  console.log('EXERCISE 3');

  const person = ['Chris', 12, 'Owen'];

  // --v-- write code here --v--

  const firstName = person[0];
  const lastName = person[2];

  // --^-- write code here --^--

  checkConditions(
    [firstName, person[0], 'firstName'],
    [lastName, person[2], 'lastName'],
  );
}

/*
4: Use Array Destructuring to get the last name from the array.
*/

{
  console.log('EXERCISE 4');

  const students = ['Christina', 'Jon', 'Alexandare'];

  // --v-- write code here --v--

  const lastName = students[2];

  // --^-- write code here --^--

  checkConditions([lastName, students[2], 'name']);
}

/*
5: Use Array Destructuring to get all of the names from this Nested Array.
*/

{
  console.log('EXERCISE 5');

  const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

  // --v-- write code here --v--

  const student1 = moreStudents[0];
  const student2 = moreStudents[1][0];
  const student3 = moreStudents[1][1];
  const student4 = moreStudents[2][0];
  const student5 = moreStudents[2][1];

  // --^-- write code here --^--

  checkConditions(
    [student1, moreStudents[0], 'student1'],
    [student2, moreStudents[1][0], 'student2'],
    [student3, moreStudents[1][1], 'student3'],
    [student4, moreStudents[2][0], 'student4'],
    [student5, moreStudents[2][1], 'student5'],
  );
}
