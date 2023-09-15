# Testing Math Functions

This exercise offers first steps into the world of software testing. It's quite similar to the tests you have seen during the lecture, so don't be afraid ;)

## Task

Have a look at the `index.js`: there are four functions, `add()`, `subtract()`, `multiply()`, and `divide()`.

Read them very carefully to understand what these functions are supposed to return.

Create an `index.test.js` file and import the functions from the `./index.js`. Implement tests to make sure that the functions work properly.

Your tests should cover the following criteria (write one test case for each of them):

- `add()`

  - returns 5 if called with add(2, 3)
  - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
  - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)

- `subtract()`

  - returns 10 if called with subtract(15, 5)
  - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

- `multiply()`

  - returns 8 if called with multiply(2, 4)
  - returns a negative value if only the first argument is negative
  - returns a negative value if only the second argument is negative
  - returns a positive value if called with two negative arguments

- `divide()`
  - returns 3 if called with divide(9, 3)
  - returns "You should not do this!" if called with 0 as second argument

## Notes

- You only have to touch the `index.test.js` file.

## Development

> ❗️ This project is JavaScript only. Please check the browser console (<kbd>⌥</kbd><kbd>⌘</kbd><kbd>I</kbd>) for the output or run the tests to see the results.

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
