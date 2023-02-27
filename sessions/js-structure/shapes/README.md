# Shapes

In this challenge you will practice to use the JS modules syntax with `export` and `import` as well as to learn how to think in components.

## Task

### Apply random colors

Open the [index.js](./index.js). You find 3 elements that are generated: A circle, a square and a pentagon. If one of the elements is clicked the color changes to gray. Let's use the `getRandomColor` function to make the elements more colorful!

- import the function `getRandomColor` from the [utils/randomColor.js](./utils/randomColor.js) file.
- use the function inside all three event listeners and apply the returned color to the backgroundColor.

> 💡 Hint: if it doesn't work you might need to change something inside the `index.html` regarding the script tag ;)

### Create components

Now refactor the JavaScript code so that we can split the code into small Components.

- wrap the creation of the circle element including the `addEventListener` into a separate function starting with a capital letter, e.g. `Circle`
- after the element is created and all modifications are applied, return the element
- call the function and save the returned value a variable, e.g. `circleElement`
- append the element to the root element.

The circle should now be visible as before. Now we need to outsource the component into its own file.

- create a file `Circle.js` inside the [Circle](./components/Circle) folder
- move the component function inside this file and export it as the default.
- import the component function inside the `index.js`.

> 💡 Hint: If the circle doesn't show up, you might need to move some imports into the Circle component as well.

Now repeat the previous steps for the square and the pentagon.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
