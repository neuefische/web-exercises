# Sum

In this exercise, you will pass two props to a component and and use them to calculate the sum.

## Task

Look at the [`src/App.js`](./src/App.js) file: the `App` component returns a default heading element which you need to replace with a custom component. Your task is to write a `Sum` component which calculates the sum of its two props and renders the result.

You can use the following hints as guideline:

- Write the `Sum` component inside of the [`App.js`](src/App.js).
  - It accepts two props called `valueA` and `valueB` (make sure to destructure them).
  - It returns an HTML element and uses both props to dynamically render something like "1 + 2 = 3" (according to the props).
- Inside of the return statement of your `App` component, replace the heading with your `Sum` component and pass it both props with values of your choice.

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
