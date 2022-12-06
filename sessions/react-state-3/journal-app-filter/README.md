# React State: Journal App with Entries Filter

Your journal app includes filter buttons to show all entries or only favorites. Currently the buttons don't work yet. Let's implement this feature!

> 💡 You can use this template as a starting point. But if you are far enough along with your own Journal App, please use that instead.

## Task

### Make the filter buttons clickable (optional)

> 💡 If you didn't write a wrapping component like `Tab` for the `button` tag in your own code, you might not need to do this extra step.

Users should be able to click on the filter buttons to change the list of entries being displayed. First, we want to make sure the buttons are clickable.

Locate the component that renders the `button` JSX tag. In the template there is `Tab` used as a wrapping component around the `button` tag. To have the button clickable we need to pass the `onClick` prop to it.

- Add the prop `onClick` to the function declaration of this component
- Pass the prop to the `button` tag like this: `onClick={onClick}`

Great, the buttons can be clicked now! 🚀

### Expose events when the filter buttons are clicked

Let's make sure that the right event is triggered when clicking on the buttons.

Find the component where both filter buttons are located beside each other. Here it's the `EntriesSection` component. The component having both buttons needs to expose two events - one event for each button.

- Add two new props to the function declaration of this component: `onShowAllEntries` and `onShowFavoriteEntries`
- Pass the respective prop to the `onClick` prop on the filter buttons

Both buttons are now able to inform their parent component when they are clicked! 🚀

### Store the desired filter option in state

Let's go a level up in the component hierarchy and write the logic to do the actual filtering. Locate the component that has the `entries` state. Here it's the `App` component.

- Create a new state called `filter`, which stores a string with `"all"` as initial value.
- Create a function called `handleShowFavoriteEntries` which sets the `filter` state to `"favorites"`.
- Create a function called `handleShowAllEntries` which sets the `showFavorites` state to `"all"`.
- Pass the two functions down to the `EntriesSection` component via the props `onShowAllEntries` and `onShowFavoriteEntries` you introduced earlier

Now you can click on the two filter buttons and change the `filter` state! 🚀

### The filter logic

You will notice the displayed entries aren't changing yet. This is what we need to solve next.

- Besides the `entries` array which is stored in state, create a new array called `favoriteEntries`, which **should not** be stored in state.
- The value of `favoriteEntries` should be all element from the `entries` array where `isFavorite` is `true` (hint: you can use the array method `filter`).

You have two arrays containing entries now: a list of all entries and a list of the favorite entries. The code has to make a decision which of them should be displayed. The component that renders the entry list accepts a prop for the list of entries that should be display. Here it's the `entries` prop of the `EntriesSection` component.

- Pass the value to this prop conditionally. Depending on the value of the state `filter` you pass the array `entries` or the array `favoriteEntries` (hint: you can use the ternary operator).

Now you will see different entries in the UI when clicking the filter buttons! 🚀

> 💡 If there are no entries displayed after you clicked on the "Favorites" button, you might need to click the "star" button of some entries first.

### Visual highlight for active filter

We are almost done. There are two minor things, that need to be fixed. First, you might notice that one of the two filter buttons is highlighted as active. Clicking the buttons does not change this visual indicator yet.

- Alongside the `entries` prop, also pass down the `filter` state as prop to the component rendering the two buttons. Here it's the `EntriesSection` component.
- Inside of the `EntriesSection` component, add the `filter` prop to the function declaration.

Locate the prop enabling the visual highlight for the buttons. In the template it's the `isActive` prop of the `Tab` and `Badge` components.

- Pass the value of the `isActive` prop conditionally, depending on the value of `filter`, which could be `"all"` or `"favorites"`.

Click on the filter buttons now. You will see that the visual highlight gets applied to the button you clicked, while the other button looses the visual highlight. 🚀

### Show count of all and favorite entries

The last thing we need to adjust is the number inside the filter buttons. They indicate how many entries are in each of the two lists. You might notice they show an arbitrary hardcoded number now.

Stay in the component rendering the two buttons. Here it's the `EntriesSection` component.

- Add two new props to the function declaration: `allEntriesCount` and `favoriteEntriesCount`.

Go up in the component hierarchy to the place where this component is rendered.

- Add the props `allEntriesCount` and `favoriteEntriesCount` props and pass a value for each.
- The value can be read from the `length` property of the two arrays `entries` and `favoriteEntries`. You can access the `length` property by using the dot notion on the array variables.

The UI should display the correct number of entries within the filter buttons now. 🚀

Awesome job! You've worked your way through a rather complex app and coded many cool features that deal with multiple states! 🚀 🚀 🚀

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server
- `npm run build` to create a production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
