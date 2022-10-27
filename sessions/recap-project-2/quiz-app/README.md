# Quiz App

In a previous project you create the layout for a Quiz App with HTML and CSS. The focus of this
project is to add interactivity with JavaScript.

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
- If the user clicks on an answer button, we want the button to say **"hide answer"** when the
  answer is displayed and **"show answer"** when the answer is not displayed.

### 2. Form to add new cards

Users should be able to add new cards to your Quiz App. The first step is to add a page with a form.

![Quiz App form](./wireframes/quiz-app-form-page.png)

- Create a new HTML document called `form.html`
- Add the page to the navigation of your Quiz App
- Within `from.html` create a form with the following fields
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

### 4. Form field text counter

The form fields for question and answer should be limited to a text of 150 characters. While typing
users should be informed about the amount of characters left.

![Quiz App form with counter](./wireframes/quiz-app-form-page-with-counter.png)

- Add a `maxlength` attribute to the form fields
- Add a display below the form fields to show the amount of characters
- Use the `input` event to read the `length` of a field's content and calculate and display the
  result
- Think of ways to use the same logic for both form fields and to not repeat your code

You can have a look at
[this counter example](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/recap-project-2/character-count-example)
for inspiration.
