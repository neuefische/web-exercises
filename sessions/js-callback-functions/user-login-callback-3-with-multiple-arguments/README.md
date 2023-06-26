# Callback Function with multiple arguments

In this challenge, you will encounter the following tasks:

- using multiple parameters inside callback functions

## Tasks

You should write a callback function in two different ways.
In both cases your callback function should accept two parameters: "userName" and "userRole".
The following message should be logged to the console:
"Welcome ${userName}! You are logged in now as ${userRole}."

1.  Write a function with the "function" keyword named "showWelcomeMessage".
    Call "handleUserLogin" and pass your callback function as the first argument.
    (You should see the log from your callback message)

2.  Call "handleUserLogin" again but this time write the callback function as an anonymous function **inside** the function call (i.e. between the round brackets).
    (You should see the log from your callback message)

Please switch to the `./js/index.js` file to start the challenge.

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
