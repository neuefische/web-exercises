import checkConditions from './helper';

console.clear();

const people = [
  {
    name: 'Homer',
    age: 39,
    parents: [{mothersName: 'Mona', fathersName: 'Abe'}],
    pet: [{animal: 'dog', name: "Santa's Little Helper"}],
    friend: [{name: 'Moe Szyslak', work: 'owner of Moes Tavern'}],
    'other freinds': ['Barney Gumble', 'Carl Carlson', 'Lenny Leonard'],
    color_cloth: 'white',
  },
  {
    name: 'Marge',
    age: 36,
    parents: [
      {mothersName: 'Jacqueline Bouvier', fathersName: 'Clancy Bouvier'},
    ],
    pet: [{animal: 'dog', name: "Santa's Little Helper"}],
    kids: [
      {name: 'Bart', child_number: 'first'},
      {name: 'Lisa', child_number: 'second'},
      {name: 'Maggie', child_number: 'third'},
    ],
    color_cloth: 'lightgreen',
  },
  {
    name: 'Bart',
    age: 10,
    parents: [{mothersName: 'Marge', fathersName: 'Homer'}],
    pet: [{animal: 'dog', name: "Santa's Little Helper"}],
    quotes: [
      {first: 'Ay Caramba!', second: 'Eat my shorts!', third: 'I didnt do it!'},
    ],
    color_cloth: 'red',
  },
  {
    name: 'Lisa',
    age: 8,
    parents: [{mothersName: 'Marge', fathersName: 'Homer'}],
    pet: [{animal: 'dog', name: "Santa's Little Helper"}],
    quotes: [
      {
        first: 'Bart!',
        second: 'If anyone wants me, Ill be in my room.',
        third: 'Quit it, Bart!',
      },
    ],
    color_cloth: 'orange',
  },
];

{
  console.log('EXERCISE 1');
  // Change the value of the variable name to equal the name of the first person.

  // --v-- write code here --v--

  const name = people;

  // --^-- write code here --^--

  checkConditions([name, 'Homer', 'name']);
}

{
  console.log('EXERCISE 2');
  // Change the value of the variable otherFriends to equal the other friends of Homer.

  // --v-- write code here --v--

  const otherFriends = people;

  // --^-- write code here --^--

  checkConditions([
    otherFriends.toString(),
    ['Barney Gumble', 'Carl Carlson', 'Lenny Leonard'].toString(),
    'otherFriends',
  ]);
}

{
  console.log('EXERCISE 3');
  // Change the value of the variable age to equal the age of the third person.

  // --v-- write code here --v--

  const age = people;

  // --^-- write code here --^--

  checkConditions([age, 10, 'age']);
}

{
  console.log('EXERCISE 4');
  // Change the value of the variable mothersName to equal the mothers name of the second person.

  // --v-- write code here --v--

  const mothersName = people;

  // --^-- write code here --^--

  checkConditions([mothersName, 'Jacqueline Bouvier', 'mothersName']);
}

{
  console.log('EXERCISE 5');
  // Change the value of the variable animaltype to equal the type of animal of Lisas pet.

  // --v-- write code here --v--

  const animaltype = people;

  // --^-- write code here --^--

  checkConditions([animaltype, 'dog', 'animaltype']);
}
