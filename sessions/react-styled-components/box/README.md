# Styled Components: Box

Currently, there is a component called [`BoxWithClassName`](./components/BoxWithClassName/index.js). This component is rendered twice in `./pages/_app.js`.

This is why there are two boxes displayed, a green and a black one. They become red when you hover over them. Their styling is done via BEM and the `className` attribute.

## Task

### Box with Styled Components

Create a new component called `BoxWithStyledComponents`. It should feature the same styling as `BoxWithClassName`.

You can use the following hints as guideline:

- Inside of the `components` folder, create a file `BoxWithStyledComponents.js`.
- It should export a function which
  - accepts a prop `$isBlack` (note the `$` sign)
  - returns a `div`
- Inside of the same file, create a styled component called `StyledBox` which styles a `div`.
  - Inside of the return statement of your function, replace the `div` with `StyledBox`.
  - Pass the `$isBlack` prop to the `StyledBox` component.
  - `StyledBox` should have the same styling as the `BoxWithClassName` component.
  - Check whether the `$isBlack` prop is true and set the correct `background-color` accordingly.
  - How could you set the styling for the hover effect again?
- Switch to `./pages/index.js`:
  - import `BoxWithStyledComponents` and
  - below the two `BoxWithClassName` components, render two `BoxWithStyledComponents`, one green and one black.

### Bonus: Aligning Boxes Horizontally

Using styled components, can you align the four boxes horizontally by only changing `./pages/index.js`?

- Hint: Use `display: flex` to achieve this goal.

### Bonus: Refactoring

Did you notice you wrote a component `BoxWithStyledComponents` that has only the purpose to return an instance of `StyledBox` and passes props? This is not necessary! Such a wrapping component around a styled component would be required if you would return multiple child elements or would add logic to the component.

Try to refactor the code, so that `BoxWithStyledComponents.js` includes only one component, which is created with `styled-components` and is the default export.

## Notes

- You have to touch the `./pages/index.js` file and add a file in the [`components`](./components/) folder.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
