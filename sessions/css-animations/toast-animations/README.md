# Toast Animation

In this codesandbox you are gonna practice to animate properties in CSS!

## Task

### Part 1

The hover effect on the submit button looks quite ugly. Let's change that.

- Add a `transition` property to the submit button and animate the transition to the hover state for all properties. Find some values that you personally like.

### Part 2

When you click on the button, a toast appears on the bottom right corner. Lets animate it as well, but this time we want a different animation when the toast leaves the screen!

- first define a transition in the `.toast.enter` ruleset. This will be describing the enter animation.
- then define the exit animation in the `.toast.exit` ruleset. This time use the bezier tool in the developer tools to find an animation that overshoots a little to the left before the toast leaves to the right.

Switch to the [styles.css](./css/styles.css) file and make something great happen!

## Notes

- You only have to touch the `js/index.js` file.
