# Using multiple callback functions

In this challenge, you will encounter the following tasks:

- passing multiple callback functions to a higher order function

## Tasks

1.  Write a function with the "function" keyword named "showWelcomeMessage".
    The function should accept two parameters: "userName" and "userRole".
    The function should log the following message to the console:
    "Welcome ${userName}! You are logged in now as ${userRole}."

2.  Write a function with the "function" keyword named "showErrorMessage".
    The function should accept one parameter "errorMessage"
    The function should log the following message to the console:
    "Login error: ${errorMessage}"

3.  Call the function "handleUserLogin" and pass three arguments in this order:

- callback function: "showWelcomeMessage"
- callback function: "showErrorMessage"
- user name string: "Jane Doe"
  (You should see the log from "showWelcomeMessage" in the console)

4.  Call the function "handleUserLogin" and pass three arguments in this order:

- callback function: "showWelcomeMessage"
- callback function: "showErrorMessage"
- user name string: "John Doe"
  (You should see the log from "showErrorMessage" in the console)

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
