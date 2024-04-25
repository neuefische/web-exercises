import {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
} from "./index";

test("Exercise 1: Object personWithNameAgeEmail has properties name, age and email", () => {
  expect(personWithNameAgeEmail).toHaveProperty("name");
  expect(personWithNameAgeEmail).toHaveProperty("age");
  expect(personWithNameAgeEmail).toHaveProperty("email");
});

test('Exercise 2: nameOfAlex is "Alex" and ageOfAlex ist 24', () => {
  expect(nameOfAlex).toEqual("Alex");
  expect(ageOfAlex).toEqual(24);
});

test('Exercise 3: personToChange.name is "Alex" and personToChange.age is 35', () => {
  expect(personToChange).toHaveProperty("name", "Alex");
  expect(personToChange).toHaveProperty("age", 35);
});

test("Exercise 4: petPluto.age is 5 and petPluto.breed is husky", () => {
  expect(petPluto).toHaveProperty("age", 5);
  expect(petPluto).toHaveProperty("breed", "husky");
});
