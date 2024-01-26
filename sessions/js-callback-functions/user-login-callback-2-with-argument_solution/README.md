# Callback Functions with parameters

In this challenge, you will encounter the following tasks:

- using parameters inside callback functions

## Tasks

You should write a callback function in two different ways.
In both cases your callback function should accept one parameter: "userName".
Use the parameter to log the following message to the console:
"Welcome Jane Doe! You are logged in now."

1. Write a function with the "function" keyword named "showWelcomeMessage"
   Call "handleUserLogin" and pass your callback function as the first argument.
   (You should see the log from your callback message)
2. Call "handleUserLogin" again but this time write the callback function as an anonymous function **inside** the function call (i.e. between the round brackets).
   (You should see the log from your callback message)

Please switch to the [`js/index.js`](./js/index.js) file to start the challenge.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
