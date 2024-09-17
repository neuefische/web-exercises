# Movies List

## Value Proposition

**As a** user <br>
**I want to** see a list of current movies, <br>
**so that** I can quickly discover and explore the latest films. <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- [ ] On the home page, there is a list of current movies displayed.
- [ ] Each movie in the list includes the following details:
  - [ ] The name of the movie
  - [ ] The poster image of the movie
  - [ ] The rating of the movie
- [ ] If there is an issue loading the movie data from the source, an error message is displayed to the user.
- [ ] The movie list is vertically scrollable.

## Tasks

- [ ] Create the feature branch `movie-list`
- [ ] Fetch a list of current movies from The MovieDB API
  - [ ] Implement the error handling logic to display an error message if there's an issue loading movie data from the API
- [ ] Create the component `Movie`, which renders:
  - the name of the movie
  - the poster image of the movie
  - the rating of the movie
- [ ] Create the component `MovieList`
  - [ ] Map through the fetched list of movies and render a `Movie` component for each movie
- [ ] Render the `MovieList` component in the `index.js`
