# Recap Project 3: Rick and Morty App

In this recap project, you are going to create a single page app for browsing all the characters of the famous tv show "Rick and Morty".

You are going to work in a group. Create **only one project per group** using the [guide in the template section](./README.md#template) below!

---

## API

We are going to fetch all necessary information about the characters from a REST API specifically
designed for Rick and Morty. Check out the [API](https://rickandmortyapi.com/). You find all the
information you need in the docs.

> ❗️ This API has pagination, that means that you can fetch only 20 characters at a time.

---

## Template

- Open your terminal and navigate to the folder where all your projects are located.
- Execute the following command to create a new project based on a template:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/recap-project-3/rick-and-morty-app -i
```

- Create a new empty repository on GitHub, link it to the created repository on your computer and push the code.
- Each member of the group clones the repository to their local machine.
- Follow the instructions given in the `README.md` file.

> 💡 Don't forget to work on feature branches, otherwise you might run into merge conflicts!

---

## Tasks

### Character Card Component

For now you have only one hard coded character card for Rick Sanchez in your HTML. We want to create
them dynamically in our JavaScript.

- Write a function `CharacterCard` inside the `CharacterCard.js` file and export it.
- You can use `innerHTML` to generate the HTML of the card. Cut and paste the relevant HTML code of the card from the `index.html` and use it in your function.
- The following elements of the card need to be dynamic and change for each character:
  - the `src` of the image
  - the name of the character
  - the status, type and occurrences values
- HINT: go to the docs and look where you can find all the information in the character objects you
  will receive from the API.
- Think about which input parameter(s) this function will need.
- The function finally returns the created `li` HTML element.

### Fetch the Data

Now we can fetch the character data from the API and generate our cards with it.

- Inside of the `index.js` create a function called `fetchCharacters`.
- Use your knowledge about fetching to get the first 20 characters from the API. You can find the
  correct API endpoint in the docs.
- Import the `CharacterCard` function.
- After successfully fetching the character data, use array methods to create an HTML card for each
  character and append it to the `cardContainer`.
- Make sure that the `cardContainer` is emptied every time new characters are fetched (HINT: you can
  use `innerHTML = ''` for that).
- Call the function inside the `index.js`. Now you should see 20 cards in your app.

### Pagination

Great Job! But we want to see not only 20 characters, we want all of them! So lets implement the
pagination.

- By adding the string `?page=<pageIndex>` to the end of the fetch URL, you can receive the
  respective page of characters.
- Use here the state variable `page` to keep track of the current page index.
- Inside of the `info` part of the received data you can find the max page count.
- Add an event listener on each of the next and prev buttons which do the following
  - it is prevented that the page index could go higher than the max page index or below 1
  - the page index is increased / decreased
  - the `fetchCharacters` function is called
- Update the pagination display each time characters are fetched to show the current page index and
  the current max page index.

### The Search Bar

Now we want even more functionality in our app. We want to find individual characters by typing
their name into the search bar.

- Create a 'submit' event listener on the search bar.
- Update the state variable `searchQuery` with the current text inside the search bar every time
  this event is triggered.
- Modify the fetch URL again by adding another url encoded attribute `name`: append
  `&name=<searchQuery>` to the url. If the search query is an empty string, it will be ignored by
  the API, so don't worry about that.
- Now trigger the function `fetchCharacters` whenever a submit event happens.

> 💡 You might run into some bugs at this point. Think about how the page and max page index might
> have to change when you start searching for only subsets of all characters.

### Extra: Refactoring your Code

You've done it: your app is working as expected. 🚀✨

However, we want to tidy up our code so that not everything is written in a single javascript file.

- The next and prev button as well as the pagination and the search bar are currently hard coded in
  the `index.html`. Remove the HTML code and generate them via JavaScript. Use the respective
  JavaScript component files for that.
- The component functions should be called `NavButton`, `NavPagination`, and `SearchBar`
  and should return the created elements.
- HINT: It is challenging to get the event listener functions right for these components. Use an
  extra input parameter `onClick` or `onSubmit` in your components.
- Use the create functions inside your `index.js` to generate the UI components. You'll need to
  specify the event listener callback functions here either as anonymous arrow functions or as named
  functions. Use them as the argument for `onClick` or `onSubmit`, respectively.
- Append the created components at the right places in your HTML. All container elements are already
  available in the `index.js`.

---

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run start` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run test` to run the tests
- `npm run lint` to run the linter
