# JS Loops: Pixels

In this challenge, we’ll add another dimension and draw pixels using a “2D” array.

## Tasks

Use the color values in the `pixelValues` array to create "pixel" elements and append them to the `canvas` element.

- Use `for` loops to generate the pixel elements.
- Each pixel should be a `div` element with the class `pixel` and have a background color set to the respective color from the `pixelValues` array.
- Append all pixels directly to the canvas - no additional row grouping is necessary.
- Hint: The colors are stored as arrays within another array. Consider how you can access these values with nested `for` loops.

Switch to the `./js/index.js` file and bring your pixel art to life!

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
