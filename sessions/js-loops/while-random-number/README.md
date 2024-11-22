# JS Loops: `while`

Unlike `for` loops, a `while` loop does not need to know how many times it will run in advance. It will continue running as long as a specified condition is true and stop once that condition is no longer met.

Let's generate random numbers and stop once they become too large!

## Tasks

In `./index.js`, there are two variables:

- `number`: a random number, updated in each iteration of the `while` loop
- `count`: keeps track of the number of iterations, incremented by 1 every time the `while` loop runs

Create a `while` loop that:

- runs while `number` is less than or equal to 0.9,
- increments `count` by 1 in each iteration,
- logs `number` to the console,
- sets `number` to a new random number (using `Math.random()`).

Once complete, test your loop by refreshing the browser a few times and checking the console output!

Switch to `./index.js` to get started!

## Notes

> ❗️ This project is JavaScript only. Please check the browser console (<kbd>⌥</kbd><kbd>⌘</kbd><kbd>I</kbd>) for the output or run the tests to see the results.

## Development

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
