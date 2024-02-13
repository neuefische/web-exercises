import {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
} from "./index.js";

describe("Array with Animal Objects", () => {
  test("firstAnimalStartingWithLetterG", () => {
    expect(firstAnimalStartingWithLetterG).toEqual({
      name: "giraffe",
      weight: 600,
      continents: ["Africa"],
    });
  });
  test("indexOfAnimalWithNameLongerFive", () => {
    expect(indexOfAnimalWithNameLongerFive).toBe(2);
  });
  test("animalsSortedAlphabetically", () => {
    expect(animalsSortedAlphabetically).toEqual([
      {
        name: "cat",
        weight: 4,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      {
        name: "dog",
        weight: 10,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
      { name: "giraffe", weight: 600, continents: ["Africa"] },
      { name: "hippo", weight: 1500, continents: ["Africa"] },
      {
        name: "horse",
        weight: 500,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      { name: "kangaroo", weight: 70, continents: ["Australia"] },
      { name: "koala", weight: 13, continents: ["Australia"] },
      { name: "lion", weight: 200, continents: ["Africa"] },
      {
        name: "monkey",
        weight: 20,
        continents: ["South-America", "Asia", "Africa"],
      },

      { name: "panda", weight: 120, continents: ["Asia"] },
      {
        name: "penguin",
        weight: 12,
        continents: ["Africa", "Australia", "Antarctica", "South-America"],
      },
      {
        name: "polar bear",
        weight: 450,
        continents: ["North-America", "Asia", "Arctic"],
      },
      {
        name: "rabbit",
        weight: 2,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
      { name: "sloth", weight: 8, continents: ["South-America"] },
      { name: "tiger", weight: 150, continents: ["Asia"] },

      { name: "zebra", weight: 300, continents: ["Africa"] },
    ]);
  });

  test("animalsSortedByWeightStartingWithLowest", () => {
    expect(animalsSortedByWeightStartingWithLowest).toEqual([
      {
        name: "rabbit",
        weight: 2,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      {
        name: "cat",
        weight: 4,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      { name: "sloth", weight: 8, continents: ["South-America"] },
      {
        name: "dog",
        weight: 10,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      {
        name: "penguin",
        weight: 12,
        continents: ["Africa", "Australia", "Antarctica", "South-America"],
      },
      { name: "koala", weight: 13, continents: ["Australia"] },
      {
        name: "monkey",
        weight: 20,
        continents: ["South-America", "Asia", "Africa"],
      },
      { name: "kangaroo", weight: 70, continents: ["Australia"] },
      { name: "panda", weight: 120, continents: ["Asia"] },
      { name: "tiger", weight: 150, continents: ["Asia"] },
      { name: "lion", weight: 200, continents: ["Africa"] },

      { name: "zebra", weight: 300, continents: ["Africa"] },
      {
        name: "polar bear",
        weight: 450,
        continents: ["North-America", "Asia", "Arctic"],
      },

      {
        name: "horse",
        weight: 500,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      { name: "giraffe", weight: 600, continents: ["Africa"] },
      { name: "hippo", weight: 1500, continents: ["Africa"] },

      { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
      { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
    ]);
  });
  test("animalsSortedByWeightReversed", () => {
    expect(animalsSortedByWeightReversed).toEqual([
      { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
      { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
      { name: "hippo", weight: 1500, continents: ["Africa"] },
      { name: "giraffe", weight: 600, continents: ["Africa"] },
      {
        name: "horse",
        weight: 500,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      {
        name: "polar bear",
        weight: 450,
        continents: ["North-America", "Asia", "Arctic"],
      },
      { name: "zebra", weight: 300, continents: ["Africa"] },
      { name: "lion", weight: 200, continents: ["Africa"] },
      { name: "tiger", weight: 150, continents: ["Asia"] },
      { name: "panda", weight: 120, continents: ["Asia"] },
      { name: "kangaroo", weight: 70, continents: ["Australia"] },
      {
        name: "monkey",
        weight: 20,
        continents: ["South-America", "Asia", "Africa"],
      },

      { name: "koala", weight: 13, continents: ["Australia"] },
      {
        name: "penguin",
        weight: 12,
        continents: ["Africa", "Australia", "Antarctica", "South-America"],
      },
      {
        name: "dog",
        weight: 10,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      { name: "sloth", weight: 8, continents: ["South-America"] },
      {
        name: "cat",
        weight: 4,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
      {
        name: "rabbit",
        weight: 2,
        continents: [
          "Europe",
          "Asia",
          "Africa",
          "Australia",
          "North-America",
          "South-America",
        ],
      },
    ]);
  });
  test("animalWithWeightMoreThanFivehundredExists", () => {
    expect(animalWithWeightMoreThanFivehundredExists).toBe(true);
  });
  test("allAnimalsInEuropeWeighLessThanOnehundred", () => {
    expect(allAnimalsInEuropeWeighLessThanOnehundred).toBe(false);
  });
  test("weightOfAllAnimalsInAfrica", () => {
    expect(weightOfAllAnimalsInAfrica).toBe(9148);
  });
  test("averageWeightOfAllAnimalsInAfrica", () => {
    expect(averageWeightOfAllAnimalsInAfrica).toBeCloseTo(762.33);
  });
});
