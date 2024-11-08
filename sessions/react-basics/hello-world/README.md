# Hello World React Component

Welcome to the React Universe!

Have a look at the [App.jsx](./src/App.jsx) file: you will find a default export function called `App` which returns a `<div>`.

Start you application and open it in your browser: the content of the `<div>` ("Say hello...") should be visible there as well.

Now, let us cherish a tradition and render "Hello world!".

## Tasks

### Render by Modifying the `App` component

Render a heading with the text "Hello world!" to the browser. To do so, change the `div` into an `h1` and change its text accordingly.

Look in the browser and be proud: you have successfully entered the React World!

### Create Your First Custom Component

Let's go a step further and outsource the heading to its own component.

To do so, create a component (i.e. function) called `HelloWorld`.

Use the following hints as guideline:

- In the [App.jsx](src/App.jsx), create a new function called `HelloWorld()` (it does not matter whether you write it above or below the `App` function - but not inside it!).
- `HelloWorld()` should return the same HTML heading as in the first task above.
- In the return statement of the `App` function, replace the `h1` with your `HelloWorld` component.
- Look at the browser and be amazed: nothing has changed, but you've built and used your first React component!

## Notes

- You only have to touch the [App.jsx](src/App.jsx) file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
