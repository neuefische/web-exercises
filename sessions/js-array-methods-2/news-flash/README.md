# News Flash

We have a big database of news articles. Lets find in it the stuff that we are interested in!

## Tasks

### Part 1: Filter

Have a look at the [index.js](./js/index.js) file: There is a variable `filteredNews` declared with `news.filter()` and a return value `true`.

You task is to change the filter method:

- filter all cards which have the category "politics" in their category array
- to do so, use the `includes` method on `card.categories`
- don't forget to remove the return statement because you don't need it.

### Part 2: Sort

In the [index.js](./js/index.js) file, you will find another variable called `sortedNews` declared with the value of `filteredNews`.

Use the sort method to sort all filtered cards by the length of their body text.

## Note

You only have to change the [index.js](./js/index.js) file.
