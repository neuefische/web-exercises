const simpsons = [
  {
    id: "13e25ab",
    name: "Homer",
    img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    age: 45,
    income: 3500,
  },
  {
    id: "13dfgd5ab",
    name: "Marge",
    img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    age: 43,
    income: 0,
  },
  {
    id: "gwd4gd5ab",
    name: "Ape",
    img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
    age: 83,
    income: 500,
  },
  {
    id: "dr325ab",
    name: "Bart",
    img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    age: 15,
    income: 50,
  },
  {
    id: "13erf25ab",
    name: "Lisa",
    img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    age: 12,
    income: 35,
  },
];

const characterList = document.querySelector("[data-js='characterList']");
const someArea = document.querySelector("[data-js='some']");
const everyArea = document.querySelector("[data-js='every']");
const findArea = document.querySelector("[data-js='find']");
const sortedByAgeArea = document.querySelector("[data-js='sortNumbers']");
const sortedByNameArea = document.querySelector("[data-js='sortStrings']");

simpsons.map((simpson) => {
  const card = document.createElement("li");
  card.classList.add("character");
  card.innerHTML = `<p class="title">${simpson.name}</p>
  <img
    src=${simpson.img}
    alt=${simpson.name}
    height="100"
  />
  <p>Age: ${simpson.age}</p>
  <p>Income: ${simpson.income} $</p>`;
  characterList.append(card);
});

// some (returns true or false)
// const callbackFn = (simpson) => {
//   //console.log(simpson)
//   return simpson.age < 15;
// };

const someResult = simpsons.some((simpson) => {
  //console.log(simpson);
  return simpson.age < 15;
});
someArea.textContent = someResult ? "Yes, there is!" : "No, there isn't!";

// every (returns true or false)
const everyResult = simpsons.every((simpson) => {
  //console.log(simpson);
  return simpson.age < 15;
});
everyArea.textContent = everyResult ? "Yes, everybody!" : "Not everybody!";

// find (returns the first found object or undefined)
const findResult = simpsons.find((simpson) => {
  return simpson.name === "Bart";
});
findArea.textContent = findResult?.name;

// toSorted (returns a new array, now sorted)
// return value < 0: sort a before b
// return value > 0: sort b before a
// return value === 0: keep order
const simpsonsSortedByAge = simpsons.toSorted((a, b) => {
  return a.age - b.age;
});

simpsonsSortedByAge.map((element) => {
  return (sortedByAgeArea.textContent += `-${element.name}`);
});

const simpsonsSortedByName = simpsons.toSorted((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA > nameB) {
    return 1;
  } else {
    return -1;
  }
});

simpsonsSortedByName.map((element) => {
  return (sortedByNameArea.textContent += `-${element.name}`);
});