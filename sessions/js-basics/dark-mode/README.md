# Dark Mode Example

This Codesandbox offers a website with three buttons, but they don't do anything.
Let's write some code so that the user can decide between lightness and darkness (maybe depending on their current mood).

## Task

Add some interactivity to this website. You can use the following hints as guideline:

- if the body has the class "dark", the page is displayed in dark mode
- query all 3 buttons with the 'data-js' attribute
- add an event listener to each button:
  - "switch to dark mode" button always adds the class "dark" to the body
  - "switch to light mode" button always removes the class "dark" from the body
  - "toggle mode" button toggles the class "dark" on the body

Switch to the index.js file and find some light where there seems to be only darkness!

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
