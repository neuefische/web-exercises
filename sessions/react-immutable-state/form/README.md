# React Immutable State: Form

In this challenge you will move mountains - well, at least figuratively.

## Task

- Start the development server and make yourself familiar with the application.
- Open your browser and try to edit the text in the input fields. It won't work.
- Check the [`Form component`](components/Form/index.js): The three input fields have predefined values, but you cannot change them yet.
- Your task is to write the logic for the `handle` functions in order to update the state accordingly.

> 💡 The `Form` component uses "controlled components" for the inputs. It has a state to constantly store the input values. It re-renders on every change of an input to refresh the value displayed in the UI.
>
> This is in contrast to the approach using "uncontrolled components", that we have seen mostly. Here the input values get stored in state when the form is submitted.

### Updating with Spread Syntax

Write the logic for `handleNameChange`, `handleAltitudeChange`, and `handleMountainRangeChange`.

- Check the structure of the `mountain` object in state. It contains two keys: the `name` as string and the `values` object.
- Use `setMountain` to assign `event.target.value` to its corresponding key in the state. Make sure to create a copy of the `mountain` object when setting a new state.
- Note that the `altitude` and `mountainRange` keys are not at the top level of the `mountain` object; looks like you need to make a copy of this second level as well before you assign any new value.

> ✨ You should now be able to change the values of the input fields and see these changes in the output area at the bottom.

### Bonus: Updating with the `useImmer` hook

Updating complex states can quickly become difficult. This is where the `useImmer` hook comes in handy.

Refactor the `handle` functions with the help of the `useImmer` hook.

You can use the following hints as guideline:

- `immer` and `useImmer` are already installed, so you just have to import the `useImmer` hook into the [`Form`](components/Form/index.js) component.
- Update the state declaration: change `setMountain` to `updateMountain` and `useState({...})` to `useImmer({...})`.
- Rewrite the `handle` functions: use the `draft` object and dot-notation to reach the keys to which you want to assign a new value.

## Notes

- You only have to touch the `./components/Form/index.js` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
