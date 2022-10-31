# web exercises

A monorepo containing exercises, challenges, demos and starters for the neue fische web bootcamps.
All of the exercises are designed to work locally as well as on CodeSandbox.

<!-- toc -->

- [Structure of this Repository](#structure-of-this-repository)
- [Branch Naming Convention](#branch-naming-convention)
- [Create a new exercise](#create-a-new-exercise)
- [Templates](#templates)
  - [Empty](#empty)
  - [HTML, CSS and JS with jest support](#html-css-and-js-with-jest-support)
  - [HTML, CSS and JS static](#html-css-and-js-static)
  - [HTML and CSS static](#html-and-css-static)
  - [JS with jest support](#js-with-jest-support)
  - [React minimal](#react-minimal)
  - [Create React App](#create-react-app)
- [Challenge requirements](#challenge-requirements)
- [Review new or changed exercises](#review-new-or-changed-exercises)
- [Accessing the exercises](#accessing-the-exercises)
  - [CodeSandbox](#codesandbox)
  - [Locally](#locally)
- [Local development](#local-development)

<!-- tocstop -->

## Structure of this Repository

A _exercise_ is any form of exercise, challenge, demo or starter that is used in the web bootcamps.

A _session_ is a collection of exercises that are used in a specific bootcamp session.

The folder structure of this repository is as follows:

```
sessions/<session-name>/<exercise-name>
```

> ❗️ Avoid nesting exercises in folders below this level. It makes it harder to discover exercises and to update them using tooling.

## Branch Naming Convention

The branches in this repository follow the following naming convention:

```
<session-name>_<exercise-name>
```

> 💡 You can do multiple exercises in one branch (e.g. `demo-start` and `demo-end`) if it makes sense. Just pick a unique branch like `<session-name>_demo`. Note that the `create` script will not be able to automatically detect the correct exercise name in that case.

## Create a new exercise

To create a new exercise run the following command:

```
npm run create
```

> 💡 Make sure to run this command from the root of the repository and to run `npm i` before.

This will ask you for the session name, exercise name and exercise type.

> 💡 If you follow the branch naming convention (`session-name_exercise-name`), the create script will automatically detect the session and exercise name from the branch name.

This repository contains templates for most types of exercises.

## Templates

The following exercise types are available.

### Empty

`templates/empty`

An exercise that does not contain any code.

### HTML, CSS and JS with jest support

`templates/html-css-js`

An exercise that contains HTML, CSS and JavaScript files with jest support. CodeSandbox bundles the code and runs the tests automatically. Locally you can run the tests with `npm test`.

### HTML, CSS and JS static

`templates/html-css-js-static`

An exercise that contains HTML, CSS and JavaScript files but has no bundler and therefore does not support tests.

### HTML and CSS static

`templates/html-css-static`

An exercise that contains HTML and CSS files.

### JS with jest support

`templates/js`

An exercise that contains only JavaScript files with jest support. CodeSandbox bundles the code and runs the tests automatically. Locally you can run the tests with `npm test`.

### React minimal

`templates/react-minimal`

An exercise that contains a minimal React app. It uses `react-scripts` but only contains the bare minimum files from Create React App.

### Create React App

`npx create-react-app`

An exercises from executing `create-react-app` to create a new React app.

> 💡 This is different from running `create-react-app` directly. It will update the `README.md` and `package.json` to match our conventions.

## Challenge requirements

All exercises must at least contain:

- A `README.md` file with title and a description how to solve the exercise
- A `package.json` file with s `name` field that follows the naming convention (`session-name_exercise-name`)

## Review new or changed exercises

All exercises must be reviewed before they are merged into the `main` branch. Create a pull request on GitHub and add the `needs review` label.

Challenges must be reviewed by at least one neue fische web coach.

> 💡 Challenges deliberately do not have to have passing tests to be merged. It is also fine to merge exercises with linting errors. Failing tests and linting errors can be part of the exercise itself.

## Accessing the exercises

There a two ways to access the exercises:

### CodeSandbox

Open the the folder of the exercise on GitHub. Change the URL from `github.com` to `githubbox.com`. This will open the exercise in CodeSandbox. Copy the URL you are redirected to and share it. You can also select a spefic file and share the URL to that file. We recommend sharing the URL to the `README.md` file.

```diff
- https://github.com/neuefische/web-exercises/tree/main/sessions/js-array-methods/map
+ https://githubbox.com/neuefische/web-exercises/tree/main/sessions/js-array-methods/map
```

> 💡 While reviewing an exercise, you can share the link pointing to the respective branch. This way exercises can be reviewed on CodeSandbox before they are merged into the main branch.

### Locally

We are using [`ghcd`](https://github.com/djfarly/ghcd#readme) (GitHub Clone Directory) which is a tool that "clones" (or rather downloads) a subdirectory of a GitHub repository. You can share the command containing the URL to the exercise folder on GitHub.

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods/map -i
```

> 💡 While reviewing an exercise, you can share the command pointing to the respective branch. This way exercises can be reviewed locally before they are merged into the main branch.

> ❗️ `ghcd` does not support branch names containing slashes.

You can append the `-i` flag to the command to let `ghcd` initialize a new git repository in the "cloned" folder. This is recommended for all exercises in from the curriculum after git has been introduced.

## Local development

To run commands in a workspace of the monorepo (an exercise folder) on your local machine:

1. make sure you have run `npm i` in the root of this repository
2. `cd` into the folder (`cd sessions/session-name/exercise-name`)
3. run the script of you choice (`npm run test`)
