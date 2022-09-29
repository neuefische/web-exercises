# Quiz App: Importing and Exporting

This codesandbox offers a working Quiz App, but does not use JS Modules. Let's change this lack of structure!

## Task

Look at the [index.js file](./index.js): what a mess! It contains all necessary functions to keep the app working, but it's very confusing.

Let's change that: Refactor the code using JS Modules.

The following hints might guide you:

- Try to think component-based:
  - Figure out which components exist.
  - Each component should have its own JS file. This file contains all functions belonging to this component.
- Eventually, the [index.js file](./index.js) should only contain imports, function calls and the main `render()` function.
- Don't forget to tell the browser that you are using modules now (inside of the [index.html file](./index.html)).
