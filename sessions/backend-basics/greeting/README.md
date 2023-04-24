# Backend Basics: Greeting

In this challenge, you will build a very basic HTTP server which responds with a greeting when the url is called.

## Task

> 💡 This challenge includes tests. You can run them with `npm run test` and check your progress while working on the challenge.

Switch to the [`server.js`](./server.js) file and build an HTTP server which responds with "Hello, [your name]!".

You can use the following hints as guideline:

- Import the `createServer` method from the `http` module.
- Call `createServer` and pass it a function with two parameters: `request` and `response`.
- In the function body of the function passed to `createServer`, call `response.end()` and pass it the string "Hello, [your name]!".
- Export the server as a named export.

In the [`index.js`](./index.js) file:

- Import the server from the [`server.js`](./server.js) file.
- Call the `.listen()` method on the server and pass it a port number you want to listen to, e.g. 8000.

✨ You have successfully built your first server! Let's check that it works:

- Run `npm run dev` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:8000` (the port number depends on the number you've passed to the `.listen()` method above).
- You should now see "Hello, [your name]!".

## Notes

- You only have to touch the [`server.js`](./server.js) and [`index.js`](./index.js) files.

## Development

### CodeSandbox

This project is Node.js application. If it listens to any port (alá `server.listen()`) CodeSandbox will open it in the "Browser" tab. Tests only seem to work locally.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to run the main JavaScript file using `node` in watch mode (restarts on file changes)
- `npm run start` to run the main JavaScript file using `node`
- `npm run test` to run the tests
- `npm run lint` to run the linter

> 💡 Since this project is Node.js application you have to run it using `npm run start` or `npm run dev` and then check your browser on the port the app is listening to. Use `npm run test` to check your progress.
