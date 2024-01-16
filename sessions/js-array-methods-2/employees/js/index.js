import { employees } from "../utils/db.js";

// Exercise 1:
// This function gets an employees array and a last name. 
// Try to find the object with the corresponding lastName and return the found object
// Check the browser preview and make some tests to see if it works correct now.

function findByLastName(employees, lastName) {
  //return null;
  return employees.find((employee) => employee.lastName === lastName);

  // Exercise 2:
  // The some as above, but now you are searching by the 'id'
}
function findById(employees, id) {
  //return null;
  return employees.find((employee) => employee.id === id);
}

// Exercise 3:
// This time you want to find an employee that lives in a city that includes a specific substring.

function findByCitySubString(employees, string) {
  //return null;
  return employees.find((employee) => employee.city.includes(string));
}

// Bonus:
// You want to find any employee, that's profession includes a specific substring 
// AND that is older than a specific age

function findByProfessionSubStringAndAge(employees, string, age) {
  //return null;
  return employees.find(
    (employee) => employee.profession.includes(string) && employee.age > age
  );
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
