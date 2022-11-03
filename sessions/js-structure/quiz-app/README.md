# Quiz App: Importing and Exporting

This codesandbox offers a working Quiz App, but does not use JS Modules. Let's change this lack of structure!

## Task

Look at the [`index.js`](./index.js) file: what a mess! It contains all necessary functions to keep the app working, but it's very confusing.

Let's change that: Refactor the code using JS Modules.

The following hints might guide you:

- Try to think component-based:
  - Figure out which components exist.
  - Each component should have its own JS file. This file contains all functions belonging to this component.
- Eventually, the [`index.js`](./index.js) file should only contain imports, function calls and the main `render()` function.
- Don't forget to tell the browser that you are using modules now (inside of the [`index.html`](./index.html) file).

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
