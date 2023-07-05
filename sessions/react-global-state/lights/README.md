# React Global State: Lights

In this challenge you will automate the lights in your house… well, at least in your browser.

## Task

- Start the development server and make yourself familiar with the application.
- Notice that the lights are working as expected but the count of turned on lights on the home page (`/`) is not and the buttons on the `/actions` page are not working.

### Lifting State Up

- The count of turned on lights on the home page (`/`) is not working because the state is not shared between the components.
- To make the state of the `Light` components available to the `HomePage` component (`pages/index.js`), you need to lift the state up to the `App` component (`pages/_app.js`).
- In doing so, you will need to find a new way to represent the state of the lights. You can use an array of objects with a `name`, `isOn` and `id` property.
- Change `Light` component to receive at least `isOn`, `name`, `onToggle` as props and remove the internal state from the component.
- Change the `Lights` component to render the lights dynamically based on the array in state (`.map`). You'll need to pass the array down through props.
- Create a function to toggle the `isOn` property of a light based on its `id` and pass the handler function down to the `Light` components.
- In the `Lights` component pass down the `onToggle` prop to the `Light` component using an inline function to pass in the `id` of the light:

  ```js
  onToggle={() => handleToggle(light.id)}
  ```

  This of course depends on the name of the handle function you choose.

> 💡 Just pick any `id`s you want for the lights. `"1"`, `"2"`, `"3"`,… is probably the easiest.

> ✨ Your app should now work as it did before, but the state is now shared between the components.

### Counting the Lights

- The count of turned on lights on the home page (`/`) is still not working.
- Create a value derived from the state and use it to display the count of turned on lights on the home page (`/`).

> 💡 To derive a value from state you do **not** need state or effects.

### Creating the Quick Actions

- The buttons on the `/actions` page are also not yet functional.
- Create two handler functions to toggle all lights on and off.
- Pass them down to the `QuickActions` component and use them to toggle all lights on and off.
- Bonus: Make the `Button`s `disabled` if their action would not do anything:
  - "Turn all lights off" should be disabled if all lights are off
  - "Turn all lights on" should be disabled if all lights are on

### Bonus: Dimming the Background

- The `Layout` component accepts a `isDimmed` prop that can be used to dim the background.
- Set the `isDimmed` prop to `true` if all lights are turned off. 🌚

## Notes

- You'll have to touch the files inside `components` and `pages`. All the styles are already done, so you can focus on the functional parts.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter
