# Backend Basics: Routes

In this challenge, you will build a server which responds depending on the url route opened on the browser.

## Task

Build a server that sends a different response depending on the url route:

- if the requested url is `/hello`, the response should be `Hello World!`;
- if the requested url is `/bye`, the response should be `Bye World!`;

Use the following hints as guideline:

- Switch to the [`index.js`](./index.js); use the methods `createServer()` and `listen()` provided by the `http` module to create a server.
- Inside of the function body of `createServer`, you can access the requested url with the help of the `request` object; it provides a `url` key which holds the url value.
  - Check the value of this `url` key to equal `/hello` or `/bye` and pass the respective value to `response.end()` as argument.

✨ Your server now reacts differently depending on the requested url! Let's check that it works:

- Run `npm run start` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:[portNumber]/hello` as well as `localhost:[portNumber]/bye`.
- You should see the output you've declared as `response.end`.

## Notes

- You only have to touch the [`index.js`](./index.js) file.

## Development

### CodeSandbox

This project is JavaScript only so there is nothing to view in the "Browser" tab. Please select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to run the main JavaScript file using `node`
- `npm run test` to run the tests
- `npm run lint` to run the linter

> 💡 Since this project is JavaScript only there is nothing to preview in the browser. Use `npm run test` to check your progress or `npm run start` to run the code.
