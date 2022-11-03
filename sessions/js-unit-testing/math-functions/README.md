# Testing Math Functions

This exercise offers first steps into the world of software testing. It's quite similar to the tests you have seen during the lecture, so don't be afraid ;)

## Task

Have a look at the [`index.js`](index.js): there are four functions, `add()`, `subtract()`, `multiply()`, and `divide()`.

Read them very carefully to understand what these functions are supposed to return.

Create an `index.test.js` file and import the functions from the `index.js`. Implement tests to make sure that the functions work properly.

Your tests should cover the following criteria (write one test case for each of them):

- `add()`

  - returns 5 if called with add(2, 3)
  - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
  - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)

- `subtract()`

  - returns 10 if called with add(15, 5)
  - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

- `multiply()`

  - returns 8 if called with add(2, 4)
  - returns a negative value if only the first argument is negative
  - returns a negative value if only the second argument is negative
  - returns a positive value if called with two negative arguments

- `divide()`
  - returns 3 if called with add(9, 3)
  - returns "You should not do this!" if called with 0 as second argument

## Notes

- Make sure to run `npm install` first.
- You can run the test watch mode via the command `npm run test:watch`
- You only have to touch the [index.test.js](index.test.js) file.
