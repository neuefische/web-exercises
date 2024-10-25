
# Recap Project 5: Art Gallery

In this project, your team will create an interactive art gallery app.

This is a group project, so please create **only one project per group** following the [guide in the template section](./README.md#template).

## Overview

This project involves creating an art gallery app with four main pages: **Spotlight**, **Gallery**, **Favorite**, and **Detail**. Users will have the ability to like or unlike art pieces, and all liked pieces will appear on the **Favorite** page.

Each item from the API includes a URL to the art piece image. Use the `next/image` component to display these images. Remember to add `example-apis.vercel.app` to the allowed domains in the Next.js configuration file. You can refer to the **Next.js Basics and Routing** session handout for guidance. (Don’t forget to restart the development server after making any configuration changes.)

In addition to displaying the art pieces, your gallery app should handle dynamic data that updates based on user interactions. You’ll need to establish a state to manage information linked to the art pieces from the API. Refer to the **React Data Fetching** session handout for further guidance.

The goal of this project is to write clean code with well-isolated components rather than to complete all features. Follow the outlined tasks within each user story for structure.

Plan your work effectively, and coordinate your next steps as a team.

## API

We will fetch all necessary information about the art pieces from an API specifically designed for this course. [Check out the API](https://example-apis.vercel.app/api/art).

```bash
https://example-apis.vercel.app/api/art
```

## Template

1. Open your terminal and navigate to your projects folder.
2. Execute the following command to create a new project based on a template:

   ```bash
   npx ghcd@latest neuefische/web-exercises/tree/main/templates/next art-gallery-app -i
   ```

3. Create a new empty repository on GitHub and add all group members as collaborators.
4. Link your local repository to the GitHub repository and push the code.
5. Each group member should clone the repository to their local machine.
6. Follow the instructions in the `README.md` file.

> 💡 **Tip**: Work on feature branches to avoid merge conflicts!

## Resources

Download a [Favorite Icon](https://lucide.dev/icons/) and save it in an "assets" folder within your app's main directory.

## Deploying Your Project

🚀 Project Deployment to Vercel is required: Please follow [these instructions](https://github.com/neuefische/web-protocol-template/blob/main/docs/deployment-vercel.md) to deploy the project on Vercel.

## User Stories

### User Story 1: List of all Art Pieces

#### Value Proposition

**As an** art enthusiast

**I want to** see a list of all art pieces

**so that** I can get an overview of all art pieces.

#### Acceptance Criteria

- [ ] All art pieces are displayed as a list
- [ ] Each art piece's image is displayed
- [ ] Each art piece's title is displayed
- [ ] Each art piece's artist is displayed

#### Tasks

- [ ] Fetch all art pieces with `SWR` in `pages/index.js`
- [ ] Create the component `ArtPieces` to render a list
- [ ] `ArtPieces` props: `pieces`
- [ ] Create the component `ArtPiecePreview`
- [ ] `ArtPiecePreview` props: `image`, `title`, `artist`

---

### User Story 2: Spotlight Piece

#### Value Proposition

**As an** art enthusiast

**I want to** see a spotlight piece

**so that** I can get inspirational highlights.

#### Acceptance Criteria

- [ ] One art piece is picked at random to show as a spotlight piece
- [ ] The art piece image is displayed
- [ ] The art piece artist is displayed

#### Tasks

- [ ] Write function to pick one art piece [at random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples)
- [ ] Create the component `Spotlight`
- [ ] `Spotlight` props: `image`, `artist`

---

### User Story 3: Separate Pages and Navigation Bar

#### Value Proposition

**As an** art enthusiast

**I want to** be able to switch between the spotlight and list view

**so that** I can navigate the app easier.

#### Acceptance Criteria

- [ ] A navigation link labeled "Spotlight" is displayed
- [ ] A navigation link labeled "Pieces" is displayed
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

---

### User Story 4: Art Piece Details Page

#### Value Proposition

**As an** art enthusiast

**I want to** be able to see the full art piece with detail information

**so that** I can learn everything about the piece.

#### Acceptance Criteria

- [ ] Clicking an art piece from the list shows the detail page
- [ ] The art piece image is displayed
- [ ] The art piece title is displayed
- [ ] The art piece artist is displayed
- [ ] The art piece year is displayed
- [ ] The art piece genre is displayed
- [ ] A back-button is displayed
- [ ] Clicking the back-button shows the list view

#### Tasks

- [ ] Create the component `ArtPieceDetails`
- [ ] `ArtPieceDetails` props: `image`, `title`, `artist`, `year`, `genre`
- [ ] Create the page `pages/art-pieces/[slug]` that renders `ArtPieceDetails`
- [ ] Read the query parameter `slug` from `next/router`
- [ ] Use the `slug` to find the art piece to display

---

### User Story 5: Favorites

#### Value Proposition

**As an** art enthusiast

**I want to** mark art piece pieces as favorites

**so that** I can find them easier.

#### Acceptance Criteria

- [ ] The favorite-button is displayed in each entry in the list view
- [ ] The favorite-button is displayed in the details view
- [ ] The favorite-button is NOT displayed in the spotlight view
- [ ] Clicking the favorite-button on a non-favorite piece saves it as a favorite
- [ ] Clicking the favorite-button on a favorite piece removes it from favorites

#### Tasks

- [ ] Create an additional state `artPiecesInfo` to save further information for art pieces
- [ ] Make the `artPiecesInfo` state globally available for all pages
- [ ] Store the favorite flag in the `artPiecesInfo`
- [ ] Reference art pieces by `slug` in the additional state
- [ ] Create the component `FavoriteButton`
- [ ] `FavoriteButton` props: `isFavorite`, `onToggleFavorite`
- [ ] Render the `FavoriteButton` component in the `ArtPiecePreview` and `ArtPieceDetails` component

---

### User Story 6: Favorite Listing Page

#### Value Proposition

**As an** art enthusiast

**I want to** see a comprehensive list of all my favorite art pieces

**so that** I can have an overview of all of my favorites.

#### Acceptance Criteria

- [ ] A navigation link labeled "Favorites" is displayed
- [ ] Clicking the "Favorites" shows the FavoritesPage
- [ ] All favorite art pieces are displayed as a list
- [ ] Each art piece's image is displayed
- [ ] Each art piece's title is displayed
- [ ] Each art piece's artist is displayed
- [ ] Each art piece's is displayed with active favorite-button

#### Tasks

- [ ] Create the page `pages/favorites` that renders the `ArtPieces` component
- [ ] Use data from the `artPiecesInfo` state to filter for all favorite art pieces
- [ ] Pass the list of all favorite art pieces via prop `pieces` to the `ArtPieces` component

---

### User Story 7: Comments for Art Pieces

#### Value Proposition

**As an** art enthusiast

**I want to** write comments for art pieces

**so that** I can note my ideas regarding the work.

#### Acceptance Criteria

- [ ] The detail view has a list of comments for this art piece with the headline "Comments"
- [ ] Each comment's text is displayed
- [ ] Each comment's date and time is displayed
- [ ] The detail view has an input field to write a comment
- [ ] The detail view has a submit button labeled "Send"
- [ ] After submitting the form, the comment is appended to the list of comments

#### Tasks

- [ ] Store comments per art piece in the `artPiecesInfo` state
- [ ] Create a `CommentForm` component
- [ ] `CommentForm` props: `onSubmitComment`
- [ ] Create a `Comments` components
- [ ] `Comments` props: `comments`

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

---

### User Story 9: Show Color Palette

#### Value Proposition

**As an** art enthusiast

**I want to** see the color palette of an art piece

**so that** I can find color inspiration.

#### Acceptance Criteria

- [ ] The art piece detail page shows a list of all colors used in the image
- [ ] The colors may be displayed as circles, squares, ...

#### Tasks

- [ ] Pass the `colors` given by the API to the `ArtPieceDetails` component
- [ ] Use the color hex-code in a styled component to render an element with this color as background
