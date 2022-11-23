# React Effects and Fetch: ISS Tracker

In this challenge we will build a small app which displays the current location of the international space station. We will also practice our `useEffect` skills.

## Task

In the [`src/App.js`](./src/App.js) file, we already have a state called `coords` in the `App` component which will hold the longitude and latitude values of the ISS position.

1. Write the function `getISSCoords`. Fetch from the given url saved in the constant `URL`. After fetching successfully update the `coords` state accordingly.

2. The refresh button already executes `getISSCoords` when pressed. Test if the function works as expected. (HINT: You can check if the position is displayed correctly by double checking on [this website](http://open-notify.org/Open-Notify-API/)).

3. With the help of `useEffect` set an interval (with `setInterval`) to update the ISS coords every 5 seconds. The interval should be installed only on the first render of the app.
   (HINT: Research `setInterval` on MDN if you don't know it)

4. The `setInterval` function returns an ID of the respective interval. You can clear the interval by calling `clearInterval` with this id. Inside the useEffect, return a cleanup function, which executes this `clearInterval` function with the correct ID.

> 💡 Returning a cleanup function is important to not set multiple timers simultaneously. If you wouldn't define a cleanup function, each initial render of the component would start another timer that would never be stopped. This results in updating the coordinates way more often than desired.

Go into the [`src/App.js`](./src/App.js) file and start coding!

## Notes

- You only have to touch the [`src/App.js`](./src/App.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
