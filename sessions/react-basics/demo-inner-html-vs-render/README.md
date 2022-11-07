# innerHTML vs. React Render Demo

This demo shows how a react render compares to a `.innerHTML` assignment.

## Notes

- Open the [`index.js`](./src/index.js) file to present this demo.
- `innerHTML` updates the whole div, while React only updates the counter text.
  - This makes the `innerHTML` approach unusable (because the textfield is recreated every second)
  - React is more efficient and faster here (because it only updates one text element) even though it doesn't matter on this small example

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
