# Backend Basics: Greeting

In this challenge, you will build a very basic HTTP server which responds with a greeting when the url is called.

## Task

Switch to the [`index.js`](./index.js) file and build an HTTP server which responds with "Hello, [your name]!".

You can use the following hints as guideline:

- Import the `http` module.
- Call the `createServer` method provided by the `http` module and pass it two parameters: `request` and `response`.
- In the function body of `createServer`, call `response.end()` and pass it the string "Hello, [your name]!".
- Use method chaining to call the `.listen()` method; pass it a port number you want to listen to, e.g. 8080.

✨ You have successfully built your first server! Let's check that it works:

- Run `npm run start` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:8080` (the port number depends on the number you've passed to the `.listen()` method above).
- You should now see "Hello, [your name]!".

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
