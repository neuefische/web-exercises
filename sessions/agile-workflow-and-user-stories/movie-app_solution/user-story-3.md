# Watchlist

## Value Proposition

**As a** user <br>
**I want to** have the ability to add and remove movies from my watchlist, <br>
**so that** I can keep track of the movies I'm interested in watching. <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

- [ ] There is a navigation bar that allows the user to switch between the homepage and the watchlist.
  - [ ] The navigation bar is fixed to the bottom of the viewport.
  - [ ] The link to the current page in the navigation bar is visually highlighted, to indicate the user's current location in the app.
- [ ] On the movie details page:
  - [ ] There is a button labeled “Add to Watchlist” that allows the user to add the current movie to their watchlist.
  - [ ] If the movie is already on the user's watchlist, the button on the movie details page changes to "Remove from Watchlist".
- [ ] On the watchlist page:
  - [ ] The watchlist displays all movies that the user has added, showing their titles, posters, and ratings.
  - [ ] When the user selects a movie from the watchlist, they are directed to the movie details page.
  - [ ] If the watchlist is empty, a message is displayed on the watchlist page, indicating that there are no movies in the watchlist.
  - [ ] The watchlist is vertically scrollable.

## Tasks

- [ ] Create the feature branch `watchlist`
- [ ] Create a `Navigation` component
  - [ ] Add a `Link` component for the homepage and the watchlist
  - [ ] Highlight the link to the current page
- [ ] Create a `Layout` component
  - [ ] Add the `Navigation` component
- [ ] Render the `Layout` component in the `_app.js`
- [ ] Update the movie details page `pages/movies/[id].js`
  - [ ] Include a button labeled “Add to Watchlist”
  - [ ] Implement the logic that changes the button label if the movie is already on the watchlist
- [ ] Update the `app.js`
  - [ ] Create a `useState` for the watchlist
  - [ ] Implement a function that adds or removes movies from the user's watchlist
- [ ] Create the page `pages/watchlist.js`
  - [ ] Reuse the `MovieList` component to display the movies on the watchlist
  - [ ] Display a message on the watchlist page if it's empty, indicating that there are no movies in the watchlist
