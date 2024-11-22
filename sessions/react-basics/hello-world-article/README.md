# A more Complex Component

Welcome back to the React Universe! This exercise lets you build a React component containing more than one HTML tag.

Have a look at the [App.jsx](./src/App.jsx) file: the default export function called `App` returns a `<div>` which wants to be replaced. Let us comply with its request!

## Tasks

Render an HTML `article` tag containing a heading and a paragraph to the browser. To do so, create a component called `HelloWorldArticle`.

Use the following hints as guideline:

- In the [App.jsx](src/App.jsx), create a new function called `HelloWorldArticle()`.
- `HelloWorldArticle()` should return an HTML `article` tag as a wrapper which contains;
  - an `h1` heading
  - at least one `p` tag
  - Note: Add whatever tags you like, but the predefined styles are limited ;)
- In the return statement of your `App` function, replace the `div` with your `HelloWorldArticle` component.
- Once again, look at the browser and be amazed!

## Notes

- You only have to touch the [App.jsx](src/App.jsx) file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
