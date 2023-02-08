# React State: Emoji Passcode Checker

In the [`src/App.js`](./src/App.js) file, you can find the building blocks for an emoji passcode checker.

Looking at the `validCode` variable, we understand that the code consists of a sequence of three emojis. Each button click should "lock in" one emoji. If the code that was entered matches the passcode, your code will be confirmed as valid. The reset button should reset the code, so you can start over. Toward the bottom of the `App` function you'll find a line that conditionally generates a `p` element as soon as the input code matches the `validCode` declared at top of the function.

## Task

You can use the following hints as a guideline:

- Most importantly, you need to import a built-in React function you'll be using during this challenge.
- You need to make sure to declare a state variable.
- Write a `handleClick` function that updates the state variable according to which emoji button was clicked. The `handleClick` function will be called in every onClick of the buttons.

## Notes

- You only have to touch the [`src/App.js`](./src/App.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
