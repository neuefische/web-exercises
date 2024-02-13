console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

// If the object above looks weird & confusing and you're
// unsure how it works, then take a look at a different
// way of constructing the above object:

// Arrow Functions:
// const add = (a,b) => a + b;
// const subtract = (a,b) => a - b;
// const multiply = (a,b) => a * b;
// const divide = (a,b) => {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero!");
//     }
//     return a / b;
//   },

// Constructing the Object
// const operations = {
//   add,
//   subtract,
//   multiply,
//   divide,
// };

// You could also handle this by calling the functions
// individually as part of an if/else structure, etc.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    document.querySelector(".error").innerText = "";
  } catch (error) {
    console.log(error);
    console.error(error);
    // This isn't necessary. It's just to visualize the difference between console.log and console.error.
    output.innerText = "❌";
    document.querySelector(".error").innerText = error.message;
  }
});
