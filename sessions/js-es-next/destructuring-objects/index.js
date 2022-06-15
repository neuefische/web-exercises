console.clear();

/*
1: Extract only the course name from the company object.
*/

{
	console.log('EXERCISE 1');

	const company = {
		name: 'neuefische',
		course: 'Web Development',
		location: 'Hamburg',
	};

	// --v-- write code here --v--
	const {} = company;
	// --^-- write code here --^--

	// console.log(course);
}

/*
2: We have an object called 'user'.
Write the destructuring assignment that reads:
  2.1: 'name' property into the variable 'name'.
  2.2: 'years' property into the variable 'age'.
  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/
{
	console.log('EXERCISE 2');

	const user = {name: 'John', years: 30};

	// --v-- write code here --v--
	const {} = user;
	// --^-- write code here --^--

	// console.log(name); // John
	// console.log(age); // 30
	// console.log(isAdmin); // false
}

/*
3: Extract the variables from the company object and rename them so that the console.log works.
*/
{
	console.log('EXERCISE 3');

	const company = {
		name: 'neuefische',
		course: 'Web Development',
		location: 'Hamburg',
	};

	// --v-- write code here --v--
	const {} = company;
	// --^-- write code here --^--

	// console.log(`Name: ${companyName}, Course: ${companyCourse}, Location: ${companyLocation}`);
}

/*
4: Extract the location variable from the company object as "companyLocation". Store all other variables in an object called "moreInformation".
*/
{
	console.log('EXERCISE 4');

	const company = {
		name: 'neuefische',
		course: 'Web Development',
		location: 'Hamburg',
	};

	// --v-- write code here --v--
	const {} = company;
	// --^-- write code here --^--

	// console.log(`Location: ${companyLocation}; more information: ${moreInformation.name} ${moreInformation.course}`);
}
