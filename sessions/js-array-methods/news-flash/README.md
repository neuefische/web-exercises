# News Flash

We have a big database of news articles. Lets find in it the stuff that we are interested in!

## Tasks

### Part 1: Filter

Have a look at the `./js/index.js` file: There is a variable `filteredNews` declared with `news.filter()` and a return value `true`.

You task is to change the filter method:

- filter all cards which have the category "politics" in their category array
- to do so, use the `includes` method on `card.categories`

### Part 2: Sort

In the `./js/index.js` file, you will find another variable called `sortedNews` declared with the value of `filteredNews`.

Use the toSorted() method to sort all filtered cards by the length of their body text.

## Note

You only have to change the `./js/index.js` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run lint` to run the linter
