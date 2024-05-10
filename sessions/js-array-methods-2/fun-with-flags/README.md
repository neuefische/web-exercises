# Fun with Flags

In this challenge you will learn how to use the array method find and how it differs from filter.

## Tasks

### 1. Find One Matching Country

Inside the event listener, use the `find` method to find the country in the countries array which name starts with the search string.

> 💡 Strings have a method `startsWith(string)`, which might be helpful.

> 💡 Each country in the array has a name attribute.

> 💡 Can you make the search 'case-insensitive'?

### 2. Find All Matching Countries

Change the method from `find` to `filter`, to filter the countries to those which name starts with the search string. Remember to change the variable name from `foundCountry` to `foundCountries` to reflect that it now is an array.

Adapt the rendering of the found countries. You'll need to loop over the array of `foundCountries`. Which array method can you use for that?

---

Go to `./index.js` and start coding!

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run lint` to run the linter
