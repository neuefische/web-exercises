import { greet } from "./greet.js";

test('returns "Hello Jane!" if called greet("Jane")', () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

test('returns "Hello stranger!" if called greet()', () => {
  const result = greet();
  expect(result).toBe("Hello stranger!");
});

test('returns "Hello coach!" if called greet("<YOUR-NAME>")', () => {
  const result = greet("<YOUR-NAME>");
  expect(result).toBe("Hello coach!");
});
