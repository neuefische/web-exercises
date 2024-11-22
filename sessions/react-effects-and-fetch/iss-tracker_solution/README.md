# React Effects and Fetch: ISS Tracker

In this challenge, we will build a small app that displays the current location of the International Space Station (ISS) and practice using the `useEffect` hook.

## Tasks

In the `./src/App.jsx` file, there is already a state called `coords` which will hold the longitude and latitude values of the ISS position.

1. Write the function `getISSCoords`. Fetch from the URL saved in the constant `URL`. After successfully fetching the data, update the `coords` state with the new values.

2. The refresh button already executes `getISSCoords` when pressed. Test whether the function works as expected.

   _Hint:_ You can verify the displayed position by cross-checking it on [this website](http://open-notify.org/Open-Notify-API/).

3. Use the `useEffect` hook to set an interval (using `setInterval`) that updates the ISS coordinates every 5 seconds. Ensure that the interval is set up only on the first render of the app.

   _Hint:_ Check out the documentation for `setInterval` on MDN if you’re unfamiliar with it.

4. The `setInterval` function returns an ID for the created interval. To prevent multiple timers from running simultaneously, return a cleanup function from your `useEffect` that calls `clearInterval` with the interval ID.

> 💡**Why is the cleanup function important?**
>
> Without a cleanup function, each initial render of the component would start a new timer that never stops. This would result in the coordinates being updated far more frequently than desired, causing performance issues.

Go into the `./src/App.jsx` file and start coding!

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
