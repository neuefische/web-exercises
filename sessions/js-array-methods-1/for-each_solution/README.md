# Color Boxes with forEach

The array method `forEach` is great for iterating through an array; let's use this to make some colored boxes!

## Task 1

In the [`js/index.js`](./js/index.js) file, there is an array `colors` containing some hex codes. Create colored boxes from the array of hex codes using the `forEach` array method.

The following hints may guide you:

- For each hex code a new `div` with the class `color-box` should be created.
- The `background-color` of the `div` should be the current hex code.
- The element should be added to the page.

## Task 2

Instead of writing the callback function directly inside the forEach method, we can use a function reference.

- Create a new function called `renderColorBox`.
- Copy your code from the arrow function into this new function.
- Use the forEach method with renderColorBox to create the color boxes a second time!

Switch to the [`js/index.js`](./js/index.js) file and make something great happen!

## Notes

- You only have to touch the [`js/index.js`](./js/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
