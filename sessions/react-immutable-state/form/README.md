# React Immutable State: Form

In this challenge you will move mountains - well, at least figuratively.

## Task

- Start the development server and make yourself familiar with the application. Check the [`Form component`](components/Form/index.js) as well.
- There are three input fields with predefined values, but you cannot change them yet.
- Your task is to write the logic for the `handle` functions in order to update the state accordingly.

> 💡 The `Form` component has its own state in order to re-render on every user input; it is thus called a "controlled component". In contrast, we have mostly seen "uncontrolled components", i.e. the state and its updater functions are passed to the form via props.

### Updating with Spread Syntax

Write the logic for `handleNameChange`, `handleAltitudeChange`, and `handleMountainRangeChange`.

- Check the structure of the `mountain` state: it contains two keys, `name` and `values`; the ladder is an object.
- Use `setMountain` to assign `event.target.value` to its corresponding state key. Make sure to make a copy of the `mountain` state first before you change a value.
- Note that the `altitude` and `mountainRange` keys are not at the top level of the `mountain` state; looks like you need to make a copy of this second level as well before you assign any new value.

> ✨ You should now be able to change the values of the input fields and see these changes in the output area at the bottom.

### Bonus: Updating with the `useImmer` hook

Updating complex states can easily become difficult. This is where the `useImmer` hook comes in handy.

Refactor the `handle` functions with the help of the `useImmer` hook.

You can use the following hints as guideline:

- `immer` and `useImmer` are already preinstalled, so you just have to import the `useImmer` hook into the [`Form component`](components/Form/index.js).
- Update the state declaration: change `setMountain` to `updateMountain` and `useState({...})` to `useImmer({...})`.
- Rewrite the `handle` functions: use the `draft` object and dot-notation to reach the keys to which you want to assign a new value.

## Notes

- You only have to touch the [`components/Form/index.js`](./components/Form/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)
- `npm run storybook` to start the storybook development server

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
