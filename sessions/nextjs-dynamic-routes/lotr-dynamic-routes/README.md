# Next.js Dynamic Routes: LOTR

Currently, the overview about the Lord of the Rings books is done with static routing. You are going to refactor the code with dynamic routes as well as links. Finally, you will create a button to navigate to a random book.

## Task

### Refactor: Dynamic Routes

Refactor the static routes to book details so that you use dynamic routes instead.

You can use the following hints as guideline:

- Create a `[slug].js` file in the `books` folder.
- Inside of `[slug].js`,
  - create a `Book` component which returns the HTML elements as the static book routes, but their content is now based on the `slug`;
  - use the `slug` parameter from `router.query` to find the current book;
  - if the current book is `undefined`, return null to avoid the app to crash.

### Refactor: Dynamic Links

Refactor the books overview and create the links dynamically.

### Random Book

On the books overview page, create a button to navigate to a random book.

- To create a random integer between `0` and `maximum`, you can use `Math.floor(Math.random() * maximum)`.
- Use the random number to access a random index in the `books` array.
- How can you interpolate the `slug` of your random book when calling `router.push`?

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)
- `npm run storybook` to start the storybook development server

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
