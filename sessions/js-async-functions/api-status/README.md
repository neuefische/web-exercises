# API Status

This codesandbox offers a simple interface to check the status of an API. Just do it!

## Task

Look at the [index.js](./js/index.js) file: There is a function called `checkIfAPIIsAvailable`; inside of this function, the `response` variable is declared with the result of `fetch(api)`.

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

- You only have to touch the [index.js](./js/index.js) file.
