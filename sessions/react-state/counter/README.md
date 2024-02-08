# React State: Counter

In the `./src/App.jsx` you'll find the basic building blocks of a counter.

The general idea here is that the counter should count up when the plus button is clicked, and count down when the minus button is clicked.

Currently, the value `0` is hardcoded and doesn't respond to the buttons being clicked.

## Task

Refactor the code so that it features React state and makes use of it. Declare a state variable and make sure to have the buttons update said state variable.

You can use the following hints as a guideline:

- `let` doesn't seem to be the appropriate way to declare a variable in this instance.
- Is there a built-in React function you can use instead?
  - Make sure to import said function.
- At present, the `<button>`s' event handler is logging an emoji to the console.
  - Clearly, the event handler should be handling a different type of functionality.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
