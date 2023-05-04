# JS Conditions and Booleans: Statements

In this exercise you train to write if / else and ternary statements in various ways.

## Tasks

### Part 1: Login

- check if the received password matches our `SUPER_SECRET_PASSWORD`
- if the password is wrong, console.log "Access denied!"
- if the password matches, console.log "Welcome! You are logged in as Brunhilde1984."
- try our different values for `receivedPassword`

### Part 2: Even / Odd

- use an if/else statement to log 'even number' if the variable `number` is even, and 'odd number' otherwise
- use different values for `number` to check if all cases work.

### Part 3: Hotdogs

- for a given `numberOfHotdogs` a person buys, log the respective price that the person has to pay:
- for less than 5 hotdogs: 2 euro per hotdog
- for more than 5 but less than 100 hotdogs: 1.50 euro per hotdog
- for more than 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
- for more than 1 000 000 hotdogs: 0.10 euro per hotdog
- change the `numberOfHotdogs` to see if your code works properly

### Part 4: Daytime

- use a ternary operator to define the `statement` variable as follows:
- if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
- if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

### Part 5: Greetings

- use a ternary operator inside the round brackets to complete the `greeting` as follows.
- if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
- otherwise the string saved in `name` should be used instead, e.g.:
  ```js
  const name = "Archibald";
  // logs "Hello Archibald!"
  ```
- change the value of `name` to check if the ternary operator works properly.

## Notes

- You only have to touch the [`index.js`](./index.js) file.

## Development

### CodeSandbox

This project is JavaScript only so there is nothing to view in the "Browser" tab. Please select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run start` to run the main JavaScript file using `node`
- `npm run test` to run the tests
- `npm run lint` to run the linter

> 💡 Since this project is JavaScript only there is nothing to preview in the browser. Use `npm run test` to check your progress or `npm run start` to run the code.
