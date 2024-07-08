const numberList = document.querySelector("[data-js='numberList']");
const numberOutput = document.querySelector("[data-js='number-output']");

const numbers = [512, 77, 333, 49, 81, 4, -12, 3.14, 1000, 31, 99];

function displayNumber(number) {
  const card = document.createElement("li");
  card.classList.add("tag");
  card.innerHTML = `<span>${number}</span>`;
  numberList.append(card);
}

numbers.forEach(displayNumber);

const numberToCheck = 3333;
const includesNumber = numbers.includes(numberToCheck);
numberOutput.textContent = includesNumber ? "Yes its in the list" : "Nope.";
