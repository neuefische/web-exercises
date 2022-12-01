# Styled Components: Box

Currently, there is a component called [`BoxWithClassName`](./components/BoxWithClassName/index.js). This component is rendered twice in [`_app.js`](./pages/_app.js).

This is why there are two boxes displayed, a green and a black one. They become red when you hover over them. Their styling is done via BEM and the `className` attribute.

## Task

### Box with Styled Components

Create a new component called `BoxWithStyledComponents`. It should feature the same styling as `BoxWithClassName`.

You can use the following hints as guideline:

- Inside of the `components` folder, create a file `BoxWithStyledComponents.js`.
- It should export a function which
  - accepts a prop `isBlack`
  - returns a `div` which accepts the `isBlack` prop.
- Inside of the same file, create a styled component called `StyledBox` which features a `div`.
  - Inside of the return statement of your function, replace the `div` with `StyledBox`.
  - `StyledBox` should have the same styling as the `BoxWithClassName` component.
  - Check whether the `isBlack` prop is true and set the correct `background-color` accordingly.
  - How could you set the styling for the hover effect again?
- Switch to [`pages/index.js`](./pages/index.js):
  - import `BoxWithStyledComponents` and
  - below the two `BoxWithClassName` components, render two `BoxWithStyledComponents`, one green and one black.

### Bonus: Aligning Boxes Horizontically

Using styled components, can you align the four boxes horizontically by only changing [`pages/index.js`](./pages/index.js)?

- Hint: Use `display: flex` to achieve this goal.

## Notes

- You have to touch the [`pages/index.js`](./pages/index.js) file and add a file in the [`components`](./components/) folder.

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
