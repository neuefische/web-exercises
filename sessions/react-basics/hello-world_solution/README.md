# Hello World React Component

Welcome to the React Universe!

Have a look at the [App.js](./src/App.js) file: you will find a default export function called `App` which returns a `<div>`.

Check the browser tab of the codesandbox: the content of the `<div>` ("Say hello...") should be visible there as well.

Now, let us cherish a tradition and render "Hello world!".

## Task

### Render by Modifying the `App` component

Render a heading with the text "Hello world!" to the browser. To do so, change the `div` into an `h1` and change its text accordingly.

Look in the browser and be proud: you have successfully entered the React World!

### Create Your First Custom Component

Let's go a step further and outsource the heading to its own component.

To do so, create a component (i.e. function) called `HelloWorld`.

Use the following hints as guideline:

- In the [App.js](src/App.js), create a new function called `HelloWorld()` (it does not matter whether you write it above or below the `App` function - but not inside it!).
- `HelloWorld()` should return the same HTML heading as in the first task above.
- In the return statement of the `App` function, replace the `h1` with your `HelloWorld` component.
- Look at the browser and be amazed: nothing has changed, but you've built and used your first React component!

## Notes

- You only have to touch the [App.js](src/App.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
