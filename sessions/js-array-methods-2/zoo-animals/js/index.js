import { zooAnimals } from "../utils/db.js";

function checkAnimal(animals, animalName) {
  //return null;
  return animals.includes(animalName);
}

// -------------------------------------------------------------------------------------
// ----- The following code is used for the browser preview. Please don't touch it -----

const animalList = document.querySelector("[data-js='animalList']");
const animalForm = document.querySelector("[data-js='animalForm']");
const output = document.querySelector("[data-js='output']");

animalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = event.target.searchQuery.value;
  output.textContent = "";
  if (searchTerm.trim() === "") {
    return;
  }
  const result = checkAnimal(zooAnimals, searchTerm);
  output.textContent = result
    ? `Yes, we have ${searchTerm}`
    : `No, we don't have ${searchTerm}`;
});
zooAnimals.forEach((animal) => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = animal;
  animalList.append(tag);
});

// This website uses a function to check wether a specific animal is part of the zoo or not but it's not working correct.
// Please implement the function 'checkAnimal' that gets an array of animals and an animal name
// The function should return 'true' if the animal name is included in the array or 'false' if not.
