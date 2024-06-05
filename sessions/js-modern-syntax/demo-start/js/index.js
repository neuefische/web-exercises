console.clear();

/* -------- Destructuring Assignment - Objects --------- */

const tree = {
  name: "oak",
  age: 1200,
  scientificName: "quercus",
};

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale"];

/* ---------------- Rest Syntax ----------------- */

// function showZooAnimals(allAnimals) {
// 	console.log(allAnimals);
// 	return `My zoo consists of the following animals: ${allAnimals.join(', ')}.`;
// }

/* ---------------- Spread Syntax ----------------- */

// Add another value

const animalFood = ["Meat", "Apple", "Banana", "Carrot"];

const newAnimalFood = "Fish";

// Spread for concatenating two arrays
