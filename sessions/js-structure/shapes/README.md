# JS Structure: Shapes

In this challenge, you'll practice using JavaScript modules with `export` and `import` while learning to structure code into reusable components.

## Tasks

### Apply Random Colors

Open [index.js](./index.js). You will find three elements generated on the page: a circle, a square, and a pentagon. Currently, when you click any of these elements, their color changes to gray. Let’s use the `getRandomColor` function to make them more colorful!

- Import the `getRandomColor` function from [utils/randomColor.js](./utils/randomColor.js).
- Use this function inside each of the three event listeners and apply the returned color to `backgroundColor`.

> 💡 Hint: If the colors aren’t changing, you may need to adjust the `<script>` tag in `index.html`.

### Create Components

Next, refactor the code to split it into smaller, reusable components.

- Wrap the creation of the circle element, including its `addEventListener`, in a separate function with a capitalized name, e.g., `Circle`.
- After creating the element and applying all modifications, return the element.
- Call this function and save the returned value in a variable, e.g., `circleElement`.
- Append the element to the root element.

The circle should now appear as it did before. Now let’s move this component into its own file.

- Create a file named `Circle.js` inside the `./components/Circle` folder.
- Move the component function to this file and export it as the default export.
- Import the function in `index.js`.

> 💡 Hint: If the circle isn’t displaying, you may need to move some imports into the `Circle` component file.

Now, repeat these steps for the square and pentagon components.

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
