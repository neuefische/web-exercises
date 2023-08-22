# Quiz App: Importing and Exporting

This codesandbox offers a working Quiz App, but does not use JS Modules. Let's change this lack of structure!

## Task

Look at the `./index.js` file: what a mess! It contains all necessary functions to keep the app working, but it's very confusing.

Let's change that: Refactor the code using JS Modules.

The following hints might guide you:

- Try to think component-based:
  - Figure out which components exist.
  - Each component should have its own JS file. This file contains all functions belonging to this component.
- Eventually, the `./index.js` file should only contain imports, function calls and the main `render()` function.
- Don't forget to tell the browser that you are using modules now (inside of the `./index.html` file).

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run start` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
