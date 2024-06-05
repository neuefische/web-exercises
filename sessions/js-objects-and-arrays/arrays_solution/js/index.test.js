import {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
} from "./index";

test("Exercise 1: Array exampleArray contains a number and a string", () => {
  expect(exampleArray).toEqual(
    expect.arrayContaining([expect.any(String), expect.any(Number)])
  );
});

test("Exercise 2: Array nestedArray contains an array", () => {
  expect(nestedArray).toEqual(expect.arrayContaining([expect.any(Array)]));
});

test("Exercise 3: firstNumber is 20", () => {
  expect(firstNumber).toEqual(20);
});

test("Exercise 4: Array fruits first Element is mango", () => {
  expect(fruits[0]).toEqual("mango");
});

test("Exercise 5: nestedNumber is 40", () => {
  expect(nestedNumber).toEqual(40);
});

test("Exercise 6: Array petsWithPush fourth element is rat and the length is 4", () => {
  expect(petsWithPush).toEqual(expect.arrayContaining(["rat"]));
  expect(petsWithPush).toHaveLength(4);
});

test("Exercise 7: Array fruitsWithPop contains no element with name mango and the length is 2", () => {
  expect(fruitsWithPop).not.toEqual(expect.arrayContaining(["mango"]));
  expect(fruitsWithPop).toHaveLength(2);
});

test("Exercise 8: Array unshiftedPets first element is hamster and the length is 4", () => {
  expect(unshiftedPets).toEqual(expect.arrayContaining(["hamster"]));
  expect(unshiftedPets).toHaveLength(4);
});

test("Exercise 9: Array shiftedFruits contains no element with name apple and the length is 2", () => {
  expect(shiftedFruits).not.toEqual(expect.arrayContaining(["apple"]));
  expect(shiftedFruits).toHaveLength(2);
});
