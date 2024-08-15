import {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
} from "./index";

describe("Exercise 1: map", () => {
  test("onlyTitles", () => {
    expect(onlyTitles).toEqual([
      "Crepes",
      "Scrambled Eggs",
      "Vegan Salmon",
      "Carrot Cake",
    ]);
  });
  test("titlesWithDuration", () => {
    expect(titlesWithDuration).toEqual([
      "Crepes (60min)",
      "Scrambled Eggs (20min)",
      "Vegan Salmon (4320min)",
      "Carrot Cake (120min)",
    ]);
  });
  test("timePerServing", () => {
    expect(timePerServing).toEqual([20, 10, 432, 12]);
  });
  test("extra: allTitlesInOneString", () => {
    expect(allTitlesInOneString).toBe(
      "Crepes, Scrambled Eggs, Vegan Salmon, Carrot Cake"
    );
  });
});

describe("Exercise 2: filter", () => {
  test("recipesThatOnlyTake60minutesOrLess", () => {
    expect(recipesThatOnlyTake60minutesOrLess).toEqual([
      {
        title: "Crepes",
        duration: 60,
        ingredients: ["butter", "flour", "eggs", "milk", "salt"],
        servings: 3,
      },
      {
        title: "Scrambled Eggs",
        duration: 20,
        ingredients: ["eggs", "milk", "salt"],
        servings: 2,
      },
    ]);
  });
  test("allRecipesWithMoreThan2Servings", () => {
    expect(allRecipesWithMoreThan2Servings).toEqual([
      {
        title: "Crepes",
        duration: 60,
        ingredients: ["butter", "flour", "eggs", "milk", "salt"],
        servings: 3,
      },
      {
        title: "Vegan Salmon",
        duration: 60 * 24 * 3, // 3 days
        ingredients: [
          "carrots",
          "olive oil",
          "nori sheets",
          "liquid smoke",
          "soy sauce",
        ],
        servings: 10,
      },
      {
        title: "Carrot Cake",
        duration: 120,
        ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
        servings: 10,
      },
    ]);
  });
  test("allRecipesWithTitlesLongerThan12Characters", () => {
    expect(allRecipesWithTitlesLongerThan12Characters).toEqual([
      {
        title: "Scrambled Eggs",
        duration: 20,
        ingredients: ["eggs", "milk", "salt"],
        servings: 2,
      },
    ]);
  });
});
