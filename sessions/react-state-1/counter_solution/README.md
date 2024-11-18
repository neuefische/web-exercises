# React State 1: Counter

In the `./src/App.jsx` file, you'll find the basic building blocks of a counter.

The goal is for the counter to increment when the plus button is clicked and decrement when the minus button is clicked.

Currently, the value `0` is hardcoded and does not respond to button clicks.

## Tasks

Refactor the code to use React state and ensure that the buttons update the state variable correctly. Declare a state variable, and connect the buttons so they adjust this state variable.

You can follow these hints as a guideline:

- Using `let` doesn't seem to be the right approach for declaring a variable in this scenario.
- Is there a built-in React function you can use instead?
  - Make sure to import this function.
- Currently, the `<button>`s' event handlers log an emoji to the console.
  - The event handlers should instead handle a different type of functionality.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
