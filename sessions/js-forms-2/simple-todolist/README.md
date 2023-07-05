# Simple To-do-List

Everyone has something to do. Let's make sure that no one forgets anything.

## Task

### 1. Listen to the submit event

- Write an event listener for the form submit.
- Log the user data to the console (we will use the data later in this exercise).
- After submit, reset the form and focus the input field with the name `headline`.

### 2. Create list entries

Look at the `./index.html` file: there already is an `ul` for our submitted todos. We only need to write a function which creates list items and appends them to this list.

Here are some hints to guide you:

- The function needs one parameter (which will be the form data object).
- The list item has
  - a headline containing the string from `data.headline`
  - a text element containing the string from `data.task`.
- Make sure NOT to use `innerHTML` since it is a [security risk when working with user inputs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations).
- Don't forget to
  - append the headline and text element to the list item as well as the list item to the todoList
  - call the function when the submit event is fired and pass the data object as an argument.

Switch to the `./js/index.js` file and make things happen!

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
