# For Loop and Stars

Loops are great whenever we want to do something several times. Let's make use of this feature and reach for the stars!

Looking at the [index.js](./js/index.js), there are two images saved as variables `STAR_EMPTY` and `STAR_FILLED`. We are going to create a clickable five star rating!

## Task

### Part 1 : Creating Stars

Create five stars in the browser window using a for loop.

The following hints may guide you:

- The loop should have
  - an internal counter variable
  - a criterion to be met by the counter variable
  - a rule how the counter variable is increased.
- Create an `img` element in each iteration; you may declare it to a variable called `star`.
- Set the `src` property of the `star` variable to `STAR_EMPTY`.
- Don't forget to append your star to make it visible!

### Part 2: Filling Stars on Click

By now, we have five stars, but clicking them does nothing. Let's create a clickable star rating!

Look at the first code section of this part: We query all elements with a `data-js="star"` attribute. Now, we iterate through this `stars` array with a `for` loop, add a listener for a click event to each star and call the `fillstars()` function with the argument `i` (i.e. the current star element).

#### Part 2.1 Refactor Part 1

This code can only work if there are any HTML elements with a data-js attribute and a value "star". This is why we need to refactor part 1:

Add `star.dataset.js = 'star'` to each created element. Make sure to do this before you append it to the parent element.

#### Part 2.2 Add Rating

Now we can write the `fillStars` function:

- create a for loop with five iterations (as in part 1)
- check if the counter variable is less or equal to `indexToFill`
  - if yes, set the `src` property of `stars[i]` equal to "STAR_FILLED"
  - if no, the same property should equal "STAR_EMPTY"

Please switch to the [index.js](./js/index.js) file and start rating!

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies first using `npm i`.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.

Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
