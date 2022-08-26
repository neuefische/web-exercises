# Checkbox Input

TOS is short for Terms of Service. Here, the `alert()` in the submit event handler should only be called if the `tos` checkbox has been checked.

> 💡 You can use an early `return;` in an if statement to prevent the `alert()` from being called.

In addition, the error message below the checkbox should only be displayed if the checkbox is not set when submitting. Use the given functions `showTosError()` and `hideTosError()`.

Can you make the error message hidden initially (before the form is submitted)?

## Bonus: Success message!

Add this HTML code to the `index.html` below the form. Write JavaScript code to only show the div if the submission was valid (`tos` checkbox was checked). Like the error message, it should also be hidden initially.

```html
<div data-js="success" class="success">Complaint successfully submitted!</div>
```
