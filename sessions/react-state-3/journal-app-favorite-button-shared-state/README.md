# React State: Journal App Favorite Button with shared state

Currently our the favorite feature of your journal app is using a local state. We want to store this information in the shared state alongside the other entry data.

> 💡 You can use this template as a starting point. But if you are far enough along with your own Journal App, please use that instead.

## Task

First we need to make sure all entries in state contain information about the favorite button. Locate the component holding the shared state for all entries. Here it is the `App` component.

- Add the key `isFavorite` with the value `false` to each entry in the `initialEntries` array.
- Add the key `isFavorite` with the value `false` to a newly created entry in the function `handleAddEntry`.

Now let's wire up this information stored in state with the favorite button.

Locate the component with the favorite button. Here it's called `FavoriteButton`.

- Accept a new prop in this component called `onToggleFavorite`. This event should be triggered when users press the favorite button.
- Accept a new prop called `isFavorite`.
- Accept a new prop called `id`.
- Remove the local state `isFavorite` from this component.
- Change the button's `onClick` prop to call `onToggleFavorite` and pass `id` with this call as first argument.

Locate the component that renders a single entry including the favorite button. Here it's `Entry`.

- In this component accept the three props too: `onToggleFavorite`, `isFavorite`, `id`.
- Pass all three props to the `FavoriteButton` component.

Locate the component that renders the list of all entries. Here it's `EntrySection`

- Accept a new prop `onToggleFavorite`
- Adjust the integration of the `Entry` component to pass the `onToggleFavorite` prop
- In addition pass each entry's `id` and `isFavorite` information to the `Entry` component as prop

Go back to the `App` component.

- Create a new function called `handleToggleFavorite` which accepts `id` as parameter
- Inside this function search for the entry matching the `id` and flip the value of the `isFavorite` key. (hint: you can use the array method `map` for this)
- Update the state by calling `setEntries`.
- Adjust the integration of the `EntrySection` component to pass the function `handleToggleFavorite` to the `onToggleFavorite` prop

You have successfully refactored your app to have a more concise state handling 🚀

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to start the development server

> 💡 This project requires a bundler. You can use `npm run start` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
