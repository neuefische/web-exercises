# React State 2: Favourite Holiday

In the `./src/App.jsx` file, there is a form where you can enter your favourite holiday and its corresponding date. Below the form, the submitted data should be displayed.

Unfortunately, the form is not working correctly. Let's fix that!

## Tasks

Switch to the `./src/App.jsx` file and refactor the `handleSubmit` function so that:

1. The `App` component has access to the submitted data.
2. The submitted data is dynamically rendered in the respective output fields below the form.

You can follow these hints as a guideline:

- Create separate states for `holiday` and `date`.
- Update the `handleSubmit` function to set both state variables with their corresponding values. Do you remember how to access the values of form fields using the event object?
- Make sure to dynamically render the state variables in the output area.

### Bonus

When submitting the form, reset the form fields and set the focus back to the `holiday` field.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
