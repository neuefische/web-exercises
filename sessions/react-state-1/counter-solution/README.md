# React State: Counter

In the [`src/App.js`](./src/App.js) you'll find the basic building blocks of a counter.

The general idea here is that the counter should count up when the plus button is clicked, and count down when the minus button is clicked.

Currently, the value `0` is hardcoded and doesn't respond to the buttons being clicked.

## Task

Refactor the code so that it features React state and makes use of it. Declare a state variable and make sure to have the buttons update said state variable.

You can use the following hints as a guideline:

- `let` doesn't seem to be the appropriate way to declare a variable in this instance.
- Is there a built-in React function you can use instead?
  - Make sure to import said function.
- At present, the `<button>`s' event handler is logging an emoji to the console.
  - Clearly, the event handler should be handling a different type of functionality.

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
