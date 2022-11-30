# API Status

This codesandbox offers a simple interface to check the status of an API.

## Task

Look at the [`js/index.js`](./js/index.js) file: There is a function called `checkIfAPIIsAvailable`; inside of this function, the `response` variable is declared with the result of `fetch(api)`.

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
