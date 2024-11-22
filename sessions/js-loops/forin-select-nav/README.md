# JS Loops: Select and Navigation Bar

We can use loops for creating HTML elements. In this challenge, the goal is to generate a dropdown menu with language options and a navigation bar, using a `for...in` loop!

## Tasks

### Part 1: Creating a Select Input

In `./js/index.js`, you’ll find a `languages` object with key-value pairs. A `select` element with the name “languages” has also been created and appended to the `main` element.

Use a `for...in` loop to iterate over the `languages` object and add `option` elements to the dropdown menu.

Hints:

- Create an `option` element for each entry in `languages`.
- Set each option's `value` and `textContent` to the value from `languages`, using bracket notation (e.g. `languages[myIteratorName]`).
- Remember to append each `option` to the `select` element!

### Part 2: Creating a Navigation Bar

Before building the navigation bar, let’s see what’s provided in `./js/index.js`:

- A `nav` object with keys ("home", "about", and "contact") is available.
- Each key's value is an object with `href` and `text` properties.
- `nav` and `ul` elements have already been created and appended to the `main` element.

Your task is to fill this list with list items containing anchor tags. Use the `nav` object in a `for...in` loop.

Guidelines:

- Write a `for...in` loop for the `nav` object.
- In each iteration:
  - Create a list item and an anchor tag.
  - Set the anchor's `href` and `textContent` properties using values from the `nav` object, accessed via bracket notation and the iterator variable.
  - Append the list item and anchor tag to their respective parent elements.

Switch to `./js/index.js` to begin!

## Development

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
