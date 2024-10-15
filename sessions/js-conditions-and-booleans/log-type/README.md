# JS Conditions and Booleans: LogType

In this exercise you train to write a `switch` statement. Please also refer to the handout.

## Tasks

### Write switch Statement

- Open the file `js/index.js`.
- Declare a variable named `data`.
- Write a `switch` statement that checks the result of [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) data and logs a different string depending on the type or value of `data`.

The possible strings to log are:
- "undefined!"
- "null!"
- "number!"
- "not a number!" (for NaN)
- "string!"
- "boolean!"
- "function!"
- "object!"
- "array!"
- "I have no idea!" (for any other type)

> 💡 Hint: For checking if `data` is `null`, an `array`, or a regular `object`, you’ll need to handle these cases specifically in JavaScript, as `typeof` returns "object" for all of them.


### Running the Code

> 💡 Since this project is JavaScript only, there is nothing to preview in the browser. You will run the JavaScript code directly in the terminal using Node.js.

- To run your code:
  - Open your terminal.
  - Navigate to the folder where `index.js` is located.
  - Run `npm run start` to execute the `index.js` file using Node.js.
  - The script will run using Node.js, and the output will be logged in the terminal.
  - Check the terminal output to see if the correct messages are displayed based on the weather conditions and temperature.

### Notes

- You only have to touch the `index.js` file.