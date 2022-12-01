# React State 2: Triple Count

The [`src/components/Counter.js`](./src/components/Counter.js) file offers a `count` state, a button to increment this state and a `handleIncrement` function.

Clicking the button should increment the `count` by 3. Currently, however, it's incremented by 1, although the `handleIncrement` function calls `setCount(count + 1)` three times.

Of course, you could replace the two `setCount` calls by one `setCount(count + 3)`, but let's imagine that this is not possible.

Fortunately, there is another solution!

## Task

Fix the `handleIncrement` function so that it increments the `count` state by 3. For the sake of this challenge, make sure to still call `setCount` three times, incrementing by 1 each time.

You can use the following hint as guideline:

- How can you update state based on the previous state?

## Notes

- You only have to touch the [`src/components/Counter.js`](./src/components/Counter.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
