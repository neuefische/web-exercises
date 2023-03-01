# Sleep

In this task we want to handle a sleep function, which can delay certain actions.

## Task

We have 3 buttons which should display a sleep emoji for 3, 5 and 10 seconds. After the time has passed, the emoji should be replaced by the alarm clock. But all buttons display the alarm clock immediately.

### Button 1

- Fix the bug of this first button. It has something todo with the sleep function. It returns a Promise...

### Button 2

- Use the sleep function here to display the sleep emoji for 5 seconds.

### Button 3

- This time we use a named function. Add the same functionality as with button 2, but display the emoji for 10 seconds.

### Extra: Dark Mode

Nobody can sleep with this bright display. Each button should also add the class "dark" to the `body` for the respective amount of time - and remove it afterwards.

> 💡 Hint: You don't need to add any css, the dark class is already written.

## Notes

- You only have to touch the [`js/index.js`](./js/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following command:

- `npm run lint` to run the linter

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
