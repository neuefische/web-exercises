import { employees } from "../utils/db.js";

// Exercise 1:
// This function receives an array of employees and a last name.
// Try to find an object with the corresponding lastName and return the found object (instead of 'null')
// Check the browser preview and conduct some tests to ensure it works correctly.

function findByLastName(employees, lastName) {
  return null;

  // Exercise 2:
  // The same as above, but now you are searching by the 'id'.
}
function findById(employees, id) {
  return null;
}

// Exercise 3:
// This time you want to find an employee who lives in a city that includes a specific substring.

function findByCitySubString(employees, string) {
  return null;
}

// Bonus:
// You want to find any employee whose profession includes a specific substring
// AND who is older than a specific age

function findByProfessionSubStringAndAge(employees, string, age) {
  return null;
}

// ------------------------------------------------------------------------------
// ----- The following code is used for the preview. Don't touch it please. -----

const form1 = document.querySelector("[data-js='form1']");
const form2 = document.querySelector("[data-js='form2']");
const form3 = document.querySelector("[data-js='form3']");
const form4 = document.querySelector("[data-js='form4']");
const employeesList = document.querySelector("[data-js='employees-list']");
const exercise1 = document.querySelector("[data-js='exercise1']");
const exercise2 = document.querySelector("[data-js='exercise2']");
const exercise3 = document.querySelector("[data-js='exercise3']");
const exercise4 = document.querySelector("[data-js='exercise4']");

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise1.innerHTML = "";
  const result = findByLastName(employees, event.target.exercise1.value);
  if (result) {
    exercise1.append(createCard(result));
  } else {
    exercise1.textContent = "No results";
  }
});
form2.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise2.innerHTML = "";
  const result = findById(employees, event.target.exercise2.value);
  if (result) {
    exercise2.append(createCard(result));
  } else {
    exercise2.textContent = "No results";
  }
});
form3.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise3.innerHTML = "";
  const result =
    event.target.exercise3.value.trim() !== ""
      ? findByCitySubString(employees, event.target.exercise3.value)
      : null;
  if (result) {
    exercise3.append(createCard(result));
  } else {
    exercise3.textContent = "No results";
  }
});
form4.addEventListener("submit", (event) => {
  event.preventDefault();
  exercise4.innerHTML = "";
  const result = findByProfessionSubStringAndAge(
    employees,
    event.target.exercise4.value,
    event.target.exercise4b.value
  );
  if (result) {
    exercise4.append(createCard(result));
  } else {
    exercise4.textContent = "No results";
  }
});
function createCard(employee) {
  const card = document.createElement("section");
  card.classList.add("card");
  card.innerHTML = `<h2>${employee.firstName} ${employee.lastName}</h2>
  <p>ID: ${employee.id}</p><p>Profession: ${employee.profession}</p><p>Phone: ${employee.phone}</p><p>Email: ${employee.email}</p><p>Adress: ${employee.address}</p><p>City: ${employee.city}</p><p>Age: ${employee.age}</p>`;
  return card;
}
employees.forEach((employee) => {
  const card = createCard(employee);
  employeesList.append(card);
});
