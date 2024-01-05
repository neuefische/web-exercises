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

// EXAMPLE:
// QUESTION 1: Is there any employee that is older than 65 years?
// Hint: use some()

const hasEmployeesOlderThan65 = employees.some((employee) => employee.age > 65);

// Now it's your turn...
//----------------------------------------
// QUESTION 2: Is there any employee with first name 'Frederique'?
// Hint: use some()

const employeeNamedFrederique = null;

//----------------------------------------
// QUESTION 3: Is there any employee younger than 18 years?
// Hint: use some()

const employeeYoungerThan18 = null;

//----------------------------------------
// QUESTION 4: Has every employee a phone number?
// Hint: use every()

const everyEmployeeHasPhoneNumber = null;

//----------------------------------------
// QUESTION 5: Does every id start with '0'?
// Hint: Use every()

const everyIdStartsWith0 = null;

//----------------------------------------
// QUESTION 6: Has every employee a first name AND a last name?
// Hint: use every()

const everyEmployeeHasFirstAndLastName = null;

//----------------------------------------
// QUESTION 7: Can you find the employee named 'Louise' that is 33 years old?
// Hint: use find()

const employeeLouise33 = null;

//----------------------------------------
// QUESTION 8: We need to find the employee with the id '0.0795620650485831'
// Hint: Use find()

const employeeWithId = null;

//----------------------------------------
// QUESTION 9: Please find the employee with first name 'Edna' and profession 'Inverstment Manager'
// Hint: use find()

const ednaInvestment = null;

//----------------------------------------
// QUESTION 10: We need a new employees array now sorted by age ascending (1 -> 100)
// Hint: Use toSorted()

const employeesSortedByAge = null;

//----------------------------------------
// QUESTION 11: We want a new employees array sorted by last name descending (Z -> A)
// Hint use toSorted()

const employeesSortedByLastName = null;

// Great! 🎉 You got it! 🚀 Now you can read the solution of the letter puzzle. 💪

// ---------- ( this code is used for the puzzle! Don't touch it ) ------------
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
