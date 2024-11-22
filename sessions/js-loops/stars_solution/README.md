# JS Loops: Stars

Let's build an awesome interactive 5-star rating scale! The goal is to dynamically display filled or empty stars based on user input. Clicking on a star should fill all stars up to that point, leaving the remaining stars empty.

## Tasks

### Part 1: Render Stars

Start by displaying 5 empty stars in the `starContainer`. In `./js/index.js`, define a function `renderStars`:

- Use a `for` loop inside the function to create 5 stars.
  💡 _Start the loop with a value of 1 instead of 0._
- Inside the loop, create an `img` element, setting its `src` attribute to the path of the empty star image (`assets/star-empty.svg`).
- Append each star to `starContainer`.

### Part 2: Change the Number of Filled Stars

Now let's display a specific number of filled stars, depending on the argument given to the function:

- Add a parameter `filledStars` to the `renderStars` function, expecting it to be a number.
- Inside the loop, use the value of `filledStars` to decide if each star should be filled or empty.
  💡 _Use the loop's counter variable to check which star is currently being created (first, second, third, etc.)._
- Set the `src` attribute of each `img` element to the appropiate image path, either filled or empty.
- Update the code that calls `renderStars` to pass a number between 0 and 5 as an argument to check if it displays correctly.

### Part 3: Implement User Input

Currently, the number of filled stars is set by the argument in `renderStars`. However, we want the user to decide how many stars should be filled. Let’s add user interactivity by setting up a click event on each star.

- Before appending each star to the `starContainer`, add a `click` event listener to it.
- Inside the event listener, call `renderStars` with the correct number to display the updated star count.
  💡 _The loop’s counter variable may help determine the correct number of filled stars._

All done! 🎉 Five stars to you! ⭐️⭐️⭐️⭐️⭐️

## Notes

- You only have to touch the `./js/index.js` file.

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
