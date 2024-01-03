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
  letter12,
  letter13,
  letter14,
  letter15,
  letter16,
  letter17,
  letter18,
} from "../utils/service.js";
import { employees } from "../utils/data.js";

// Here is an example:
// QUESTION 1: Is there any employee that is older than 65 years?
// YES: "I" NO: "A"

// Try some code here:
const olderThan65 = employees.some((person) => person.age > 65);
console.log("olderThan65: ", olderThan65); // logs: 'false'

// Fill in the found letter:
letter4.textContent = "A";

//----------------------------------------
// Now it's your turn. Try to find the answers...

// QUESTION 2: Is there any person with first name 'Frederique'?
// YES: "E" NO: "S"

// Try some code here:

// Fill in the right letter:
letter10.textContent = "";

//----------------------------------------
// QUESTION 3: Is every employee older than 18 years?
// YES: "M" NO: "I"
// Try some code here:

// Fill in the right letter:
letter1.textContent = "";

//----------------------------------------
// QUESTION 4: What is the last letter of the first name from employee with the id '0.4501839429121537'?
// Try some code here:

// Fill in the found letter:
letter18.textContent = "";

//----------------------------------------
// QUESTION 5: Is there any employee with profession 'Landscape Architect' AND older than 50 years?
// YES: "S" NO: "F"
// Try some code here:

// Fill in the right letter:
letter3.textContent = "";

//----------------------------------------
// QUESTION 6: What is the last letter of the last Name of the employee with the email 'kip@wetutwab.cw'
// Try some code here:

// Fill in the found letter:
letter12.textContent = "";

//----------------------------------------
// QUESTION 7: What is the first letter of the city from the employee 'Louise' that is 33 years old?
// Try some code here:

// Fill in the found letter:
letter2.textContent = "";

//----------------------------------------
// QUESTION 8: Is there any employee with first name or last name 'Radu'?
// YES: "M" NO: "R"
// Try some code here:

// Fill in the right letter:
letter7.textContent = "";

//----------------------------------------
// QUESTION 9: Has every employee a phone number?
// YES: "O" NO: "E"
// Try some code here:

// Fill in the right letter:
letter17.textContent = "";

//----------------------------------------
// QUESTION 10: What is the first letter of the city from the youngest employee?
// Hint: Maybe you want to sort the array
// Try some code here:

// Fill in the found letter:
letter8.textContent = "";

//----------------------------------------
// QUESTION 11: Is there an employee with name (first name or last name) 'Baxter' and phone '(660) 877-9818'?
// YES: "I" NO: "V"
// Try some code here:

// Fill in the right letter:
letter6.textContent = "";

//----------------------------------------
// QUESTION 12: Has every employee at least an IQ > 50?
// YES: "P" NO: "L"
// Try some code here:

// Fill in the right letter:
letter13.textContent = "";

//----------------------------------------
// QUESTION 13: Is there an employee with an IQ > 105?
// YES: "T" NO: "L"
// Try some code here:

// Fill in the right letter:
letter15.textContent = "";

//----------------------------------------
// QUESTION 14: What is the first letter of the first name of the employee with the lowest IQ?
// Hint: Maybe you want to sort the array
// Try some code here:

// Fill in the found letter:
letter14.textContent = "";

// BONUS:

//----------------------------------------
// QUESTION 15: What is the second letter of the profession from the 111th employee in the employees array?
// Try some code here:

// Fill in the found letter:
letter16.textContent = "";

//----------------------------------------
// QUESTION 16: What is the first letter of the profession from employee with the biggest IQ?
// Try some code here:

// Fill in the found letter:
letter9.textContent = "";

// EXTRA BONUS:

//----------------------------------------
// QUESTION 17: When sorting the employees by last name ascending (A -> Z). What is the first letter of the first name from the first employee?
// Try some code here:

// Fill in the found letter:
letter5.textContent = "";

//----------------------------------------
// QUESTION 18: When sorting the employees by city descending (Z -> A). What is the first letter of the first name from the first employee?
// Try some code here:

// Fill in the found letter:
letter11.textContent = "";
