# Recap Project 2: Quiz App - Interactivity

In a previous project, you created the layout for a Quiz App using HTML and CSS. The focus of this project is to add interactivity with JavaScript.

## Overview

We will add interactivity to the **Home** and **Bookmark** pages, allowing users to bookmark a card and show or hide the answer to a question. Additionally, we will create a new page, **Add**, where users can submit their own questions with answers and hashtags. These newly created question cards will be displayed on the **Add** page.

In summary, this project will include the following four pages:

- **Home page:** Users can view all questions available on the platform.
- **Bookmark page:** A dedicated space to view bookmarked questions, similar to the ones marked on the home page.
- **Add page:** A page for users to create new questions by submitting a question, answer, and hashtag.
- **Profile page:** This section allows users to view and manage their profile and settings.

## Template

If you are not yet finished or not satisfied with your code from Recap Project 1, you can use this template to start your
work.

Open your terminal and navigate to the folder where all your projects are located. Execute the following
command to create a new project based on a template:

```bash
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/recap-project-2/quiz-app -i
```

Alternatively, you can keep working with the Quiz App you built in Recap Project 1.

### Template Overview

- There are three pages:
  - an `index.html` with a list of all question cards
  - a `bookmark.html` with bookmarked cards only
  - a `profile.html` with personal information and settings
- The structure of styling follows [BEM](http://getbem.com/introduction/); this is why the CSS files
  are organized according to their corresponding component.

## Resources

Download the required [Icons](https://lucide.dev/icons/) and save them in an "assets" folder within your app's main directory.

## Deploying Your Project

If you are using the template, you will need to deploy you project.

🚀 Project Deployment to GitHub Pages is required: Please adhere to the deployment guidelines outlined in your [repository's documentation](https://github.com/neuefische/web-protocol-template/blob/main/docs/deployment-github-pages.md) for detailed instructions.

## Tasks

### 1. Toggle functionality

You have successfully built your **card** component in your Quiz App. But currently the user
**can't** interact with it. Now we want to implement a toggle functionality for the bookmark and the
answer button.

> ❗️ All functionality applies to the first card and the first bookmark only. Applying the
> functionality to all cards and bookmarks will be discussed later in the bootcamp.

#### Bookmark button

The following acceptance criteria should be met for the bookmark button:

- When the user clicks the **bookmark icon** the **bookmark icon** should change it's visual state
  (e. g. another color or image)
- When the user clicks the **bookmark icon** again the **bookmark icon** should change to its former
  style
- The user can click on the bookmark endlessly and the bookmark will **toggle between both
  stylings**

> **Note:** Clicking on a bookmark icon will not yet cause the question to be displayed on the
> **favorites** page as well and this is **not** part of the exercise.

#### Answer button

The following acceptance criteria should be met for the answer button:

- When the user clicks on the **button** the **previously hidden** answer should be displayed
- When the user clicks this **button** again the answer is **hidden** again
- The user can click on this button endlessly and the answer will **either be displayed or hidden**
  after each click
- The **toggle** functionality should be applied by using a **class** which is named **"hidden"**
> If you used the template, there is a class `card__answer--active` you can work with
- If the user clicks on an answer button, we want the button to say **"hide answer"** when the
  answer is displayed and **"show answer"** when the answer is not displayed.

### 2. Form to add new cards

Users should be able to add new cards to your Quiz App. The first step is to add a page with a form.

![Quiz App form](./wireframes/quiz-app-form-page.png)

- Create a new HTML document called `form.html`
- Add the page to the navigation of your Quiz App
- Within `form.html` create a form with the following fields
  - "Your question" as `<textarea />`
  - "Your answer" as `<textarea />`
  - "Tag" as `<input type="text" />`
  - Submit button

> ❗️ Please consider only a single tag per card for now. Handling a list of individual tags will be
> discussed later on.

### 3. Create new Cards

The data entered into the form by users should be used to create a new question, that will be
displayed as a **card** like the other questions.

- Listen the form's `submit` event
- Prevent the default submit behavior to handle everything within JavaScript
- Read all entered data from the input fields (question, answer, tags)
- Generate all DOM element for a **card** with `createElement()`
- Insert the form's data as text into the DOM elements
- Append the **card** to the page, directly below the form

> ❗️ For now the new **card** should be displayed directly below the form. Adding the **card** to
> the list of the other cards is a topic for later.

> **Note:** To avoid error messages, we recommend creating a new JavaScript file specifically for your form page. This ensures that any event listeners you've added for other pages won't cause problems with HTML elements that aren't present on the form page.

### 4. Form field text counter

The form fields for question and answer should be limited to a text of 150 characters. While typing
users should be informed about the amount of characters left.

![Quiz App form with counter](./wireframes/quiz-app-form-page-with-counter.png)

- Add a `maxlength` attribute to the form fields
- Add a display below the form fields to show the amount of characters
- Use the `input` event to read the `length` of a field's content and calculate and display the
  result
- Think of ways to use the same logic for both form fields and to not repeat your code

## Bonus

1. When adding a new question card in your newly created `form.html`, also add event listeners to the new button and icon which will have the same functionality as described in Task 1.

   > ❗️ You DON'T need any loops or querySelectorAll. Just try to grab the individual button and icon directly after adding them to the DOM by giving them unique attributes.

2. Add an event listener to the dark mode toggle button in your profile page which should toggle on a dark or light version of the profile page.

   > ❗️ You'll need to set some CSS variables as attributes to the <body> element for example.

   > ❗️ This functionality should only work for the profile page. Later in the course we will have a look at how to implement dark/light mode on the whole application.
