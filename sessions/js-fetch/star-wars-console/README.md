# Fetch Star Wars API and Log to Console

Fetching data is awesome, yet it can be frightening in the beginning. But don't worry – we are going to help you familiarize yourself with the syntax of fetch and all will be fine ;)

## Task

Have a look at the `./js/index.js` file: There is an `url` variable and an empty `fetchData()` function.

Inside of the `fetchData()` function, use the `url` variable to fetch data from the Star Wars API.

Log the fetched data to the console and play around with it:

- log the entire data object
- log different values of the data object
- Bonus: Can you log the eye color of R2-D2?

The following hints may guide you:

- use a `try...catch` block
- make sure to wait for all asynchronous operations
- make sure to handle bad responses from the API as well
- you can test bad responses via adding a random string of characters to the end of the URL stored in the url variable

Please switch to the `./js/index.js` file: May the force be with you!

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
