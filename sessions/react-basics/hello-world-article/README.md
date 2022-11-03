# A more Complex Component

Welcome back to the React Universe! This exercise let's you build a React component containing more than one HTML tag.

Have a look at the [App.js](./src/App.js) file: the default export function called `App` returns a `<div>` which wants to be replaced. Let us comply with its request!

## Task

Render an HTML `article` tag containing a heading and a paragraph to the browser. To do so, create a component called `HelloWorldArticle`.

Use the following hints as guideline:

- In the [App.js](src/App.js), create a new function called `HelloWorldArticle()`.
- `HelloWorldArticle()` should return an HTML `article` tag as a wrapper which contains;
  - an `h1` heading
  - at least one `p` tag
  - Note: Add whatever tags you like, but the predefined styles are limited ;)
- In the return statement of your `App` function, replace the `div` with your `HelloWorldArticle` component.
- Look in the browser and marvel!

## Notes

- You only have to touch the [App.js](src/App.js) file.
