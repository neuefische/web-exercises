# React Data Fetching: Star Wars

In this challenge, you will fetch a character from the [Star Wars API](https://swapi.dev/) with `SWR` and combine this with dynamic routes.

## Task

- Start the development server and make yourself familiar with the application.
- Open the browser under [localhost:3000/characters/luke-skywalker](localhost:3000/characters/luke-skywalker): there is a character displayed together with some information.
- Switch to [`pages/characters/luke-skywalker.js`](pages/characters/luke-skywalker.js): it renders the `Card` component, but uses hard coded data.

### Fetching with `SWR`

Your task is to fetch a character from the [Star Wars API](https://swapi.dev/). Use `SWR` to do so and implement a loading as well as an error state.

You can use the following hints as guideline:

- `SWR` is already installed, so you just have to import it.
- Fetch only the first character by its `id` using https://swapi.dev/api/people/1.
- Adapt the return statement of [`pages/characters/luke-skywalker.js](./pages/characters/index.js) so that you pass the correct fetched data to the `Card` component.
- To implement a proper error state based on an error object, you need to adapt the fetcher function [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).
- When you are done, check some random characters by changing the `id` in the browser url to another number.

✨ Congratulations, you have fetched an API with the help of `SWR`!

### Bonus: Dynamic Route for Fetched Character

By now, there is only one static route `/luke-skywalker` for every individual character fetched. Let's use the fetched data to create a dynamic route!

- Rename the `/pages/characters/luke-skywalker.js` file into `/pages/characters/[id].js`.
- Use the `useRouter` hook to access the `id` from `router.query`.
- Adapt the url passed as argument to `useSWR` so that it uses the query parameter `id` instead of `/people/1`.
- Check the browser again: `localhost:3000/characters/1` should now return Luke Skywalker and changing the `id` parameter should return a different character.
- To be completely done, fix the broken links on the starting pages: change the `href` attributes of the `Link` components used in [`pages/index.js](./pages/index.js) and [`pages/characters/index.js`](pages/characters/index.js) so that it links to (the fetched) Luke again.

## Notes

- You only have to touch the following files:
  - [`pages/index.js`](./pages/index.js),
  - [`pages/characters/index.js`](./pages/characters/index.js),
  - [`pages/characters/luke-skywalker.js`](./pages/characters/luke-skywalker.js).

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

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
