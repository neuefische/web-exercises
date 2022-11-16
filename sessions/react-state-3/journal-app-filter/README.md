# React State: Journal App with Entries Filter

Your journal app includes filter button to show all entries or only favorites. Currently the button don't work yet. Let's implement this feature!

> 💡 You can use this template as a starting point. But if you are far enough along with your own Journal App, please use that instead.

## Task

Users should be able to click on the filter buttons to change the list of displayed entries. First we want to make sure the buttons are clickable.

Locate the component that renders the `button` JSX tag. In the template there is `Tab` used as a wrapping component around the `button` tag. To have the button clickable we need to pass the `onClick` prop to it.

- Add the prop `onClick` to the function declaration of this component
- Pass the prop to the `button` tag like this: `onClick={onClick}`

If you didn't write a wrapping component for the `button` tag in your own code, you might not need to do this extra step.

Great, the buttons can be clicked now! Let's make sure that the right event is triggered when clicking on them.

Find the component where both filter buttons are located beside each other. Here it's the `EntriesSection` component. This component needs to expose an event for each button.

- Add two new props to the function declaration of this component: `onShowAllEntries` and `onShowFavoriteEntries`
- Pass each of the props to the `onClick` prop on the two buttons

Both buttons are no able to inform their parent component when they are clicked. Let's go a level up in the component hierarchy and write the logic to do the actual filtering. Locate the component having the `entries` state. Here it's the `App` component.

- Create a new state called `showFavorites`, which store a boolean with `false` as initial value
- Create a function called `handleShowFavoriteEntries` which sets the `showFavorites` state to `true`
- Create a function called `handleShowAllEntries` which sets the `showFavorites` state to `false`
- Pass the two functions down to the `EntriesSection` component via the props `onShowAllEntries` and `onShowFavoriteEntries` you introduced earlier

You can click on the two filter buttons and change the `showFavorites` state now. You will notice the displayed entries will not change yet. This is what we solve next.

- Besides the `entries` array which is stored in state, create a new array called `favoriteEntries`, which **should not** be stored in state
- The value of `favoriteEntries` should be all element from the `entries` array where `isFavorite` is `true` (hint: you can use the array method `filter`)

You have two array containing entries now: a list of all entries and a list of the favorite entries. The code has to make a decision which of the should be displayed. The component that renders the entry list accepts a prop for the list of entries that should be display. Here it's the `entries` prop of the `EntriesSection` component.

- Pass the value to this prop conditionally. Depending on the state `showFavorites` you pass the array `entries` or the array `favoriteEntries` (hint: you can use the ternary operator)

You will see different entries in the UI now when clicking the filter buttons. If there are no entries displayed after you clicked on the "Favorites" button, you might need to click the "star" button of some entries first.

We are almost done. There are two minor things, that need to be fixed. First you might notice that one of the two filter buttons is highlighted as active. Clicking the buttons does not change this visual indicator yet.

- Alongside the `entries` prop also pass down the `showFavorites` state to the component rendering the two buttons. (Here it's the `EntriesSection` component)
- Inside of the `EntriesSection` component add the `showFavorites` prop the function declaration

Locate the prop that enabled the visual highlight for the buttons. In the template it's the `active` prop of the `Tab` and `Badge` component

- Pass the value of the `active` prop conditionally depending on the value of `showFavorites`

Now click on the filter buttons. You will the that the visual highlight gets applied to the button you clicked, while the other buttons looses the visual highlight.

The last thing we need to adjust is the number inside thw filter buttons. They indicate how many entries are in each of the two lists.

Stay in the component rendering the two buttons. Here it's the `EntriesSection` component).

- Add two new props to the function declaration: `amountAllEntries` and `amountFavoriteEntries`

Go up in the component hierarchy to the place where this component is rendered.

- Add the props `amountAllEntries` and `amountFavoriteEntries` props and pass a value for each
- The value can be read from the `length` property of the two arrays `entries` and `favoriteEntries`

The UI should display the correct number of entries within the filter buttons now.

Awesome job! You've worked your way through a rather complex app and coded many cool features 🚀

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
