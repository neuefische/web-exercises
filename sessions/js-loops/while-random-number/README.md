# `while` loop

In contrast to for loops, a `while` loop does not need to know how many times it will run in advance. It will run if a condition is met, and will stop otherwise.

Let's create a couple of random numbers and stop if they grow too big!

## Task

Looking at the [`index.js`](./index.js), there are two variables:

- `number`: a random number, set in each iteration of the while loop
- `count`: the number of iterations, increased by 1 everytime the while loop runs

Create a `while` loop that

- runs if `number` is less or equal to 0.9,
- increments `count` by 1 in each iteration
- logs `number` to the console
- sets `number` to a random number; you can use `Math.random()` here.

If you're done, test your loop by refreshing the browser several times and watching the console!

Please switch to the [`index.js`](./index.js) file and be random!

## Development

### CodeSandbox

This project is JavaScript only so there is nothing to view in the "Browser" tab. Please select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to run the main JavaScript file using `node`
- `npm run test` to run the tests once
- `npm run lint` to run the linter

> 💡 Since this project is JavaScript only there is nothing to preview in the browser. Use `npm run test` to check your progress or `npm run start` to run the code.
