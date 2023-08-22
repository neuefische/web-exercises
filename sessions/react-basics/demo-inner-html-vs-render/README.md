# innerHTML vs. React Render Demo

This demo shows how a react render compares to a `.innerHTML` assignment.

## Notes

- Open the `./src/index.js` file to present this demo.
- `innerHTML` updates the whole div, while React only updates the counter text.
  - This makes the `innerHTML` approach unusable (because the textfield is recreated every second)
  - React is more efficient and faster here (because it only updates one text element) even though it doesn't matter on this small example

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
