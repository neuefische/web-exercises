# React State 2: Table Reservation

In this challenge, there is an app to reserve a table at a restaurant.

Have a look at the [`Counter Component`](./src/components/Counter.jsx): there is a state which gets updated when the buttons are clicked.

In the `./src/App.jsx` file, however, there is a sentence saying "You are going to reserve a table for 2 people." The number should not be hard coded, but equal the current people count and need to be updated on every button click.

## Task

Lift the `people` state up so that

1. it still gets updated by the `Counter` component and
2. the actual people count is dynamically displayed in the `App` component.

You can use the following hints as guideline:

- Move the `people` state to the `App` component.
- In the `App` component, you want to have two helper functions to `handle` adding and subtracting a person from the `people` state.
- Pass your `handle` functions to the `Counter` component:
  - use one prop for each of them;
  - the prop should have the same name as the `handle` function, but should start with `on` instead of `handle` (Hint: `onDelete={handleDelete}`).
- In the `Counter` component
  - receive the two newly created props and
  - pass them to the correct button's `onClick` prop. You do **not** need to use an anonymous function here. Instead of writing `onClick={() => onSomeEvent()}` you can pass the function directly like this `onClick={onSomeEvent}`.

## Notes

- You only have to touch the `./src/App.jsx` and `./src/components/Counter.jsx` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
