console.clear();

// Function Declaration

function printPersonalData() {
  const name = "Alex";
  const age = 24;
  console.log(name + " is " + age + " years old");
}

// Function Call

printPersonalData();
printPersonalData();

// Function Parameters

function printPersonalDataWithInputs(name, age) {
  console.log(name + " is " + age + " years old");
}

printPersonalDataWithInputs("Max", 23);
printPersonalDataWithInputs("Jordan", 25);

// Return Value

function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 3);
console.log(result);

function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputLength("Hey!");
console.log(isValid);
