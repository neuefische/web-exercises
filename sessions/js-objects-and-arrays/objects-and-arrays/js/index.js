console.clear();

const people = [
  {
    name: "Homer",
    age: 39,
    parents: { mothersName: "Mona", fathersName: "Abe" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    friend: { name: "Moe Szyslak", work: "owner of Moes Tavern" },
    "other friends": ["Barney Gumble", "Carl Carlson", "Lenny Leonard"],
    color_cloth: "white",
  },
  {
    name: "Marge",
    age: 36,
    parents: {
      mothersName: "Jacqueline Bouvier",
      fathersName: "Clancy Bouvier",
    },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    kids: [
      { name: "Bart", child_number: "first" },
      { name: "Lisa", child_number: "second" },
      { name: "Maggie", child_number: "third" },
    ],
    color_cloth: "lightgreen",
  },
  {
    name: "Bart",
    age: 10,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: ["Ay Caramba!", "Eat my shorts!", "I didnt do it!"],
    color_cloth: "red",
  },
  {
    name: "Lisa",
    age: 8,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: [
      "Bart!",
      "If anyone wants me, Ill be in my room.",
      "Quit it, Bart!",
    ],
    color_cloth: "orange",
  },
];

// EXERCISE 1
// Set the variable `nameOfFirstPerson` to the name of the first person in the array.

const nameOfFirstPerson = "change me";

// EXERCISE 2
// Set the variable `homersOtherFriends` to the other friends of Homer.

const homersOtherFriends = "change me";

// EXERCISE 3
// Set the variable `ageOfThirdPerson` to the age of the third person.

const ageOfThirdPerson = "change me";

// EXERCISE 4
// Set the variable `mothersNameOfSecondPerson` to the mother's name of the second person.

const mothersNameOfSecondPerson = "change me";

// EXERCISE 5
// Set the variable `animalTypeOfLisasPet` to the type of animal that Lisa has as a pet.

const animalTypeOfLisasPet = "change me";

export {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animalTypeOfLisasPet,
};
