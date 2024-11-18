# React State 1: Box

In the `./src/App.jsx` file, there is a button that toggles an `isActive` variable. You can check the console for its value after clicking the button.

Depending on the `isActive` variable, a class called `box--active` is added to the `<div>`, which should change the `<div>`'s color.

However, the color stays the same because React is not informed that the UI needs to re-render.

## Tasks

Refactor the code so that React re-renders the `App` component whenever `isActive` changes.

You can follow these hints as a guideline:

- Replace the `let` variable with the `useState` function.
  - Don't forget to import `useState` from React.
  - Set the initial state value to `false`.
- Inside the `handleClick` function, use the `set` function from `useState` to update the value of the `isActive` state.

Once you’ve implemented these changes, you should be able to toggle the box’s color using the button! 🎉

### Bonus

Can you use the new state to toggle the button text between “Activate” and “Deactivate”?

### Hacker Bonus

Check the console and pay close attention to the logged value of `isActive`. You will notice that `console.log()` does not immediately show the value you just set with the `set` function one line before. For example, if you set `isActive` to `true`, it will log `false` instead, and vice versa.

This is not a bug - it is the expected behavior due to how React’s state works fundamentally.

Can you explain why this happens?

## Notes

- You do not need to make changes to the return statement of the `App` component (except for the bonus task).
- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
