# Single Page Application (Part 3)

Up to now, we've used several HTML files for our app. In contrast, we can create a SPA
([single-page application](https://developer.mozilla.org/en-US/docs/Glossary/SPA)): It loads only a
single web document and updates the body content of that single document via JavaScript.

In the following codesandboxes, there is a dummy SPA of the Quiz App; additionally, there are two
enhanced versions which make use of `forEach` in order to improve and reduce the necessary code.

- [SPA 1: a working solution](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods/spa-1?file=/README.md)
- [SPA 2: simplified with `forEach`](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods/spa-2?file=/README.md)
- [SPA 3: `forEach` within `forEach`](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods/spa-3?file=/README.md)
  **Task:**

Working in groups, use the codesandboxes above; make sure that every student understands every
single line of code and is able to explain it (don't worry, we are not going to ask you to do so).

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
