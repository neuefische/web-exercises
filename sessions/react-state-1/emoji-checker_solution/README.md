# React State 1: Emoji Passcode Checker

In the `./src/App.jsx` file, you will find the building blocks for an emoji passcode checker.

The `validCode` variable defines the passcode as a sequence of three emojis. Each button click should "lock in" one emoji. If the entered code matches the passcode, it will be confirmed as valid. The reset button should reset the code, so you can start over. Toward the bottom of the `App` function, you'll find a line that conditionally generates a `p` element when the input code matches the `validCode` declared at the top of the function.

## Tasks

You can follow these hints as a guideline:

- Import a built-in React function that you will need for this challenge.
- Declare a state variable to keep track of the input code.
- Implement the `handleClick` function to update the state variable based on the emoji button that was clicked.
  - Hint: Use string concatenation to append something to the end of a string.
- Implement the functionality of the reset button to clear the input code and allow the user to start over.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
