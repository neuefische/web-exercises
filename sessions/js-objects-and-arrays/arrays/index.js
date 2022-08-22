import checkConditions from './helper';

console.clear();

{
  console.log('EXERCISE 1');
  // Modify the array exampleArray so that it contains a number and a string (in that order).

  // --v-- write code here --v--

  const exampleArray = [true, 10];

  // --^-- write code here --^--

  checkConditions(
    [typeof exampleArray[0], 'number', 'first Element'],
    [typeof exampleArray[1], 'string', 'second Element'],
  );
}

{
  console.log('EXERCISE 2');
  // Nest an array inside array exampleArray. After that exampleArray should contain an array as an element.

  // --v-- write code here --v--

  const exampleArray = ['example', 10, true];

  // --^-- write code here --^--

  checkConditions([
    exampleArray.some(element => Array.isArray(element)),
    true,
    'exampleArray includes an array',
  ]);
}

{
  console.log('EXERCISE 3');
  // Change the value of firstNumber to equal the first value of numbers using bracket notation.

  const numbers = [20, 10, 50];

  // --v-- write code here --v--

  const firstNumber = 'pls edit me';

  // --^-- write code here --^--

  checkConditions([firstNumber, 20, 'firstNumber']);
}

{
  console.log('EXERCISE 4');
  // Change the fruit stored at index 0 of fruits to mango.

  // --v-- write code here --v--

  const fruits = ['apple', 'banana', 'grapefruit'];

  // --^-- write code here --^--

  checkConditions([fruits[0], 'mango', 'first Fruit']);
}

{
  console.log('EXERCISE 5');
  // Change the value of nestedNumber to equal fourth number of nestedNumbers using bracket notation.

  const nestedNumbers = [10, [20, 30, [40, 50]]];

  // --v-- write code here --v--

  const nestedNumber = 'pls edit me';

  // --^-- write code here --^--

  checkConditions([nestedNumber, 40, 'nestedNumber']);
}

{
  console.log('EXERCISE 6');
  // Put "rat" onto the end of pets variable by useing the array method push.

  // --v-- write code here --v--

  const pets = ['dog', 'cat', 'rabbit'];

  // --^-- write code here --^--

  checkConditions([
    pets.includes('rat'),
    true,
    'pets includes an element "rat"',
  ]);
}

{
  console.log('EXERCISE 7');
  // Use the pop method to remove the last item from fruits.

  // --v-- write code here --v--

  const fruits = ['apple', 'banana', 'mango'];

  // --^-- write code here --^--

  checkConditions([
    fruits.includes('mango'),
    false,
    'fruits includes an element "mango"',
  ]);
}

{
  console.log('EXERCISE 8');
  // Put "hamster" onto the start of pets variable by useing the array method unshift.

  // --v-- write code here --v--

  const pets = ['dog', 'cat', 'rabbit'];

  // --^-- write code here --^--

  checkConditions([
    pets.includes('hamster'),
    true,
    'pets includes an element "hamster"',
  ]);
}

{
  console.log('EXERCISE 9');
  // Use the shift method to remove the first item from fruits.

  // --v-- write code here --v--

  const fruits = ['apple', 'banana', 'mango'];

  // --^-- write code here --^--

  checkConditions([
    fruits.includes('apple'),
    false,
    'fruits includes an element "apple"',
  ]);
}
