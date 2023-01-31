let carrots = 2;
const dishesCleaned = 4;
const kidDidHelpCleaningTheKitchen = dishesCleaned > 3;

// without ternary operator
//
// let extraCarrots = 0;

// if (kidDidHelpCleaningTheKitchen) {
//   extraCarrots = 2;
// } else {
//   extraCarrots = -1;
// }
//
// carrots = carrots + extraCarrots;
//
//

// with ternary operator

let extraCarrots = kidDidHelpCleaningTheKitchen ? 2 : -1;

carrots = carrots + extraCarrots;

console.log(carrots);

// type coercion

if (carrots) {
  console.log("Hand out the carrots already! 🥕");
}
