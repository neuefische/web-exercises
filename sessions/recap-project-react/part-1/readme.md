# React Recap Project - Part 1

![wireframe](../assets/part-1-1.png)

## Features

The app displays a list of album cards from already available data.

## Acceptance Criteria

- A list of albums is displayed based on the `data` array in `./src/db.js`
- Every album contains the album cover, the album title and interpret
- A title with the name of your app is displayed on top of your app
- For creating the albums cards, a component called `AlbumCard` is created and used

## Notes

- Start your project with using the `npx create-react-app` command. Remove all boilerplate files and start with a fresh empty react project.
- Create a new file called `db.js` inside your projects `src` folder and copy the album data from [this source](https://raw.githubusercontent.com/neuefische/web-react-recap-project-solution/main/src/db.js?token=GHSAT0AAAAAACHXGNQJQZ7LAXQALX532RFYZLGCVZA) into it.
- Work on your app in the mobile view of your browser. In firefox, you can activate it with the shortcut `cmd+alt+m`.
- For every component, create a corresponding `css` file with the same name and import it at the top of your component file. Write all styles for the component in this css file.
- Take a look at the data in the `db.js`. How is it structured? What keys belong to what element in the list? Make sure to understand the structure before using it.
