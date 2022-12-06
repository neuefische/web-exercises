# React with Arrays: Journal App with Entries Array

Currently our journal entries are static JSX. We now get a data array of journal entries. We want to render each entry in the `EntriesSection` component.

> 💡 You can use this template as a starting point. But if you are far enough along with your own Journal App, please use that instead.

## Task

Locate the component that renders your journal entries. Here it's called `EntriesSection`.

Copy the `entries` array below into the component that renders your journal entries.

```js
const entries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];
```

- Map over the `entries` array and render each entry in the `EntriesSection` component.
- Remember to use the `key` prop when mapping over the array.
- If you are using this template: How can you render a `<Divider />` component between each entry?
  - Don't break the flexbox layout (a `Fragment` might help)
  - Avoid having a divider below the last or above the first entry

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server
- `npm run build` to create a production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
