# Next.js Basics: Lord of the Rings App

You are going to create a fan page about the Lord of the Rings books.

## Create the App

First create a new Next.js based on our template using this command:

```
npx ghcd@latest neuefische/web-exercises/tree/main/templates/next lotr-app -i
```

> 💡 Our Next.js template is very similar to `create-next-app` but it also installs additional dependencies. It adds support for testing using Jest and also installs Styled Components, which you will learn about in the upcoming sessions.

Download and extract the [Resources](#resources) into your project folder.

## Create the pages

Create the following pages:

| Route                                 | Purpose                                                |
| ------------------------------------- | ------------------------------------------------------ |
| `/`                                   | Display link to the volume overview `/volumes`         |
| `/volumes`                            | Display list with links to all volumes                 |
| `/volumes/the-fellowship-of-the-ring` | Display data for volume 1 (The Fellowship of the Ring) |
| `/volumes/the-two-towers`             | Display data for volume 2 (The Two Towers)             |
| `/volumes/the-return-of-the-king`     | Display data for volume 3 (The Return of the King)     |

> 💡 A quick heads up about The Lord of the Rings: The book series has three volumes: The Fellowship of the Ring, The Two Towers and The Return of the King. Each volume contains two books for a total of six books.

## Overview Page Contents

> ❗️ **Ignore all styling for now.** Just use the default browser styles. You will add styling in an upcoming session.

The overview page should contain the following:

- A heading with the title "Lord of the Rings" (`h1`)
- The introduction text imported from `lib/data.js` (`p`)
  ```js
  import { introduction } from "../../lib/data";
  ```
- A heading with the title "All Volumes" (`h2`)
- An unordered list with links to all volumes (`ul`, `li` and `Link`)
  - The link text should be the volume title
  - The link should point to the volume page

You can hard code the volumes for now. If you want to make it dynamic, you can use the `volumes` array from `lib/data.js`. Use the `Link` component from Next.js to link to the volume pages.

## Detail Page Contents

Import the `volumes` array from `lib/data.js` and find the data for each volume. You can identify each volume by the `slug` property, which acts like an ID. (Use `volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")` to find the book with the slug `the-fellowship-of-the-ring`.)

Each detail page should have the following content:

- A link "← All Volumes" that links back to the overview page (`Link`)
- The title of the book (`h1`)
- The description of the book (`p`)
- An unordered list of the books contained in the volume (`ul` and `li`)
  - Each book should show its ordinal number and title

### Bonus: Previous and Next Volume Links

Add links to the previous and next volume to the bottom of the detail pages. If there is no previous or next volume, do not render the link.

## Add volume covers

The volume covers are located in the `public` folder. The `volumes` data contains the file names of the covers. You can use the `Image` component from Next.js to display the images.

Add the cover image to the detail pages of each volume, below the list of books.

Use a width of `140px` and a height of `230px` for the cover image.

## Resources


You can find the movie data, introduction and images in [this folder](./resources/). You can download them with our `ghcd` tool by using these commands **inside your project folder**:

```bash
cd lotr-app
```

```bash
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/nextjs-basics-and-routing/lotr-app/resources resources
```

```bash
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/nextjs-basics-and-routing/lotr-app/design-resources design-resources
```

- The files are already in the correct structure for the app.
  - `lib/data.js` contains the data for the app.
  - `public/images` contains the images for the app.
- Copy them into your app's main directory.
