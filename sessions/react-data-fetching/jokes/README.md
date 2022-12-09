# React Data Fetching: Jokes

In this challenge, you will fetch a joke from an API and make use of the features provided by `SWR`.

## Task

- Start the development server and make yourself familiar with the application.
- Open the browser: there is a joke displayed.
- Switch to the [`Joke component`](components/Joke/index.js): it renders the joke, but the joke itself is hardcoded.

### Fetching with `SWR`

Your task is to fetch a joke from the [bad jokes API](https://example-apis.vercel.app/api/bad-jokes/). Use `SWR` to do so and implement a loading as well as an error state.

You can use the following hints as guideline:

- `SWR` is already installed, so you just have to import it.
- For now, fetch only the first joke by its `id` using `https://example-apis.vercel.app/api/bad-jokes/0`.
- Adapt the return statement of the `Joke` component to render the fetched joke.
- The loading state is dependent on the fetched `data` object and whether it exists.
- To implement a proper `error` state based on an `error` object, you need to adapt the `fetcher` function [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).

### Bonus: Caching as a `SWR` Feature

To see `SWR` caching the url and the data, let's fetch the next and previous joke when clicking on the corresponding button.

- Create a state `currentId` and set its initial value to `0`.
- Refactor the url passed to the `useSWR` hook so that it uses the `currentId` state instead of a hard coded number.
- Below the `StyledJoke` component, add two buttons for fetching the previous and next joke, respectively.
- The fetched joke comes with the keys `prevId` and `nextId`; clicking a button should set the `currentId` to one of these values.
- Switch to the browser, reload and play with the previous and next joke button:
  - if you go to a joke for the first time, you should see the loading state for a short amount of time.
  - if you go back to a joke you have already seen before, the loading state should not be visible because `SWR` displays the "stale" version "while revalidating" the actual information from the source.

## Notes

- You only have to touch the [`components/Joke/index.js`](./components/Joke/index.js) file.

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
