# React Nesting: Buttons and Children

For now, there is a `Button` component in the `./src/App.jsx` which is rendered several times.

Unfortunately, all buttons show the same text; supposing that different buttons do different things in an application, this is not really a reuseable component.

Let's use the `children` prop to make the component more flexible!

## Task

Switch to the `./src/App.jsx` file and

1. in the `Button` component, receive the `children` prop as parameter; make sure to destructure it.
2. replace the "Click me!" text with the `children` prop (don't forget the curly braces `{}`).
3. in the `App` component, change the `Button` elements from being self-closing to have an opening and closing tag.
4. add text of your choice between the opening and closing tags of the Button elements (use different texts to see any difference in the browser!)

🎉 Congratulations, you can now use the `children` prop to create really flexible components!

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
