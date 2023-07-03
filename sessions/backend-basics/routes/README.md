# Backend Basics: Routes

In this challenge, you will build a node server which responds depending on the url route opened on the browser.

## Task

> 💡 This challenge includes tests. You can run them with `npm run test` and check your progress while working on the challenge.

Build a server that sends a different response depending on the url route:

- if the requested url is `/api/fish/1`, the response should be `"Shrimp"` and the status code should be `200`;
- if the requested url is `/api/fish/2`, the response should be `"Anemonefish"` and the status code should be `200`;
- for all other urls, the response should be `"Not found"` and the status code should be `404`.

Use the following hints as guideline:

- Switch to the `./server.js`; use the `createServer` method provided by the `node:http` module to create a server.
- Inside of the function body of `createServer`, you can access the requested url with the help of the `request` object; it provides a `url` key which holds the url value.
  - Check the value of this `url` key to equal `/api/fish/1` or `/api/fish/2` and pass the respective value to `response.end()` as argument. Make sure to also set the correct status code using `response.statusCode =`.
- Export the server as a named export from the `./server.js` file.
- Open the `./index.js` file and import the server from the `./server.js` file.
- Call the `listen(8000)` method on the server to start listening on port 8000.

✨ Your server now reacts differently depending on the requested url! Let's check that it works:

- Run `npm run start` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:8000/api/fish/1` as well as `localhost:8000/api/fish/2`.
- You should see the output you've declared as `response.end`.

## Notes

- You only have to touch the `./index.js` and `./server.js` file.

## Development

> ❗️ This project is a node server. Server output can be viewed in the terminal.

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start the node server and open [localhost:3000](http://localhost:3000) in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run start:nowatch` and `npm run test` scripts run automatically. CodeSandbox will restart the server on file changes.

### Scripts

You can use the following commands:

- `npm run start` to starts the node server (and watches for changes)
- `npm run start:nowatch` to start the node server (without watching for changes)
- `npm run test` to run the tests
- `npm run lint` to run the linter
