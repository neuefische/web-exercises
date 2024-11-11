# JS Structure: Quiz App

This challenge provides a working Quiz App, but the code lacks structure as it doesn’t use JavaScript modules. Let’s improve this!

## Tasks

Take a look at `./index.js`: it’s all in one place! While the app works, the code is messy and hard to navigate.

Let’s organize it by refactoring the code with JavaScript modules.

Consider the following hints to guide you:

- Think in terms of components:
  - Identify the distinct components of the app.
  - Each component should have its own JavaScript file containing all related functions.
- Ultimately, `./index.js` should only include imports, function calls, and the main `render()` function.
- Don’t forget to update the `index.html` file to let the browser know you’re using modules.

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
