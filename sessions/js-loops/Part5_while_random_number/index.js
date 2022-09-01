console.clear();

// Part 5: create a while loop that generates and logs random numbers between 0 and 1 and exits when the number
// is larger than 0.9

let number = 0;
let count = 0;

// --v-- write/change code here --v--

while (number <= 0.9) {
  count++;
  number = Math.random();
}

// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`,
);
