# React Component Testing: Scorekeeper

This Scorekeeper app offers opportunities for game freaks: keep track of your game stats and watch a history as well!

To give you a short overview:

On the home route `/`, you can create a new game with entering a name of the game and the names of the participating players.

After starting a game, you are redirected to `/game`, where you can increase, decrease or reset all scores. When you are finished, you can end the tracking of scores.

Every finished game is also visible in the `/history` overview.

## Task

### Discussion

Start the app an have a look at it in the browser: `npm run dev`

Discuss in the group:

- Which features should be tested?
- Which features should **not** be tested?

### Writing Component Tests

The app offers a test file for every component. Each of these files contain acceptance criteria defining what should be tested. The tests for the `HistoryEntry` component have already been implemented, but they fail. The implementation of the other tests is missing.

Your task is to run `npm run test`, write the test implementations and make the tests pass.

> 💡 Note that, at the beginning, all tests passes (except the two in `HistoryEntry`) because the testing blocks are empty. This will change while you are implementing the test.

#### HistoryEntry

Before writing your first component test, your task is to read and understand existing tests. Afterwards you should be able to fix the bug in the tested component.

Check the [`HistoryEntry.test.js`](components/HistoryEntry/HistoryEntry.test.js), it offers two test cases with their acceptance criteria:

- "renders name of game and 'show score' button only"
- "renders player names and scores after button click"

Run `npm run test`; you will notice that both tests fail. Read the error message carefully and fix the bug in [`HistoryEntry/index.js`](components/HistoryEntry/index.js) so that the test passes again. (The tests are correct, but there is something wrong with the component)

Congratulations, you have fixed your first bug according to a failing test! 🎉

#### Navigation

Now it's time to write the first test on your own!

Switch to [`Navigation.test.js`](components/Navigation/Navigation.test.js) and check whether the navigation is rendered.

- In the test file, `next/router` is already mocked, so you don't need to care about the routing.
- The exact acceptance criteria is also already defined inside of the test case. You just have to implement the test code inside the return statement of the `test()` function.
- An HTML `<a>` tag has the accessible role "link".

#### Input

You can now go a step further and not only check for a component being rendered, but also for its callback function being called.

Switch to [`Input.test.js`](components/Input/Input.test.js) and write the tests for all given acceptance criteria.

- To check for attributes like `placeholder` or `name`, you can use the matcher `toHaveAttribute(attributeName, value)`.
- The `Input` component receives an `onChange` callback; in order to test it, remember that you have to mock if first.
- You can check how often a function has been called with `toHaveBeenCalledTimes(numberOfExpectedCalls)`.

#### Player

The `Player` component offers even more complexity, so let's dive deeper into testing and enhance your skills even more!

Switch to [`Player.test.js`](components/Player/Player.test.js) and write the tests for all acceptance criteria.

- To find all buttons at once, there is `getAllByRole` which returns an array; you can then expect a specific `toHaveLength(expectedNumber)`.
- To check the callback functions of a component, remember to mock them first and then pass the mocked function to the rendered component.
- Your `user.click` does not call the mocked functions properly? Don't forget to use `await`.

#### GameForm

Your testing skills are awesome! Get ready for the final task: testing the form!

Switch to [`GameForm.test.js`](components/GameForm/GameForm.test.js) and write the tests for all acceptance criteria.

- In the test file, `next/router` is already mocked, so you don't need to care about the routing.
- To check for the accessible name of the `GameForm` component, note that the accessible role of the HTML `form` component is "form".
- To check the submitted form data, make sure to
  - mock the submit handle function first;
  - `await` all `userEvent`s
  - expect the mocked submit function `toHaveBeenCalledWith(submittedDataObject)`.
- To find the correct form of the submitted data you are expecting, you might have to check the call of `onCreateGame` in the [`GameForm.js`](components/GameForm/index.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

> 💡 Please note that Next.js support on CodeSandbox is not great.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
