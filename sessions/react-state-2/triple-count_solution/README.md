# React State 2: Triple Count

The `./src/components/Counter.jsx` file contains a `count` state, a button to increment this state, and a `handleIncrement` function.

Clicking the button should increment the `count` by 3. However, it currently increments by only 1, even though the `handleIncrement` function calls `setCount(count + 1)` three times.

While you could simply replace the three `setCount` calls with a single `setCount(count + 3)`, let’s assume that this approach is not an option.

Fortunately, there is another solution!

## Tasks

Fix the `handleIncrement` function so that it increments the `count` state by 3. For this challenge, ensure that `setCount` is still called three times, incrementing the value by 1 each time. How can you update state based on the previous state?

## Notes

- You only have to touch the `./src/components/Counter.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
