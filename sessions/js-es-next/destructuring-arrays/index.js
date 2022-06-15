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

	console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
}

/*
2: Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
	console.log('EXERCISE 3');

	const person = [12, 'Chris', 'Owen'];

	// --v-- write code here --v--
	const firstName = person[1];
	const lastName = person[2];
	const age = person[0];
	// --^-- write code here --^--

	console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
}

/*
3: Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
*/
{
	console.log('EXERCISE 4');

	const person = ['Chris', 12, 'Owen'];

	// --v-- write code here --v--
	const firstName = person[0];
	const lastName = person[2];
	// --^-- write code here --^--

	console.log(`Name: ${firstName} ${lastName}`);
}

/*
4: Use Array Destructuring to get the last name from the array.
*/
{
	console.log('EXERCISE 5');

	const students = ['Christina', 'Jon', 'Alexandare'];

	// --v-- write code here --v--
	const [] = students;
	// --^-- write code here --^--

	// console.log(lastName);
}

/*
5: Use Array Destructuring to get all of the names from this Nested Array.
*/
{
	console.log('EXERCISE 6');

	const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

	// --v-- write code here --v--
	const [] = moreStudents;
	// --^-- write code here --^--

	// console.log(student1, student2, student3, student4, student5);
}
