import {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
} from "./index.js";

describe("Array Methods with Strings", () => {
  test("hippoExists", () => {
    expect(hippoExists).toBe(true);
  });
  test("catStartingFromIndexFiveExists", () => {
    expect(catStartingFromIndexFiveExists).toBe(false);
  });
  test("firstAnimalStartingWithLetterP", () => {
    expect(firstAnimalStartingWithLetterP).toBe("penguin");
  });
  test("indexOfGiraffe", () => {
    expect(indexOfGiraffe).toBe(7);
  });
  test("animalsSortedAlphabetically", () => {
    expect(animalsSortedAlphabetically).toEqual([
      "cat",
      "dog",
      "elephant",
      "giraffe",
      "hippo",
      "horse",
      "kangoroo",
      "koala",
      "lion",
      "monkey",
      "panda",
      "penguin",
      "polar bear",
      "rabbit",
      "rhino",
      "sloth",
      "tiger",
      "zebra",
    ]);
  });
  test("anyAnimalEndsWithLetterZ", () => {
    expect(anyAnimalEndsWithLetterZ).toBe(false);
  });
  test("everyAnimalHasMoreThanTwoLetters", () => {
    expect(everyAnimalHasMoreThanTwoLetters).toBe(true);
  });
  test("sumOfAllAnimalCharacters", () => {
    expect(sumOfAllAnimalCharacters).toBe(102);
  });
});
