# React State 2: Table Reservation

In this challenge, you'll work on an app for reserving a table at a restaurant.

Take a look at the [`Counter Component`](./src/components/Counter.jsx): it contains a state that gets updated when the buttons are clicked.

In the `./src/App.jsx` file, there is a sentence that currently says, “You are going to reserve a table for 2 people.”. This number is hardcoded, but it should instead reflect the current people count dynamically and update with every button click.

## Tasks

Lift the `people` state up so that:

1. It still gets updated by the `Counter` component.
2. The current people count is dynamically displayed in the `App` component.

You can follow these hints as a guideline:

- Move the `people` state to the `App` component.
- In the `App` component, create two helper functions to handle adding and subtracting a person from the `people` state.
- Pass these `handle` functions to the `Counter` component:
  - Use a separate prop for each function.
  - Name the props starting with `on` instead of `handle` (e.g., `onDelete={handleDelete}`).
- In the `Counter` component:
  - Receive the two new props.
  - Assign them to the appropiate button's `onClick` prop. You do **not** need to use an anonymous function here. Instead of writing `onClick={() => onSomeEvent()}`, you can pass the function directly, like this: `onClick={onSomeEvent}`.

## Notes

- You only have to touch the `./src/App.jsx` and `./src/components/Counter.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
