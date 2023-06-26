# React State 2: Colored Number

This challenge provides a `./src/components/Counter.js`component with two buttons which shall increment or decrement a count.

This count is then used by the `./src/components/ColoredNumber.js` component to display the actual number while its color is depending on the value.

For now, however, clicking the buttons doesn't change anything. Let's use state to fix that.

## Task

Refactor the `./src/components/Counter.js` component so that it updates the displayed number when clicking a button.

You can use the following hints as guideline:

- Looks like the `Counter` needs a state; can you think of an appropriate initial value?
- You need to pass the current count to the `ColoredNumber` component as the `value` prop.
- The buttons need to update the state accordingly, how can you achieve that?

## Notes

- You only have to touch the `./src/components/Counter.js` file.

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
