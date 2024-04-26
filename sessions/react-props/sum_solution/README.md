# Sum

In this exercise, you will pass two props to a component and and use them to calculate the sum.

## Task

Look at the `./src/App.js` file: the `App` component returns a default heading element which you need to replace with a custom component. Your task is to write a `Sum` component which calculates the sum of its two props and renders the result.

You can use the following hints as guideline:

- Write the `Sum` component inside of the `src/App.js`.
  - It accepts two props called `valueA` and `valueB` (make sure to destructure them).
  - It returns an HTML element and uses both props to dynamically render something like "1 + 2 = 3" (according to the props).
- Inside of the return statement of your `App` component, replace the heading with your `Sum` component and pass it both props with values of your choice.

## Notes

- You only have to touch the `./src/App.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open the displayed URL in a browser.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

> The `npm run start` script runs automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
