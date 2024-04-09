# JavaScript exercises for basic functions

## Task

### Vending Machine - Advanced ✨

#### Goal

Write a **fat arrow function/ arrow function expression** that adds some additional features to our basic vending machine.
The function behavior we're looking for is to get different (or _no_) drinks each when we pass the numbers 0, 1, 2, 3 and 4 and above to the `vendingMachine` function as an argument.

> ⚠️ Read all of the tasks carefully before starting to code!

1. Remember the `vendingMachine` function you've created as part of the Functions 1 challenges? Now write the same function still called `vendingMachine`, but as an **arrow function expression**.
2. The function should include one parameter: `money`.
3. In the function body, implement the following logic:
   - an **early return** for the condition `money === 0`
   - an if condition each (!) for `money === 1`, `money === 2` and `money === 4` that log different strings to the console, such as _"Here's your water!"_, _"Here's your juice!"_, etc.
   - another if condition for when `money` either equals `4` or anything above that logs _"Too much money!"_
     to the console.
4. Call your function with a number!

## Notes

- You only have to touch the `./js/index.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run start` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
