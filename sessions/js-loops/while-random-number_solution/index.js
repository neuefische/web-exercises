console.clear();

let number = 0;
let count = 0;

// --v-- write or modify code below this line --v--
while (number < 0.9) {
  count++;
  number = Math.random();
}
// --v-- write or modify code above this line --v--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
