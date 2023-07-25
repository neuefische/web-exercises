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

If you´ve seen more advanced git techniques (pull requests and branches) already … great! Keep in mind starting with a new feature branch for each feature you implement. After you are done with a feature, create a pull request, let it be reviewed and merge it into the main branch.

If you haven't seen git branches and pull requests yet, don't worry. You will learn about them soon. For now, just follow the instructions below.

## 1. Setup

Start by:

- Creating a new git repository for your project.
- Create a `.gitignore` file and add `.DS_Store` to the file.
- Create the `index.html` and `styles.css` files.
- Make sure the CSS file is loaded in the HTML document.
- (Optional) When you are working locally, connect your local repository to the remote repository on GitHub.

## 2. Home Page

As you already know from previous challenges, as developers we want to always finish a feature and
add it to our main branch, instead of starting 3 different features and none of them work. This is
why the first step to success is to start with the homepage.

- Create the following layout:

![homepage](assets/homepage.png)

- Start with the feature 'title' and create the app title.
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
