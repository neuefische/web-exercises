import {
  letter1,
  letter2,
  letter3,
  letter4,
  letter5,
  letter6,
  letter7,
  letter8,
  letter9,
  letter10,
  letter11,
} from "../utils/service.js";
import { employees } from "../utils/data.js";


// QUESTION 1: Is there any employee that is older than 65 years?
// Hint: use some()

const hasEmployeesOlderThan65 = null;
// const hasEmployeesOlderThan65 = employees.some((employee) => employee.age > 65);

//----------------------------------------
// QUESTION 2: Is there any employee with first name 'Frederique'?
// Hint: use some()

const employeeNamedFrederique = null;
// const employeeNamedFrederique = employees.some(
//   (employee) => employee.firstName === "Frederique"
// );

//----------------------------------------
// QUESTION 3: Is there any employee younger than 18 years?
// Hint: use some()

const employeeYoungerThan18 = null;
// const employeeYoungerThan18 = employees.some((employee) => employee.age < 18);

//----------------------------------------
// QUESTION 4: Has every employee a phone number?
// Hint: use every()

const everyEmployeeHasPhoneNumber = null;
// const everyEmployeeHasPhoneNumber = employees.every(
//   (employee) => employee.phone
// );

//----------------------------------------
// QUESTION 5: Does every id start with '0'?
// Hint: Use every()

const everyIdStartsWith0 = null;
// const everyIdStartsWith0 = employees.every((employee) =>
//   employee.id.startsWith("0")
// );

//----------------------------------------
// QUESTION 6: Has every employee a first name AND a last name?
// Hint: use every()

const everyEmployeeHasFirstAndLastName = null;
// const everyEmployeeHasFirstAndLastName = employees.every(
//   (employee) => employee.firstName && employee.lastName
// );

//----------------------------------------
// QUESTION 7: Can you find the employee named 'Louise' that is 33 years old?
// Hint: use find()

const employeeLouise33 = null;
// const employeeLouise33 = employees.find(
//   (employee) => employee.firstName === "Louise" && employee.age === 33
// );

//----------------------------------------
// QUESTION 8: We need to find the employee with the id '0.0795620650485831'
// Hint: Use find()

const employeeWithId = null;
// const employeeWithId = employees.find(
//   (employee) => employee.id === "0.0795620650485831"
// );

//----------------------------------------
// QUESTION 9: Please find the employee with first name 'Edna' and profession 'Inverstment Manager'
// Hint: use find()

const ednaInvestment = null;
// const ednaInvestment = employees.find(
//   (employee) =>
//     employee.firstName === "Edna" &&
//     employee.profession === "Investment Manager"
// );

//----------------------------------------
// QUESTION 10: We need a new employees array now sorted by age ascending (1 -> 100)
// Hint: Use toSorted()

const employeesSortedByAge = null;
// const employeesSortedByAge = employees.toSorted((a, b) => a.age - b.age);

//----------------------------------------
// QUESTION 11: We want a new employees array sorted by last name descending (Z -> A)
// Hint use toSorted()

const employeesSortedByLastName = null;
// const employeesSortedByLastName = employees.toSorted((a, b) => {
//   if (a.lastName.toUpperCase() > b.lastName.toUpperCase()) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// Great! 🎉 You got it! 🚀 Now you can read the solution of the letter puzzle. 💪

// ---------- ( this code is used for the puzzle! Don't touch it. ------------
letter1.textContent = hasEmployeesOlderThan65 ? "A" : "I";
letter10.textContent = employeesSortedByAge
  ? employeesSortedByAge[0].city[0]
  : "I";
letter2.textContent = employeeNamedFrederique ? "P" : "I";
letter8.textContent = employeeWithId ? employeeWithId.city[0] : "L";
letter3.textContent = employeeYoungerThan18 ? "E" : "F";
letter4.textContent = everyEmployeeHasPhoneNumber ? "I" : "R";
letter11.textContent = employeesSortedByLastName
  ? employeesSortedByLastName[0].city[0]
  : "X";
letter5.textContent = everyIdStartsWith0 ? "F" : "I";
letter6.textContent = everyEmployeeHasFirstAndLastName ? "E" : "I";
letter7.textContent = employeeLouise33 ? employeeLouise33.city[0] : "F";
letter9.textContent = ednaInvestment ? ednaInvestment.city[0] : "L";
