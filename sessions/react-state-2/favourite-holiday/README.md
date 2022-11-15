# React State 2: Favourite Holiday

In the [`src/App.js`](./src/App.js) file, there is a form in which you can enter your favourite holiday and its respective date. Below the form, the submitted data should be displayed.

Unfortunately, the form is not working correctly. Let's fix that!

## Task

Switch to the [`src/App.js`](./src/App.js) file and refactor the `handleSubmit` function so that

1. the `App` component has access to the submitted data,
2. the submitted data is dynamically rendered in the respective output fields below the form.

You can use the following hints as guideline:

- Create a separate state for `holiday` and `date`.
- The `handleSubmit` function sets both states with its corresponding values. Do you remember how to access the values of the target fields?
- Don't forget to dynamically render the state variables in the output area.

## Bonus

When submitting the form, the form fields should be reset and the `holiday` field should be focussed.

## Notes

- You only have to touch the [`src/App.js`](./src/App.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
