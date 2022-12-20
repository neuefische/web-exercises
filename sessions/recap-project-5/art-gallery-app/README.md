# Recap Project 5: Art Gallery App

In this recap project you will create an art gallery app.

There is an API that provides you with all art pieces to show in the gallery:

```
https://example-apis.vercel.app/api/art
```

Each item given by the API will include an URL to the image of the art piece. Use the `next/image` component to display the image. Don't forget to add the domain `example-apis.vercel.app` to the Next.js config file. Refer to the handout of the Session **Next.js Basics and Routing** for help (always restart the dev server after a config change).

Besides the art pieces themselves, your gallery app needs to handle data that changes on user interaction. You are required to establish a state to store additional information, that is linked to the art pieces given by the API. Please refer to the handout of the session **React Data Fetching** for guidance.

The following user stories define the features you should add to the app. We advise you to work on the user stories roughly in the order they are noted here. Some user stories depend on each other. Some can be implemented independently.

Create a new repository on GitHub and add everybody in your group als collaborator. When starting with the app you should implement the basic setup in a mob. Afterwards you should split up. Each group member can contribute parts to the app individually or in pair programming. Use different branches and pull requests to work in parallel.

Plan your work wisely and talk about your next steps in the team.

The goal of this recap project is not necessarily to finish all features, but to write clean code with isolated components that are tested well. The acceptance criteria of the user stories point out requirements that should be covered by component testing. It is advised to follow the noted tasks in each user story.

---

## User Stories

### User Story 1: List of all art pieces

#### Value proposition

**As an** art enthusiast

**I want to** see a list of all art pieces

**So that** I can get an overview of all presented art pieces

#### Acceptance criteria

- [ ] All art pieces are displayed as a list 🖼️
- [ ] Each art piece's image is displayed 🖼️
- [ ] Each art piece's title is displayed 🖼️
- [ ] Each art piece's artist is displayed 🖼️

#### Tasks

- [ ] Fetch all art pieces with `SWR`
- [ ] Create the component `ArtPieces` to render a list
- [ ] `ArtPieces` props: `pieces`
- [ ] Create the component `ArtPiecePreview`
- [ ] `ArtPiecePreview` props: `image`, `title`, `artist`
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 2: Spotlight piece

#### Value proposition

**As an** art enthusiast

**I want to** see a spotlight piece

**So that** I can get inspirational highlights

#### Acceptance criteria

- [ ] One art piece is picked by random to show as spotlight piece
- [ ] The art piece image is displayed 🖼️
- [ ] The art piece artist is displayed 🖼️

#### Tasks

- [ ] Write function to pick one art piece [by random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples)
- [ ] Create the component `Spotlight`
- [ ] `Spotlight` props: `image`, `artist`
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 3: Separate pages an navigation bar

#### Value proposition

**As an** art enthusiast

**I want to** be able to switch between the spotlight and list view

**So that** I can navigate the app easier

#### Acceptance criteria

- [ ] A navigation button labeled "Spotlight" is displayed 🖼️
- [ ] A navigation button labeled "Pieces" is displayed 🖼️
- [ ] Clicking "Spotlight" shows the spotlight art piece and hides the list
- [ ] Clicking "Pieces" shows the list of art pieces and hides the spotlight

#### Tasks

- [ ] Move the data fetching logic to `pages/_app`
- [ ] Find a solution for global state handling to have the art pieces available on all pages
- [ ] Create the page `pages/index` that renders the `Spotlight` component
- [ ] Create the page `pages/art-pieces/index` that renders the `ArtPieces` component
- [ ] Create the component `Navigation` that renders all navigation buttons
- [ ] Create the component `Layout` that renders the `Navigation` component
- [ ] Apply the `Layout` component in `pages/_app`
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 4: Art piece details page

#### Value proposition

**As an** art enthusiast

**I want to** be able to see the full art piece with detail information

**So that** I can learn everything about the piece

#### Acceptance criteria

- [ ] Clicking an art piece from the list shows the detail page
- [ ] Clicking the spotlight art piece shows the detail page
- [ ] The art piece image is displayed 🖼️
- [ ] The art piece title is displayed 🖼️
- [ ] The art piece artist is displayed 🖼️
- [ ] The art piece year is displayed 🖼️
- [ ] The art piece genre is displayed 🖼️
- [ ] A back-button is displayed 🖼️
- [ ] Clicking the back-button shows the list view

#### Tasks

- [ ] Create the component `ArtPieceDetails`
- [ ] `ArtPieceDetails` props: `image`, `title`, `artist`, `year`, `genre`
- [ ] Create the page `pages/art-pieces/[slug]` that renders `ArtPieceDetails`
- [ ] Read the query parameter `slug` from `next/router`
- [ ] Use the `slug` to find the art piece to display
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 5: Favorites

#### Value proposition

**As an** art enthusiast

**I want to** mark art piece pieces as favorites

**So that** I can find them easier

#### Acceptance criteria

- [ ] The favorite-button is displayed in the spotlight view 🖼️
- [ ] The favorite-button is displayed in each entry in the list view 🖼️
- [ ] The favorite-button is displayed in the details view 🖼️
- [ ] Clicking the favorite-button on a non-favorite piece save it as favorite 🖼️
- [ ] Clicking the favorite-button on a favorite piece removes it from favorites 🖼️

#### Tasks

- [ ] Create an additional state `artPiecesInfo` to save further information for art pieces
- [ ] Make the `artPiecesInfo` state globally available for all pages
- [ ] Store the favorite flag in the `artPiecesInfo`
- [ ] Reference art pieces by `slug` in the additional state
- [ ] Create the component `FavoriteButton`
- [ ] `FavoriteButton` props: `isFavorite`, `onToggleFavorite`
- [ ] Render the `FavoriteButton` component in the `Spotlight`, `ArtPiecePreview` and `ArtPieceDetails` component
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 6: Favorite listing page

#### Value proposition

**As an** art enthusiast

**I want to** see a comprehensive of all my favorite art pieces

**So that** I can have an overview of all favorites

#### Acceptance criteria

- [ ] A navigation button labeled "Favorites" is displayed 🖼️
- [ ] Clicking the "Favorites" shows the favorites and hides other views
- [ ] All favorite art pieces are displayed as a list 🖼️
- [ ] Each art piece's image is displayed 🖼️
- [ ] Each art piece's title is displayed 🖼️
- [ ] Each art piece's artist is displayed 🖼️
- [ ] Each art piece's is displayed with active favorite-button 🖼️

#### Tasks

- [ ] Create the page `pages/favorites` that renders the `ArtPieces` component
- [ ] Use data from the `artPiecesInfo` state to filter for all favorite art pieces
- [ ] Pass the list of all favorite art pieces via prop `pieces` to the `ArtPieces` component
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 7: Comments for art pieces

#### Value proposition

**As an** art enthusiast

**I want to** write comments for art pieces

**So that** I can note my ideas regarding the work

#### Acceptance criteria

- [ ] The detail view has a list of comments for this art piece with the headline "Comments" 🖼️
- [ ] Each comment's text is displayed 🖼️
- [ ] Each comment's date and time is displayed 🖼️
- [ ] The detail view has an input field to write a comment 🖼️
- [ ] The detail view has a submit button labeled "Send" 🖼️
- [ ] After submitting the form, the comment is appended to the list of comments 🖼️

#### Tasks

- [ ] Store comments per art piece in the `artPiecesInfo` state
- [ ] Create a `CommentForm` component
- [ ] `CommentForm` props: `onSubmitComment`
- [ ] Create a `Comments` components
- [ ] `Comments` props: `comments`
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

### User Story 8: Persist favorites and comments in the browser

#### Value proposition

**As an** art enthusiast

**I want to** persist my favorites and comments

**So that** I data will not be lost when I close the app

#### Acceptance criteria

- [ ] All favorite flags and comments added to art pieces are persisted across browser reloads

#### Tasks

- [ ] Install the package `use-local-storage-state`
- [ ] Use the `useLocalStorageState` hook to store the `artPiecesInfo` state

If the `useImmer` is used to mutate the `artPiecesInfo` state, this example might help you to combine both.

Hook:

```js
import { useMemo } from "react";
import { produce } from "immer";
import useLocalStorageState from "use-local-storage-state";

export function useImmerWithLocalStorage(key, defaultValue) {
  const [data, setData] = useLocalStorageState(key, {
    defaultValue,
  });
  const updateData = useMemo(() => produce(setData), [setData]);
  return [data, updateData];
}
```

Usage in `App` component:

```jsx
import { useImmerWithLocalStorage } from "./useImmerWithLocalStorage";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerWithLocalStorage(
    "art-pieces-info",
    []
  );
  // ...
}
```

---

### User Story 9: Show Color Palette

#### Value proposition

**As an** art enthusiast

**I want to** see the color palette of an art piece

**So that** to find color inspiration

#### Acceptance criteria

- [ ] The art piece detail page shows a graphical list of all colors used in the image

#### Tasks

- [ ] Pass the `colors` given by the API to the `ArtPieceDetails` component 🖼️
- [ ] Use the color hex-code in a styled component to render an element with this color as background
- [ ] All acceptance criteria marked with 🖼️ are covered with component testing

---

## Development

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.

---

## Resources

⬇️ This starter will provide you with the following resources:

- Use the `heart.svg` file for the favorite icon button. Import it in your components directly.
- Use the custom hook `useImmerLocalStorageState` to implement `Immer` together with local storage.
