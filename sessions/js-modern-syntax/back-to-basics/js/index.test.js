import * as exercises from "./index.js";

test("getRelocatedCity with default city2 sets country to 'Germany'", () => {
  const city1 = { name: "Hamburg", country: "Germany" };
  const result = exercises.getRelocatedCity(city1);

  expect(result).toMatchObject({ name: "Hamburg", country: "Germany" });
});

test("getRelocatedCity with specific city2 sets country to 'France'", () => {
  const city1 = { name: "Hamburg", country: "Germany" };
  const city2 = { name: "Paris", country: "France" };
  const result = exercises.getRelocatedCity(city1, city2);

  expect(result).toMatchObject({ name: "Hamburg", country: "France" });
});

test("getRelocatedCity includes 'name' and 'country' and allows extra properties in some solutions", () => {
  const city1 = { name: "Hamburg", country: "Germany", population: 1800000 };
  const city2 = { name: "Paris", country: "France" };
  const result = exercises.getRelocatedCity(city1, city2);

  expect(result).toMatchObject({ name: "Hamburg", country: "France" });
 
});

test("getRelocatedCity returns a new object without modifying city1", () => {
  const city1 = { name: "Hamburg", country: "Germany" };
  const city2 = { name: "Paris", country: "France" };
  const result = exercises.getRelocatedCity(city1, city2);

  expect(result).not.toBe(city1);
  expect(city1).toEqual({ name: "Hamburg", country: "Germany" });
});
