# React State 2: Colored Number

This challenge provides a [`src/components/Counter.js`](./src/components/Counter.js)component with two buttons which shall increment or decrement a count.

This count is then used by the [`src/components/ColoredNumber.js`](./src/components/ColoredNumber.js) component to display the actual number while its color is depending on the value.

For now, however, clicking the buttons doesn't change anything. Let's use state to fix that.

## Task

Refactor the [`src/components/Counter.js`](./src/components/Counter.js) component so that it updates the displayed number when clicking a button.

You can use the following hints as guideline:

- Looks like the `Counter` needs a state; can you think of an appropriate initial value?
- You need to pass the current count to the `ColoredNumber` component as the `value` prop.
- The buttons need to update the state accordingly, how can you achieve that?

## Notes

- You only have to touch the [`src/components/Counter.js`](./src/components/Counter.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
