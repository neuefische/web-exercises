# Recap Project 5: Art Gallery App

In this recap project you will create an art gallery app.

There is an API that provides you with all art pieces to show in the gallery:

```
https://example-apis.vercel.app/api/art
```

Each item given by the API will include an URL to the image of the art piece. Use the `next/image` component to display the image. Don't forget to add the domain `example-apis.vercel.app` to the Next.js config file. Refer to the handout of the Session **Next.js Basics and Routing** for help (always restart the dev server after a config change).

Besides the art pieces themselves, your gallery app needs to handle data that changes on user interaction. You are required to establish a state to store additional information, that is linked to the art pieces given by the API. Please refer to the handout of the session **React Data Fetching** for guidance.

The following user stories define the features you should add to the app. We advise you to work on the user stories roughly in the order they are noted here. Some user stories depend on each other. Some can be implemented independently.

Create a new repository on GitHub and add everybody in your group as collaborator. When starting with the app you should implement the basic setup in a mob. Afterwards you should split up. Each group member can contribute parts to the app individually or in pair programming. Use different branches and pull requests to work in parallel.

Plan your work wisely and talk about your next steps in the team.

The goal of this recap project is not necessarily to finish all features, but to write clean code with isolated components that are tested well. The acceptance criteria of the user stories point out requirements that should be covered by component testing. It is advised to follow the noted tasks in each user story.

---

## Create the App

First create a new Next.js based on our template using this command:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/templates/next art-gallery-app
```

Download and extract the [Resources](#resources) into your project folder.

---

## User Stories

### User Story 1: List of all Art Pieces

#### Value Proposition

**As an** art enthusiast

**I want to** see a list of all art pieces

**so that** I can get an overview of all art pieces.

#### Acceptance Criteria

- [ ] All art pieces are displayed as a list 🖼️
- [ ] Each art piece's image is displayed 🖼️
- [ ] Each art piece's title is displayed 🖼️
- [ ] Each art piece's artist is displayed 🖼️

#### Tasks

- [ ] Fetch all art pieces with `SWR` in `pages/index.js`
- [ ] Create the component `ArtPieces` to render a list
- [ ] `ArtPieces` props: `pieces`
- [ ] Create the component `ArtPiecePreview`
- [ ] `ArtPiecePreview` props: `image`, `title`, `artist`
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 2: Spotlight Piece

#### Value Proposition

**As an** art enthusiast

**I want to** see a spotlight piece

**so that** I can get inspirational highlights.

#### Acceptance Criteria

- [ ] One art piece is picked at random to show as a spotlight piece
- [ ] The art piece image is displayed 🖼️
- [ ] The art piece artist is displayed 🖼️

#### Tasks

- [ ] Write function to pick one art piece [at random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples)
- [ ] Create the component `Spotlight`
- [ ] `Spotlight` props: `image`, `artist`
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 3: Separate Pages and Navigation Bar

#### Value Proposition

**As an** art enthusiast

**I want to** be able to switch between the spotlight and list view

**so that** I can navigate the app easier.

#### Acceptance Criteria

- [ ] A navigation link labeled "Spotlight" is displayed 🖼️
- [ ] A navigation link labeled "Pieces" is displayed 🖼️
- [ ] Clicking "Spotlight" shows the SpotlightPage
- [ ] Clicking "Pieces" shows the ArtPiecesPage

#### Tasks

- [ ] Move the data fetching logic to `pages/_app`
- [ ] Find a solution for global state handling to have the art pieces available on all pages
- [ ] Adapt the page `pages/index`: rename the function to `SpotlightPage` and have it render only the `Spotlight` component
- [ ] Create the page `pages/art-pieces/index` that renders the `ArtPieces` component
- [ ] Create the component `Navigation` that renders all navigation links
- [ ] Create the component `Layout` that renders the `Navigation` component
- [ ] Apply the `Layout` component in `pages/_app`
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 4: Art Piece Details Page

#### Value Proposition

**As an** art enthusiast

**I want to** be able to see the full art piece with detail information

**so that** I can learn everything about the piece.

#### Acceptance Criteria

- [ ] Clicking an art piece from the list shows the detail page
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
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 5: Favorites

#### Value Proposition

**As an** art enthusiast

**I want to** mark art piece pieces as favorites

**so that** I can find them easier.

#### Acceptance Criteria

- [ ] The favorite-button is displayed in the spotlight view 🖼️
- [ ] The favorite-button is displayed in each entry in the list view 🖼️
- [ ] The favorite-button is displayed in the details view 🖼️
- [ ] Clicking the favorite-button on a non-favorite piece saves it as a favorite 🖼️
- [ ] Clicking the favorite-button on a favorite piece removes it from favorites 🖼️

#### Tasks

- [ ] Create an additional state `artPiecesInfo` to save further information for art pieces
- [ ] Make the `artPiecesInfo` state globally available for all pages
- [ ] Store the favorite flag in the `artPiecesInfo`
- [ ] Reference art pieces by `slug` in the additional state
- [ ] Create the component `FavoriteButton`
- [ ] `FavoriteButton` props: `isFavorite`, `onToggleFavorite`
- [ ] Render the `FavoriteButton` component in the `Spotlight`, `ArtPiecePreview` and `ArtPieceDetails` component
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 6: Favorite Listing Page

#### Value Proposition

**As an** art enthusiast

**I want to** see a comprehensive list of all my favorite art pieces

**so that** I can have an overview of all of my favorites.

#### Acceptance Criteria

- [ ] A navigation link labeled "Favorites" is displayed 🖼️
- [ ] Clicking the "Favorites" shows the FavoritesPage
- [ ] All favorite art pieces are displayed as a list 🖼️
- [ ] Each art piece's image is displayed 🖼️
- [ ] Each art piece's title is displayed 🖼️
- [ ] Each art piece's artist is displayed 🖼️
- [ ] Each art piece's is displayed with active favorite-button 🖼️

#### Tasks

- [ ] Create the page `pages/favorites` that renders the `ArtPieces` component
- [ ] Use data from the `artPiecesInfo` state to filter for all favorite art pieces
- [ ] Pass the list of all favorite art pieces via prop `pieces` to the `ArtPieces` component
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 7: Comments for Art Pieces

#### Value Proposition

**As an** art enthusiast

**I want to** write comments for art pieces

**so that** I can note my ideas regarding the work.

#### Acceptance Criteria

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
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

### User Story 8: Persist Favorites and Comments in the Browser

#### Value Proposition

**As an** art enthusiast

**I want to** persist my favorites and comments

**so that** the data will not be lost when I close the app.

#### Acceptance Criteria

- [ ] All favorite flags and comments added to art pieces are persisted across browser reloads

#### Tasks

- [ ] Install the package `use-local-storage-state`
- [ ] Use the `useLocalStorageState` hook to store the `artPiecesInfo` state

### User Story 9: Show Color Palette

#### Value Proposition

**As an** art enthusiast

**I want to** see the color palette of an art piece

**so that** I can find color inspiration.

#### Acceptance Criteria

- [ ] The art piece detail page shows a list of all colors used in the image
- [ ] The colors may be displayed as circles, squares, ...

#### Tasks

- [ ] Pass the `colors` given by the API to the `ArtPieceDetails` component 🖼️
- [ ] Use the color hex-code in a styled component to render an element with this color as background
- [ ] All acceptance criteria marked with 🖼️ are covered by component testing

---

## Resources

⬇️ You can [**download the data and assets for the Art Gallery App here**](./resources.zip?raw=true).

- Unzip the file to get the `resources` folder.
- The files are already in the correct structure for the app.
  - `assets/heart.svg` contains the svg for the favorite button.
  - `lib/hooks/useImmerLocalStorageState` contains a custom hook to implement `Immer` together with local storage.
- Copy them into your app's main directory.
