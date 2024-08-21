# Movie Details Page

## Value Proposition

**As a** user <br>
**I want to** be able to view detailed information about a specific movie, <br>
**so that** I can more easily decide which movies to watch. <br>

## Description

![wireframe](./assets/scribble-movie-detail-page.png)

## Acceptance Criteria

- [ ] When the user selects a movie from the list on the homepage, they are directed to a dedicated movie details page.
- [ ] On the movie details page, the user sees the following information:
  - The movie's poster
  - The movie's title
  - The movie's release date
  - A informative description of the movie, providing insights into its plot and genre
- [ ] The user can return to the homepage by clicking a dedicated "Back to Home" button located on the top of the movie details page.

## Tasks

- [ ] Create the feature branch `movie-details-page`
- [ ] Create the movie details page `pages/movies/[id].js`
  - [ ] Render the movie’s poster, title, release date and description
  - [ ] Add the `Link` component to navigate back to the homepage
- [ ] Update the `Movie` component
  - [ ] Add the `Link` component to navigate to the details page
