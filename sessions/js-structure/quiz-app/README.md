# Quiz App: Importing and Exporting

This challenge offers a working Quiz App, but does not use JS Modules. Let's change this lack of structure!

## Tasks

Look at the `./index.js` file: what a mess! It contains all necessary functions to keep the app working, but it's very confusing.

Let's change that: Refactor the code using JS Modules.

The following hints might guide you:

- Try to think component-based:
  - Figure out which components exist.
  - Each component should have its own JS file. This file contains all functions belonging to this component.
- Eventually, the `./index.js` file should only contain imports, function calls and the main `render()` function.
- Don't forget to tell the browser that you are using modules now (inside of the `./index.html` file).

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the test
