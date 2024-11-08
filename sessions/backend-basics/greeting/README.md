# Backend Basics: Greeting

In this challenge, you will build a very basic HTTP server which responds with a greeting when the url is called.

## Tasks

Switch to the `./server.js` file and build an HTTP server which responds with "Hello, [your name]!".

You can use the following hints as guideline:

- Import the `createServer` method from the `http` module.
- Call `createServer` and pass it a function with two parameters: `request` and `response`.
- In the function body of the function passed to `createServer`, call `response.end()` and pass it the string "Hello, [your name]!".
- Export the server as a named export.

In the `./index.js` file:

- Import the server from the `./server.js` file.
- Call the `.listen()` method on the server and pass it a port number you want to listen to, e.g. 8000.

✨ You have successfully built your first server! Let's check that it works:

- Run `npm run start` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:8000` (the port number depends on the number you've passed to the `.listen()` method above).
- You should now see "Hello, [your name]!".

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
