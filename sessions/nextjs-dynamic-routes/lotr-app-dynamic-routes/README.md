# Next.js Dynamic Routes: Lord of the Rings App Dynamic Routes

Currently, the overview about the Lord of the Rings volumes is done with static routing. You are going to refactor the code with dynamic routes as well as links. Finally, you will create a button to navigate to a random volume.

## Task

### Refactor: Dynamic Routes

Refactor the static routes of the volume detail pages so that they use dynamic routes instead.

You can use the following hints as guideline:

- Create a `[slug].js` file in the `volumes` folder. This file will eventually replace the static volume detail pages.
- Inside of `[slug].js` recreate the `VolumeDetail` component which returns the same elements as the static version of the component. Adjust the code so that the content is now based around the `slug` from the `router.query` object.

### Refactor: Link to the Dynamic Routes

Refactor the volumes overview and create the links dynamically from the `volumes` array.

### Random Volume

On the volume overview page, create a button to navigate to a random volume.

This function will help you to get a random element from an array:

```js
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
```

> 💡 You will need to use `router.push()` in the event handler function.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

> 💡 Please note that Next.js support on CodeSandbox is not great.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
