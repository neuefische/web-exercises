# React Data Fetching: Star Wars

In this challenge, you will fetch a character from the [Star Wars API](https://swapi.dev/) with `SWR` and combine this with dynamic routes.

## Task

- Start the development server and make yourself familiar with the application.
- Open the browser: there are links to four characters, but only the first one (Luke Skywalker) currently works.
- Click the link to Luke ([localhost:3000/characters/1](localhost:3000/characters/1)): there is a character displayed together with some information.
- In your Code editor, switch to [`pages/characters/1.js`](pages/characters/1.js): it renders the `Card` component, but uses hard coded data.

### Fetching with `SWR`

Your task is to fetch a character from the [Star Wars API](https://swapi.dev/). Use `SWR` to do so and implement a loading as well as an error state.

You can use the following hints as guideline:

- `SWR` is already installed, so you just have to import it.
- Switch to [`pages/characters/1.js`](./pages/characters/1.js):
  - fetch only the first character using https://swapi.dev/api/people/1;
  - instead of the hard coded `/1`, interpolate the `id` variable.
  - implement a loading state;
  - to implement a proper error state based on an error object, you need to adapt the fetcher function [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).
- Adapt the return statement so that you pass the correct fetched data to the `Card` component.
- When you are done, reload the browser with `characters/1`: it should now return the fetched data of Luke Skywalker.
  - Note: Because we declared the `id` variable with `1`, it's currently not possible to fetch another character by changing the url to, e.g., `characters/2`. We will fix this when implementing dynamic routes in the next step.

✨ Congratulations, you have fetched an API with the help of `SWR`!

### Dynamic Route for Fetched Character

By now, there is only one static route `/1` fetching one static character. Let's use a dynamic route to fetch different characters based on the query parameter!

- Rename the `/pages/characters/1.js` file into `/pages/characters/[id].js`.
- Replace the variable `const id = 1`: use the `useRouter` hook to access the `id` from `router.query`.
- Check the browser again: `localhost:3000/characters/1` should now return Luke Skywalker as well, while changing the `id` parameter should return a different character.
- Go back to the overview page [`pages/index.js](./pages/index.js): now, all links should fetch and display the correct character.

## Notes

- You only have to touch the following files:
  - [`pages/index.js`](./pages/index.js),
  - [`pages/characters/1.js`](./pages/characters/1.js).

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
