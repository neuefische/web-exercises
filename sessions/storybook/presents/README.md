# Storybook: Presents

<!--

Describe the exercise in a few sentences. E.g.:

This challenge offers a simple form with three input fields. Let's make it interactive using React!

-->

## Task

### Alert

There is a simple [`Alert component`](./components/Alert/index.js). Write stories for different alerts:

- a default story without any passed props
- some variants with different `text` and `color` props

You can use the following hints as guideline:

- Create a file `components/Alert/Alert.stories.js`.
- Import the `Alert` component.
- Create a default export which contains an object with a title and the component.
- Write the story functions and return the `Alert` component with different props.
  - Make sure to export the functions.

Start Storybook with `npm run storybook` and check your first stories!

### Card

There is a [`Card component`](./components/Card/index.js) which receives some props.
Write at least two stories for the Card component. Use the `args` object to pass the props; change some props for the second, third etc. story using the `args` object.

You can use the following hints as guideline:

- For each story, create a copy of the given Template with `Template.bind({})`.
- Set the `args` object for the default story.
- Set the `args` object for every following story by spreading the default `args` object and change the desired values.

<!--

Explaining the task in detail. E.g.:

Use an event handler to react to the form submission.

Log all form data (in object form) into the console in the submit event handler.

You can use the following hints as guideline:

- Hint 1
- Hint 2
- ...

Switch to the [`pages/index.js`](./pages/index.js) file and make something great happen!

-->

## Notes

- You only have to touch the [`pages/index.js`](./pages/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)
- `npm run storybook` to start the storybook development server

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
