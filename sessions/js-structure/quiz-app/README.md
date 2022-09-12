# Quiz App: Importing and Exporting

This codesandbox offers a working Quiz App, but does not use JS Modules. Let's change this lack of structure!

## Task

Look at the [index.js file](./index.js): what a hell of a mess! It contains all necessary functions to keep the app working, but it's very confusing.

Let's change that: Refactor the code using JS Modules.

The following hints may guide you:

- Try to think component-based:
  - Figure out which components exists.
  - Each component should have it's own JS file (if there are any functions for it). This file contains all functions belonging to this component.
- At the end, the [index.js file](./index.js) should only contain imports and function calls.
- Don't forget to tell the browser that you are using modules now (inside of the [index.html file](./index.html)).
