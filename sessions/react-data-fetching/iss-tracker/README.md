# React Data Fetching: ISS Tracker

This challenge asks you to refactor the existing code of the ISS Tracker to use `SWR`.
You will need to fetch on interval and refetch on click of a button.

## Task

- Start the development server and make yourself familiar with the application.
- Switch to the [`ISSTracker`](./components/ISSTracker/index.js) component: it features a `coords` state, a `getISSCoords` function and a `useEffect` to fetch data on interval.

### Fetching on load

- Comment out all unnecessary code:

  - the `coords` state,
  - the `getISSCoords` function,
  - the `useEffect`,
  - for now: the `onRefresh` prop passed to the `Controls` component (you will adapt this in a minute).

- Implement fetching of the same data with `SWR`.

  - `SWR` is already installed, so you just have to import it.
  - Handle the `isLoading` and `error` states provided by `SWR` as well.
  - Make sure `data` is defined before working with it.
  - Remember to adapt the `fetcher` function to create a proper `error` state [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).
  - Note: `SWR` needs you to destructure a `data` object, but the `Map` and `Controls` component need `longitude` and `latitude` as separate props; how can you simply pass the coordinates from `data` without changing the `Map/index.js` and `Controls/index.js` files? (Hint: there are several ways to do this!)

✨ You should now see the exact position of the ISS again when refreshing the page!

### Implement interval

- Refetch the data of the ISS on an interval of 5 seconds. [See the SWR docs](https://swr.vercel.app/docs/revalidation#revalidate-on-interval) to find help how to do it.

### Refetch on button click

The only thing not working yet is the "Refresh" button because the `getISSCords` function does not exist anymore.

- Destructure the `mutate` function provided by the `useSWR` hook.
- Pass it to the `onRefresh` prop of the `Controls` component. You can use an inline function as in `onReload={() => handleReload()}`.

✨ Congratulations, you can now see the exact position of the ISS whenever you want with the help of `SWR`!

## Notes

- You only have to touch the [`/components/ISSTracker/index.js`](./components/ISSTracker/index.js) file.

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
