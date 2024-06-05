import * as exercises from "./index.js";

test("Exercise 1: age is 32, contact has all other information", () => {
  expect(exercises.age).toBe(32);
  expect(exercises.contact).toHaveProperty("name", "Jane Doe");
  expect(exercises.contact).toHaveProperty("email", "jane@doe.com");
  expect(exercises.contact).toHaveProperty("phone", "12345");
});

test('Exercise 2: "first" is "one", "second" is "two", "restOfList" is an array with "three", "four", "five"', () => {
  expect(exercises.first).toBe("one");
  expect(exercises.second).toBe("two");
  expect(exercises.restOfList).toEqual(["three", "four", "five"]);
});

test("Exercise 3: sum is 20", () => {
  expect(exercises.sum).toBe(20);
});

test("Exercise 4: result is 6", () => {
  expect(exercises.result).toBe(6);
});

test('Exercise 5: allFruits is an array starting with "cherry"', () => {
  expect(exercises.allFruits).toEqual([
    "cherry",
    "apple",
    "banana",
    "orange",
    "papaya",
  ]);
});
