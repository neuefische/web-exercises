# React Effects and Fetch: API Status

This app provides an interface to check the status of an API.

## Tasks

Open the `./src/components/StatusCheck/index.jsx` file.

Inside this file, there is a function named `handleCheckApiStatus` that is called when you click the button.

Within this function, use `fetch()` to load status information from the API URL provided in the variable `apiStatusUrl`. The API returns a different random result each time you call it.

Your task is to write the logic for `handleCheckApiStatus` so that depending on `response.ok`, the icon displays either ✅ or ❌.

You can use the following hints as guidelines:

- `fetch()` returns a promise, so make sure to wait for the result.
- Check whether `response.ok` is truthy:
  - If it is, the icon should display ✅.
  - If it isn't, the icon should display ❌.

> _Hint:_ Since the side effect using `fetch()` is triggered by user interaction and not by rendering the component, you don't need `useEffect` to solve this challenge.

### Bonus 1

Can you display a "⏳" icon while waiting for the response?

### Bonus 2

The API might be unreachable, preventing the network request from being established. This case would cause the promise returned by `fetch()` to reject, potentially breaking the app.

Can you implement error handling to catch such cases and display the 🚨 icon if this happens?

> _Hint:_ This type of error is unlikely to occur by chance. To test it, simulate the situation using your browser's developer tools.
> Follow this [Firefox Docs guide](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) to block the request. Use the wildcard `*` to block all requests. Don't forget to disable this setting after testing.

## Notes

- You only have to touch the `./src/components/StatusCheck/index.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
