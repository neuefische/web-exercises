import { myFunction } from "./index.js";

test('myFunction() returns "It works!"', () => {
  const result = myFunction();
  expect(result).toBe("It works!");
});
