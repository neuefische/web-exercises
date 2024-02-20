# Recap Project I: Quiz App - Layout

In this project you will build the layout of your first mobile web application, a quiz app. In later
projects we will expand this app and add all sorts of cool functionality. In this app you will be
able to:

- Read questions and click buttons to look up the answers.
- Bookmark questions and view them on a bookmarks page.
- Visit your profile page.

❗️ You don't have to worry about how to toggle answers or bookmarks, we will work on that in a
later project. But make sure you include the answer texts and bookmark buttons in your app. (You
might want to look up the "hidden" attribute.)

## Overview

In this project we will have 3 pages:

- **Home page:** Here, you'll have access to view all questions available on the platform.
- **Bookmark page:** This is a dedicated space where you can exclusively view the questions you've bookmarked, similar to the ones marked on the home page.
- **Profile page:** were you will be able to view your profile and settings.

[Here](./topics.md) you have some ideas of topics for your quiz app use one or choose one of your own, but please do not use lorem text

## 1. Setup

To begin, perform the following tasks:

- Create a new folder for your project named `yourName-quiz-app`
- Initialize a local git repository.
- Create a `.gitignore` file and add `.DS_Store` and `.vscode` to the file.
- Create a remote repository and connect it to the local repository.
- Create the `index.html` and `styles.css` files.
- Make sure the CSS file is loaded in the HTML document.
- 🚀 Project Deployment to GitHub Pages is required: Please adhere to the deployment guidelines outlined in your repository's documentation `(https://github.com/spiced-academy/[your-cohort-name]-web-dev/blob/main/docs/github-pages.md)` for detailed instructions. In the URL replace `[your-cohort-name]` with your cohort's designated name.

## 2. Home Page

As you already know from previous challenges, as developers we want to always finish a feature and
add it to our main branch, instead of starting 3 different features and none of them work. This is
why the first step to success is to start with the homepage.

- Create the following layout:

![homepage](assets/homepage.png)

- Start with the feature 'title' on a fresh feature branch and create the app title.

- When done, use the feature branch workflow to merge your results into the main branch.
- Continue in the same way with the 'question-card' and 'navbar'.

> 💡 Hint: Make sure to use anchor elements for the navbar, so you can link to the other pages later
> on!

> 💡 Hint: You can ask coaches and fellow students to review your PRs. You will learn and improve a
> lot by doing so.

## 3. Bookmarks Page

![homepage](assets/bookmarkspage.png)

The second page is the bookmarks page.

- Create a new file called 'bookmarks.html'.
- Add content to the page. You can copy content of the `index.html` to save time.
- Make sure that only bookmarked questions are on this page.
- Update the navbar so that the bookmark icon is highlighted.
- Link the two pages via the anchor elements. (Also on the homepage).

## Extra: Profile Page

Create the profile page in the same way you created the other two pages.

- Create a new file `profile.html`.
- Add content to the page.
- Link the pages via the anchor elements.

> 💡 The counter and switch don't have to work for now, we will implement this later.

## Recommendation: Structure

### Separate the Quiz App CSS code into different files

The file name should match the name of the
component.

Move all styles that are used across multiple components to a `global.css` file. Your main CSS file (e.g. `styles.css`) should have several `@import` statements.

The file structure might look something like this:

```
quiz-app
├── components
│   ├── button.css
│   ├── card.css
│   ├── header.css
│   └── navigation.css
├── global.css
├── styles.css
├── profile.html
├── bookmarks.html
└── index.html
```

❗️ Make sure you apply the BEM method to your Quiz App (Bring more structure to your code by using BEM to name all classes!)

## Resources

⬇️ You can [**download the images for the Quiz App here**](./resources.zip?raw=true).

- Unzip the file to get the `resources` folder.
- Copy them into your app's main directory.
