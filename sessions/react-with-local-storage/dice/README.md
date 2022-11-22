# React with Local Storage: Dice 🎲

This dice rolling app rolls a die (d6 = six sided die). Now you want to show recent dice rolls in a list and store them in local storage.

## Task

### Lifting State Up

Look at the [`src/App.js`](./src/App.js) and [`src/components/D6Button/index.js`](./src/components/D6Button/index.js) files.

Lift up the `rolls` state into the `App` component. Pass the derived `currentRollValue` variable down to the `D6Button` and wire up a `onClick` handler to call the `handleRoll` function via props. Make sure everything still works as expected.

Now pass the `rolls` down to the `History` component as well (replace `rolls={[]}`).

> ✨ You should now see the list of recent rolls in the History component.

### Local Storage

Install `use-local-storage-state` via npm. Import the `useLocalStorageState` hook and use it to store the `rolls` in local storage.

> ✨ You now have a persistent dice rolling app!

## Notes

- You only have to touch the [`src/App.js`](./src/App.js) and [`src/components/D6Button/index.js`](./src/components/D6Button/index.js) files.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
