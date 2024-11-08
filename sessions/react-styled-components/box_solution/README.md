# Styled Components: Box

Currently, there is a component called [`BoxWithClassName`](./components/BoxWithClassName/index.js). This component is rendered twice in `./pages/_app.js`.

This is why there are two boxes displayed, a green and a black one. They become red when you hover over them. Their styling is done via BEM and the `className` attribute.

## Tasks

### Box with Styled Components

Create a new component called `BoxWithStyledComponents`. It should feature the same styling as `BoxWithClassName`.

You can use the following hints as guideline:

- Inside of the `components` folder, create a file `BoxWithStyledComponents.js`.
- It should export a styled component as default export
  - Use a `div` element to style
  - Make use of string interpolation to check the `$isBlack` prop and adjust the background-color accordingly
  - Don't forget to add the styling for the hover effect
- Switch to `./pages/index.js`:
  - import `BoxWithStyledComponents` and
  - below the two `BoxWithClassName` components, render two `BoxWithStyledComponents`, one without and one with the `$isBlack` prop

### Bonus: Aligning Boxes Horizontally

Using styled components, can you align the four boxes horizontally by only changing `./pages/index.js`?

- Hint: Use `display: flex` to achieve this goal.

## Notes

- You have to touch the `./pages/index.js` file and add a file in the [`components`](./components/) folder.

## Development

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
