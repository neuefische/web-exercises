# `while` loop

In contrast to for loops, a `while` loop does not need to know how many times it will run in advance. It will run if a condition is met, and will stop otherwise.

Let's create a couple of random numbers and stop if they grow too big!

## Task

Looking at the `./index.js`, there are two variables:

- `number`: a random number, set in each iteration of the while loop
- `count`: the number of iterations, increased by 1 everytime the while loop runs

Create a `while` loop that

- runs if `number` is less or equal to 0.9,
- increments `count` by 1 in each iteration
- logs `number` to the console
- sets `number` to a random number; you can use `Math.random()` here.

If you're done, test your loop by refreshing the browser several times and watching the console!

Please switch to the `./index.js` file and be random!

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
