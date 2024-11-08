# JS Unit Testing with People

This exercise lets you perform Test Driven Development: writing the test first and implement the function afterwards. Let's do it!

## Tasks

Have a look at the following files:

- the [index.js](index.js) exports a couple of functions, but the implementation is missing (except the first one).
- the [index.test.js](index.test.js) imports these functions; there is a `people` array you can use for testing your functions. Finally, the test cases are predefined, but not yet implemented (except the first one).

Read the description of the test cases very carefully to understand what these functions are supposed to return. Use the first function `getFirstNames()` as reference.

Note the matcher `toEqual` here: it is used to compare object instances (instead of comparing primitive values with `toBe()`, see [the Jest docs](https://jestjs.io/docs/expect#toequalvalue)).

Your task is to write the test first and implement the function afterwards. Let's make all tests green!

## Notes

- Make sure to run `npm install` first.
- You can run the test watch mode via the command `npm run test`.
  - Note that all tests are green at the beginning; as soon as you have defined an expectation, the test turns red and you can start implementing the function to make the test pass correctly.
- In most cases, you will want to use `toEqual`as a matcher.

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
