# Backend Basics: Chance

In this challenge, you will build a server which responds with a random string, using the [npm package `chance`](https://chancejs.com/index.html).

## Tasks

Use the following hints as guideline:

- Use `createServer()` (`server.js`) and `.listen()` (`index.js`) to respond to the request on the port listened to.
- `chance` must be installed and and can be used use it as follows:
  - install via `npm install chance`
  - import via `import Chance from "chance";`
  - instantiate Chance so it can be used: `const chance = new Chance();` (you can do this outside the `createServer()` callback)
  - use the Chance documentation to find out how to create
    - a random person name and save it to a variable: `name`,
    - a random person age and save it to a variable: `age` and
    - a random web profession and save it to a variable: `profession`.
  - use the variables to build the response string: `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
- Make the server respond with the string. Reload your browser on the port you've created several times to check that it works.

## Notes

- You only have to touch the `./server.js` and `./index.js` files.

## Development

> ❗️ This project is a node server. Server output can be viewed in the terminal.

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start the node server and open [localhost:3000](http://localhost:3000) in a browser.

### Scripts

You can use the following commands:

- `npm run start` to starts the node server (and watches for changes)
- `npm run start:nowatch` to start the node server (without watching for changes)
- `npm run lint` to run the linter
