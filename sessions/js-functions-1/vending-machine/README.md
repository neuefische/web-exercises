# JavaScript exercises for basic functions

## Task

### Vending Machine

#### Goal

Write a function that mimics the basic features of a vending machine.

> ⚠️ Read all of the tasks carefully before starting to code!

1. Write a function with the name `vendingMachine`.
2. The function should include a `drink` parameter.
3. In the function body, implement a `console.log()` that logs a string to the console including the `drink` parameter, informing the user that they have received their drink successfully. The result should look something like this: _"Here's your apple juice!"_
4. Call your function with a drink of your choice (such as "soda", etc) and check the console whether your function works as intended.

#### Hint

You may need to think about how to **combine** your `drink` parameter and the rest of the string
inside of your `console.log()` so that the result is a complete sentence.

#### Question

What happens if you call the `vendingMachine` function without an argument?

### Bonus

5. Find a way to assign a **default value** to a parameter in case the function is called without an argument. This needs to be implemented when you're _declaring_ the function, not when you're _calling_ it.

## Notes

- You only have to touch the `./js/index.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.
