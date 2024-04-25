import * as exercises from "./index";

test('Exercise 1: course is "Web Development"', () => {
  expect(exercises.course).toEqual("Web Development");
});

test('Exercise 2: name is "John", years is 30 and isAdmin is false', () => {
  expect(exercises.name).toEqual("John");
  expect(exercises.age).toEqual(30);
  expect(exercises.isAdmin).toEqual(false);
});

test('Exercise 3: dogName is "Pluto", dogBreed is husky and dogAge is 5', () => {
  expect(exercises.dogName).toEqual("Pluto");
  expect(exercises.dogBreed).toEqual("husky");
  expect(exercises.dogAge).toEqual(5);
});

test('Exercise 4: personLastname is "Main" and the object moreInformation contains two key/values: firstName: "Alex" and age: 24', () => {
  expect(exercises.personLastName).toEqual("Main");
  expect(exercises.moreInformation).toHaveProperty("age", 24);
  expect(exercises.moreInformation).toHaveProperty("firstName", "Alex");
});
