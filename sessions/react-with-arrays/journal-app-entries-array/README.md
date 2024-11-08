# React with Arrays: Journal App with Entries Array

In this challenge we get a data array of journal entries. We want to render each entry in the `EntriesSection` component.

## Tasks

Locate the component that renders your journal entries. Here it's called `EntriesSection`.

Copy the `entries` array below into the component that renders your journal entries.

``.jsx
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

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.




### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
```
