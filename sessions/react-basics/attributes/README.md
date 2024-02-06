# HTML Attributes in React

By now, you are familiar with rendering HTML in React and how to extract this HTML into a custom component.

Let's now focus on HTML attributes in JSX and the (minor) differences to normal HTML.

Have a look at the [App.jsx](./src/App.jsx) file: you will find the `App` returning a single `<div>`.

## Task

Write an `Article` component and use it to replace the given `<div>`.

Your component should contain the following parts:

- an `<article>` as a wrapper HTML element with the class `article`
- an `<h2>` with the class `article__title` and a text of your choice
- a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
- an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)

## Notes

- You rendered Article component does not have any styling? Remember that you need to use `className` instead of `class` in JSX.
- You only have to touch the [App.jsx](src/App.jsx) file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
