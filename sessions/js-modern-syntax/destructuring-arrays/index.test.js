import * as exercises from "./index";

test("Exercise 1: name is Egg, price is 0.25 and quantity is 12", () => {
  expect(exercises.name).toEqual("Egg");
  expect(exercises.price).toEqual(0.25);
  expect(exercises.quantity).toEqual(12);
});

test('Exercise 2: firstNameOfChris is "Chris", lastNameOfChris is "Owen" and ageOfChris is 12', () => {
  expect(exercises.firstNameOfChris).toEqual("Chris");
  expect(exercises.lastNameOfChris).toEqual("Owen");
  expect(exercises.ageOfChris).toEqual(12);
});

test('Exercise 3: firstNameOfAlex is "Alex", lastNameOfAlex is "Main"', () => {
  expect(exercises.firstNameOfAlex).toEqual("Alex");
  expect(exercises.lastNameOfAlex).toEqual("Main");
});

test('Exercise 4: lastName is "Alexandare"', () => {
  expect(exercises.lastName).toEqual("Alexandare");
});

test('Exercise 5: student1 is "Chris", student2 is "Ahmad", student3 is "Antigoni", student4 is "Toby" and student5 is "Sam"', () => {
  expect(exercises.student1).toEqual("Chris");
  expect(exercises.student2).toEqual("Ahmad");
  expect(exercises.student3).toEqual("Antigoni");
  expect(exercises.student4).toEqual("Toby");
  expect(exercises.student5).toEqual("Sam");
});

test("Exercise 6: result is 44", () => {
  expect(exercises.result).toEqual(44);
});
