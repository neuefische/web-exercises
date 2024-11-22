# Greeting

In React, you can build components and reuse them as often as you like. However, sometimes you want your components to be able to adapt to their environment, or other conditions, e.g. to have them display different types of content.

Let us use `props` to make components totally reusable!

## Tasks

### Create a Component with props

Look at the `./src/App.jsx` file: the `App` component returns a default heading element. Replace this element with a custom `Greeting` component, which renders a greeting according to its props.

You can use the following hints as guideline:

- Write the `Greeting` component inside of the `src/App.jsx`.
  - It accepts a prop called `name` (make sure to destructure it).
  - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
- Inside of the return statement of your `App` component, replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.

### Conditional Rendering with props

Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
