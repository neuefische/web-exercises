# Controlled Inputs

As you know and can see in this Codesandbox, input fields are everywhere. We've already learned to handle the values of them after a form submit.

Sometimes, however, we don't want to wait until a submit event in order to use our users' data. This is where controlled inputs and the `input` event come into play!

## Task

Let's not debate about upper and lower case letters: When a user enters a letter, it shall immediately be changed into a capital one.

Please consider

- the `input` event as well as
- how to read and write the value of a form field. There's definitely a difference between the value of the event's target and the (after-event) value of your input field.

Switch to the `./js/index.js` and make things happen!

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
