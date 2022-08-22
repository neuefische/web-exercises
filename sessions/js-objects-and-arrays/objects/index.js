import checkConditions, {checkKeys} from './helper';

console.clear();

{
  console.log('EXERCISE 1');
  // Create an object person with the properties "name", "age" and "email".

  // --v-- write code here --v--

  const person = {
    example: 'example',
  };

  // --^-- write code here --^--

  checkConditions([
    checkKeys(person, ['name', 'age', 'email']),
    true,
    'person includes the keys "name", "age" and "email"',
  ]);
}

{
  console.log('EXERCISE 2');
  // Set the values of name and age equal to the corresponding values of the person object.

  const person = {
    name: 'Alex',
    age: 24,
  };

  // --v-- write code here --v--

  const name = person;
  const age = person;

  // --^-- write code here --^--

  checkConditions([name, 'Alex', 'name'], [age, 24, 'age']);
}

{
  console.log('EXERCISE 3');
  // Change the value of name to "Kim" and the value of age to "35" by updating the object: person.existingProperty = newValue.

  const person = {
    name: 'Alex',
    age: 24,
  };

  // --v-- write code here --v--

  // --^-- write code here --^--

  checkConditions([person.name, 'Kim', 'name'], [person.age, 35, 'age']);
}

{
  console.log('EXERCISE 4');
  // Add the properties age "5" and breed "husky" to the object pet: pet.newProperty = newValue.

  const pet = {
    name: 'Pluto',
    species: 'dog',
  };

  // --v-- write code here --v--

  // --^-- write code here --^--

  checkConditions([pet.age, 5, 'age'], [pet.breed, 'husky', 'breed']);
}
