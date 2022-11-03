# News Flash

We have a big database of news articles. Lets find in it the stuff that we are interested in!

## Tasks

### Part 1: Filter

Have a look at the [`js/index.js`](./js/index.js) file: There is a variable `filteredNews` declared with `news.filter()` and a return value `true`.

You task is to change the filter method:

- filter all cards which have the category "politics" in their category array
- to do so, use the `includes` method on `card.categories`
- don't forget to remove the return statement because you don't need it.

### Part 2: Sort

In the [`js/index.js`](./js/index.js) file, you will find another variable called `sortedNews` declared with the value of `filteredNews`.

Use the sort method to sort all filtered cards by the length of their body text.

## Note

You only have to change the [`js/index.js`](./js/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
