# API Status

This codesandbox offers a simple interface to check the status of an API.

## Task

Look at the `./js/index.js` file: There is a function called `checkIfAPIIsAvailable`; inside of this function, the `response` variable is declared with the result of `fetch(api)`.

The function is called everytime you click the button.

Your task is to refactor `checkIfAPIIsAvailable` so that - depending on `response.ok` - the icon displays either ✅ or ❌.

You can use the following hints as guideline:

- `fetch()` returns a promise, so make sure to wait for the result.
- Check whether 'response.ok' is truthy;
  - if so, the icon should display ✅
  - if not, the icon should display ❌
- Use a `try...catch` block.

## Bonus:

Can you display a '⏳' icon while waiting for the response?

## Notes

- You only have to touch the `./js/index.js` file.

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
