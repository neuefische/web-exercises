# React Component Testing: Scorekeeper

This Scorekeeper app offers opportunities for game freaks: keep track of your game stats and watch a history as well!

To give you a short overview:

On the home page `localhost:3000/`, you can create a new game with entering a name of the game and the names of the participating players.

After starting a game, you are redirected to `/game`, where you can increase, decrease or reset all scores. When you are finished, you can end the tracking of scores.

Every finished game is also visible in the `/history` overview.

## Task

### HistoryEntry

- TDD: provide tests for `HistoryEntry` component
- add bug to [`HistoryEntry/index.js`](components/HistoryEntry/index.js): button "get more" or similar, but tests expects "show score"
- students have to fix the component to make the test pass

### GameForm

- 4 AC (renders, renders a11y name, submits successfully, does not submit without input)
- provide mock for `router.push`

## Notes

- You only have to touch the [`pages/index.js`](./pages/index.js) file.

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
- `npm run storybook` to start the storybook development server

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
