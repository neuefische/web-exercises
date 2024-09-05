import { employees } from "../utils/data.js";

// EXAMPLE:
// QUESTION 1: Is there any employee that is older than 65 years?
// Hint: use some()

const hasEmployeesOlderThan65 = employees.some((employee) => employee.age > 65);

// Now it's your turn...
//----------------------------------------
// QUESTION 2: Is there any employee with first name 'Frederique'?
// Hint: use some()

const employeeNamedFrederique = employees.some(
  (employee) => employee.firstName === "Frederique"
);

//----------------------------------------
// QUESTION 3: Is there any employee younger than 18 years?
// Hint: use some()

const employeeYoungerThan18 = employees.some((employee) => employee.age < 18);

//----------------------------------------
// QUESTION 4: Has every employee a phone number?
// Hint: use every()

const everyEmployeeHasPhoneNumber = employees.every(
  (employee) => employee.phone
);

//----------------------------------------
// QUESTION 5: Does every id start with '0'?
// Hint: Use every()

const everyIdStartsWith0 = employees.every((employee) =>
  employee.id.startsWith("0")
);

//----------------------------------------
// QUESTION 6: Has every employee a first name AND a last name?
// Hint: use every()

const everyEmployeeHasFirstAndLastName = employees.every(
  (employee) => employee.firstName && employee.lastName
);

//----------------------------------------
// QUESTION 7: Can you find the employee named 'Louise' that is 33 years old?
// Hint: use find()

const employeeLouise33 = employees.find(
  (employee) => employee.firstName === "Louise" && employee.age === 33
);

//----------------------------------------
// QUESTION 8: We need to find the employee with the id '0.0795620650485831'
// Hint: Use find()

const employeeWithId = employees.find(
  (employee) => employee.id === "0.0795620650485831"
);

//----------------------------------------
// QUESTION 9: Please find the employee with first name 'Edna' and profession 'Investment Manager'
// Hint: use find()

const ednaInvestment = employees.find(
  (employee) =>
    employee.firstName === "Edna" &&
    employee.profession === "Investment Manager"
);

//----------------------------------------
// QUESTION 10: We need a new employees array now sorted by age ascending (1 -> 100)
// Hint: Use toSorted()

const employeesSortedByAge = employees.toSorted((a, b) => {
  return a.age - b.age;
});

//----------------------------------------
// QUESTION 11: We want a new employees array sorted by last name descending (Z -> A)
// Hint use toSorted()

const employeesSortedByLastName = employees.toSorted((a, b) => {
  const nameA = a.lastName.toLowerCase();
  const nameB = b.lastName.toLowerCase();
  return nameA < nameB ? 1 : -1;
});

// Great! 🎉 You got it! 🚀 Now you can read the solution of the letter puzzle. 💪

export {
  hasEmployeesOlderThan65,
  employeesSortedByAge,
  employeeNamedFrederique,
  employeeWithId,
  employeeYoungerThan18,
  everyEmployeeHasPhoneNumber,
  employeesSortedByLastName,
  everyIdStartsWith0,
  everyEmployeeHasFirstAndLastName,
  employeeLouise33,
  ednaInvestment,
};
