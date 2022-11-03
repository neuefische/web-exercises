import {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animaltypeOfLisasPet,
} from "./index";

test('Exersice 1: nameOfFirstPerson is "Homer"', () => {
  expect(nameOfFirstPerson).toBe("Homer");
});

test('Exersice 2: homersOtherFriends are "Barney Gumble", "Carl Carlson" and "Lenny Leonard"', () => {
  expect(homersOtherFriends).toEqual([
    "Barney Gumble",
    "Carl Carlson",
    "Lenny Leonard",
  ]);
});

test("Exersice 3: ageOfThirdPerson is 10", () => {
  expect(ageOfThirdPerson).toEqual(10);
});

test('Exersice 4: mothersNameOfSecondPerson is "Jacqueline Bouvier"', () => {
  expect(mothersNameOfSecondPerson).toEqual("Jacqueline Bouvier");
});

test("Exersice 5: animaltypeOfLisasPet is dog", () => {
  expect(animaltypeOfLisasPet).toEqual("dog");
});
