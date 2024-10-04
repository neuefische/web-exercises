# Button

Buttons are everywhere: a green submit button, a red danger button, a disabled button because you did not fill in the form correctly, ...

And here is the magic: we can only do this with one button component using props! Let's try it.

## Tasks

### 1. A Simple Button Component

Look at the `./src/App.jsx` file: the `App` component returns a default heading element that you need to replace with a custom component.

Your task is to write a `Button` component which takes three props `color`, `disabled`, and `text` and renders a button with the given color, text and disabled state.

You can use the following hints as guideline:

- Write a `Button` component inside of the `src/App.jsx`.

  - It accepts three props: `color`, `disabled`, and `text` (make sure to destructure them).
  - It returns an HTML button element which
    - renders its text according to the `text` prop,
    - has its disabled attribute set according to the `disabled` prop, and
    - uses the `color` prop to set the text color of the button

> 💡 Note: use inline styling with the help of the `style` attribute: `style={{height: "100px"}}`

> 💡 Additional hint: If you want to set the background color via a prop, you need to use camelCase `backgroundColor` instead of kebab-case `background-color`.

- Inside of the return statement of your `App` component, replace the heading with your `Button` component and pass it the props as you wish.

🎉 Congratulations, you have created a very flexible button component!

However, clicking a button without anything happening is pretty useless, right? Let's fix that!

### 2. Adding a Click Event

Inside of your `Button` component, use the `onClick` prop and pass it a `console.log()` with the text of your choice.

Use an anonymous function like `onClick={() => alert('You clicked me!')}` to make sure the code is called when the button is clicked (and not with every render).

🎉 Congratulations, you've defined your first event handler in React!

### 3. Declare an Event Handler Function

By now, you've defined the event handler inline in the JSX (which looks something like `onClick={() => alert('You clicked me!')}`). Let's extract the logic to an event handler function and pass this function to the `<button> element`.

- Inside the `Button` component, create a function `handleClick` which calls the same `console.log` you've passed to the `<button>`s `onClick` prop.
- Replace the anonymous function of the `<button>`'s `onClick` prop with the `handleClick` function. Make sure NOT to call `handleClick` here.
- Check whether the `console.log` is still working.
  - If not, check your brackets again.

### 4. Pass a Function as Prop

As a last step, let's pass a function as a prop to a component.

- Move the `handleClick` function from the `Button` component to the `App` component.
- In the `App` component, pass the `handleClick` function as a prop called `onClick` to the `Button` component (hint: `onEventName={handleEventName}`).
- In the `Button` component, receive the `onClick` prop as a parameter.
- Pass the received `onClick` prop to the `<button>`'s `onClick` prop.

🎉 Congratulations, you've built a button component which can handle every function passed to it as prop!

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.



### Scripts

You can use the following commands:

- `npm run dev` to start a development server
