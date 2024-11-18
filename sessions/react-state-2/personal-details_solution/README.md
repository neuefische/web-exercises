# React State 2: Personal Details

In this challenge, there is a `Form` component that should handle the entered data on submit. Below the form, the submitted data should be dynamically displayed.

Unfortunately, clicking the submit button currently does nothing. To make the app work, you will need to fix the form functionality and lift the state up.

## Tasks

### Setting State on Submit

Let's start by fixing the submit event. Switch to the `./src/components/Form.jsx` file. You'll notice two state variables, `name` and `email`, as well as a `handleSubmit` function.

1. Extend the `handleSubmit` function to set the `name` and `email` state variables to their corresponding form field values.
2. Reset the form fields after submission.

### Lifting State Up

🎉 Congratulations, the submit functionality now works, and the data is stored in state variables!

However, the submitted details are not dynamically displayed in the [`App` component](./src/App.jsx) because the state currently lives only in the `Form` component.

Refactor the code so that:

1. When the form is submitted, the entered data is available in the `App` component.
2. The submitted data is dynamically displayed in the respective output fields below the form.

You can use the following hints as a guideline:

- Lift both states up to the `App` component.
- Write a `handleCreateUser` function, which takes two parameters, `name` and `email`, and uses them to update the states.
- Pass the `handleCreateUser` function to the `Form` component:
  - Hint: `onDelete={handleDelete}`
  - Ensure the `Form` component correctly receives this prop.
- Refactor the `handleSubmit` function in the `Form` component to call `onCreateUser` with the appropiate form field values as arguments.
- Finally, in the `App` component, dynamically render both states in the output fields below the form.

## Notes

- You only have to touch the `./src/App.jsx` and `./src/components/Form.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
