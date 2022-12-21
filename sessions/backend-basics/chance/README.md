# Backend Basics: Chance

In this challenge, you will build a server which responds with a random string, using the [npm package `chance`](https://chancejs.com/index.html).

## Task

Use the following hints as guideline:

- Use `createServer()` (`server.js`) and `.listen()` (`index.js`) to respond to the request on the port listened to.
- `chance` is already installed, you just have to import and use it as follows:
  - import via `import Chance from "chance";`
  - instantiate Chance so it can be used: `const chance = new Chance();` (you can do this outside the `createServer()` callback)
  - use the Change documentation to find out how to create
    - a random person name and save it to a variable: `name`,
    - a random person age and save it to a variable: `age` and
    - a random web profession and save it to a variable: `profession`.
  - use the variables to build the response string: `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
- Make the server respond with the string. Reload your browser on the port you've created several times to check that it works.

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
