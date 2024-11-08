# React State: Journal App with Favorite Button and Shared State

In this challenge we want to store the favorite feature in the shared state alongside the other entry data.

## Tasks

### Prepare the state for entries

First we need to make sure all entries in state contain information about the favorite button. Locate the component holding the shared state for all entries. Here it is the `App` component.

- Add the key `isFavorite` with the value `false` to each entry in the `initialEntries` array.
- Add the key `isFavorite` with the value `false` to a newly created entry in the function `handleAddEntry`.

This was important to have a consistent shape of all entry objects 🚀

### Handle clicks on the favorite button

Now let's wire up this information stored in state with the favorite button.

Locate the component with the favorite button. Here it's called `FavoriteButton`.

- Accept a new prop in this component called `onToggleFavorite`. This event should be triggered when users press the favorite button.
- Accept a new prop called `isFavorite`.
- Accept a new prop called `id`.
- Remove the local state `isFavorite` from this component.
- Change the button's `onClick` prop to call `onToggleFavorite` and pass `id` with this call as first argument.

Great, the favorite button can now inform via an exposed event, which entry should be marked as favorite (or which favorite to remove) 🚀

### Drill all the props

> 💡 This step is closely tied to the starter template and depends heavily on the design of your app.

Locate the component that renders a single entry including the favorite button. Here it's `Entry`.

- In this component accept the three props too: `onToggleFavorite`, `isFavorite`, `id`.
- Pass all three props to the `FavoriteButton` component.

Locate the component that renders the list of all entries. Here it's `EntrySection`.

- Accept the prop `onToggleFavorite`.
- Adjust the integration of the `Entry` component to pass the `onToggleFavorite` prop.
- In addition pass each entry's `id` and `isFavorite` information to the `Entry` component as prop.

Everything is wired up! 🚀

### Update the state

Now let's finally adjust the state handling. Go back to the `App` component.

- Create a new function called `handleToggleFavorite` which accepts `id` as parameter.
- Inside this function update the state by calling `setEntries`. To create a new state value iterate over the `entries` array and search for the entry matching the `id`. If the `id` matches invert the value of `isFavorite`. (hint: you can use the array method `map` for this)
- Adjust the integration of the `EntrySection` component to pass the function `handleToggleFavorite` to the `onToggleFavorite` prop.

You have successfully refactored your app to have a more concise state handling! 🚀 🚀 🚀

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
