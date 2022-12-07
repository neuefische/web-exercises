# JS Loops: Stars

Let's build an awesome interactive 5-star rating scale! The goal is to display filled / empty stars depending on the user input. A click on a star should fill all stars up to the clicked one and leave all others empty.

## Task

### Part 1: Render Stars

Start by render 5 empty stars in the starContainer. For that, switch to [`index.js`](./js/index.js) write the function 'renderStars':

- Use a for loop inside the function to repeat the following code five times.
  💡 Start the loop with the value 1, not with 0
- Inside the for loop, create an image Element and set the "src" attribute to the path of the empty star image ("assets/star-empty.svg")
- append the star to the "starContainer".

### Part 2: Change the number of filled stars

Now we want to render a certain number of filled stars, depending on the input of the function:

- add an input parameter to the function called "filledStars"
- use this number to check inside of the loop if a filled or an empty star should be created.
  💡 Use the counter variable of the for loop to check which star is currently created (the first, second, third...)
- depending on whether a filled or empty star should be rendered, set the src of the image element to the filled or empty star image.
- Enter a number between 0 and 5 into the function call of "renderStars" and see if it works as expected!

### Part 3: Implement user input

By now, the number of filled stars is set when calling the `renderStars` functions with a number argument.
However, we want the user to decide how many stars should be filled. Let's add a "click" event listener to every star to rerender the stars inside of the container!

- Before appending the star element to the starContainer, add a "click" event listener to it.
- Inside the event listener, rerender the stars by calling "renderStars". Pass the correct number to that function in order to render the correct number of filled stars.
  💡 Your loop counter variable might help you!

You are done! 🎉 Five stars to you! ⭐️⭐️⭐️⭐️⭐️

## Notes

- You only have to touch the [`js/index.js`](./js/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
