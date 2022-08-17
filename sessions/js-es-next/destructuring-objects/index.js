import checkConditions from './helper';

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

  const course = company.course;

  // --^-- write code here --^--

  checkConditions([course, company.course, 'course']);
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

  const name = user.name;
  const years = user.years;
  const isAdmin = (user.isAdmin = false);

  // --^-- write code here --^--

  checkConditions(
    [name, user.name, 'name'],
    [years, user.years, 'years'],
    [isAdmin, (user.isAdmin = false), 'isAdmin'],
  );
}

/*
3: Extract the variables from the company object and rename them so that there will be displayed no errors in console.
*/

{
  console.log('EXERCISE 3');

  const company = {
    name: 'neuefische',
    course: 'Web Development',
    location: 'Hamburg',
  };

  // --v-- write code here --v--

  const companyName = company.name;
  const companyCourse = company.course;
  const companyLocation = company.location;

  // --^-- write code here --^--

  checkConditions(
    [companyName, company.name, 'companyName'],
    [companyCourse, company.course, 'companyCourse'],
    [companyLocation, company.location, 'companyLocation'],
  );
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

  const companyLocation = company.location;
  const moreInformation = {
    name: company.name,
    course: company.course,
  };

  // --^-- write code here --^--

  checkConditions(
    [companyLocation, company.location, 'companyName'],
    [moreInformation.name, company.name, 'moreInformation.name'],
    [moreInformation.course, company.course, 'moreInformation.course'],
  );
}
