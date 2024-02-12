# React State 2: Personal Details

In this challenge, there is a `Form` component which should handle entered data on submit. Below the form, the submitted data should be displayed.

Unfortunately, hitting the submit button does not do anything. Since you are looking at components now, you will need to lift state up to make the app work.

## Task

### 1. Setting State on Submit

Let's start by fixing the submit event first. Switch to the `./src/components/Form.jsx` file; there already are two states called `name` and `email` and a `handleSubmit` function.

1. Extend the `handleSubmit` function to set the `name` and `email` state to its corresponding form field values.
2. Reset the form after submit.

### 2. Lifting State up

🎉 Congratulations, the submit works and the data is stored in state variables!

Unfortunately, the submitted details are not dynamically displayed in the [`App` component](./src/App.jsx) because the state only lives in the `Form` component.

Refactor the code so that

1. on submitting the form, the entered data is available in the `App` component and
2. the submitted data are dynamically displayed in the respective output area.

You can use the following hints as guideline:

- Lift both states up to the `App` component.
- Write a `handleCreateUser` function which receives the two parameters `name` and `email` and uses them to set both state variables.
- Pass `handleCreateUser` to the `Form` component:
  - Hint: `onDelete={handleDelete}`
  - Make sure to receive the prop inside of the `Form` component.
- Refactor the `handleSubmit` function so that it calls `onCreateUser` with the correct values of the form fields as arguments.
- Go back to the `App` component and display both states in the respective output fields below the `Form` component.

## Notes

- You only have to touch the `./src/App.jsx` and `./src/components/Form.jsx` file.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
