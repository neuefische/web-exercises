console.clear();

function printPersonalData() {
  const name = "Alex";
  const age = 24;
  console.log(name + " is " + age + " years old");
}

printPersonalData();
printPersonalData();

function printPersonalDataWithInputs(name, age) {
  console.log(name + " is " + age + " years old");
}

printPersonalDataWithInputs("Max", 23);
printPersonalDataWithInputs("Jordan", 25);

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
