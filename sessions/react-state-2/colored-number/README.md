# React State 2: Colored Number

This challenge provides a `./src/components/Counter.jsx` component with two buttons that increment or decrement a count.

The current count is passed to the `./src/components/ColoredNumber.jsx` component, which displays the number with a color that depends on its value.

However, at the moment, clicking the buttons doesn't change anything. Let's use state to fix that.

## Tasks

Refactor the `./src/components/Counter.jsx` component so that it updates the displayed number when a button is clicked.

You can follow these hints as a guideline:

- It seems like the `Counter` component needs a state. What would be an appropriate initial value?
- Pass the current count to the `ColoredNumber` component via the `value` prop.
- Update the state when the buttons are clicked. How can you achieve that?

## Notes

- You only have to touch the `./src/components/Counter.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
