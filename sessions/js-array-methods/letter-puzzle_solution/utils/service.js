import {
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
} from "../js/index.js";

const letter1 = document.querySelector("[data-js='letter1']");
const letter2 = document.querySelector("[data-js='letter2']");
const letter3 = document.querySelector("[data-js='letter3']");
const letter4 = document.querySelector("[data-js='letter4']");
const letter5 = document.querySelector("[data-js='letter5']");
const letter6 = document.querySelector("[data-js='letter6']");
const letter7 = document.querySelector("[data-js='letter7']");
const letter8 = document.querySelector("[data-js='letter8']");
const letter9 = document.querySelector("[data-js='letter9']");
const letter10 = document.querySelector("[data-js='letter10']");
const letter11 = document.querySelector("[data-js='letter11']");

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
