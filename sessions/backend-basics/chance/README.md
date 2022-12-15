# Backend Basics: Chance

In this challenge, you will build a server which responds with a random string, using the [npm package `chance`](https://chancejs.com/index.html).

## Task

Use the following hints as guideline:

- Use `http`, `.createServer()` and `.listen()` to respond to the request on the port listened to.
- `chance` is already installed, you just have to import and use it as follows:
  - import via `import Chance from "chance";`
  - instantiate Chance so it can be used: `const chance = new Chance();`
  - create a random string and save it to a variable: `const myRandomString = chance.string();`
- Make the server respond with the random string. Reload your browser on the port you've created several times to check that it works.

## Notes

- You only have to touch the [`index.js`](./index.js) file.

## Development

### CodeSandbox

This project is JavaScript only so there is nothing to view in the "Browser" nor the "Tests" tab.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to run the main JavaScript file using `node`
- `npm run test` to run the tests
- `npm run lint` to run the linter

> 💡 Since this project is JavaScript only there is nothing to preview in the browser. Use `npm run test` to check your progress or `npm run start` to run the code.
