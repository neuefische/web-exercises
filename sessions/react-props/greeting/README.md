# Greeting

With React, you can build components and reuse them as often as you like. However, you sometimes want to slightly adjust the component according to its environment, e.g. to use a different text to be displayed.

Let us use `props` to make components totally reusable!

## Task

### Create a Component with props

Look at the [`src/App.js`](./src/App.js) file: the `App` component returns a heading which wants to be replaced by a component. Your task is to write a `Greeting` component which renders a greeting according to its prop.

You can use the following hints as guideline:

- Write the `Greeting` component inside of the [`App.js`](src/App.js).
  - It accepts a prop called `name` (make sure to destructure it).
  - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
- Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.

### Conditional Rendering with props

Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.

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
