import {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animaltypeOfLisasPet,
} from "./index";

test('Exercise 1: nameOfFirstPerson is "Homer"', () => {
  expect(nameOfFirstPerson).toBe("Homer");
});

test('Exercise 2: homersOtherFriends are "Barney Gumble", "Carl Carlson" and "Lenny Leonard"', () => {
  expect(homersOtherFriends).toEqual([
    "Barney Gumble",
    "Carl Carlson",
    "Lenny Leonard",
  ]);
});

test("Exercise 3: ageOfThirdPerson is 10", () => {
  expect(ageOfThirdPerson).toEqual(10);
});

test('Exercise 4: mothersNameOfSecondPerson is "Jacqueline Bouvier"', () => {
  expect(mothersNameOfSecondPerson).toEqual("Jacqueline Bouvier");
});

test("Exercise 5: animaltypeOfLisasPet is dog", () => {
  expect(animaltypeOfLisasPet).toEqual("dog");
});
