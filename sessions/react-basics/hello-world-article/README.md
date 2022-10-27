# A more Complex Component

Welcome to the React Universe!

Have a look at the [App.js](./src/App.js) file: you will find a default export function called `App` which returns a first level heading.

Check the browser tab of the codesandbox: the content of the heading ("Say hello...") should be visible there as well.

Now, let us cherish a tradition and render "Hello world!".

## Task

Render an HTML `article` tag containing a heading and a paragraph to the browser. To do so, use a component called `HelloWorldArticle`.

Use the following hints as guideline:

- In the [App.js](src/App.js), create a new function called `HelloWorldArticle()`.
- `HelloWorldArticle()` should return an HTML `article` tag containing
  - an `h1` heading
  - at least one `p` tag
  - Note: Add whatever tags you like, but the predefined styles are limited ;)
- In the return statement of your `App` function, replace the `h1` with your `HelloWorldArticle` component.
- Look in the browser and marvel!

## Notes

- You only have to touch the [App.js](src/App.js) file.
