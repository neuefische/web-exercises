# web exercises

A monorepo containing challenges, demos and starters for the neue fische web bootcamps.
All of the challenges are designed to work locally as well as on CodeSandbox.

<!-- toc -->

- [Structure of this Repository](#structure-of-this-repository)
- [Create a new challenge](#create-a-new-challenge)
  - [Empty](#empty)
  - [HTML, CSS and JS with jest support](#html-css-and-js-with-jest-support)
  - [HTML, CSS and JS static](#html-css-and-js-static)
  - [HTML and CSS static](#html-and-css-static)
  - [JS with jest support](#js-with-jest-support)
  - [React minimal](#react-minimal)
  - [Create React App](#create-react-app)
- [Challenge requirements](#challenge-requirements)
- [Review new or changed challenges](#review-new-or-changed-challenges)
- [Accessing the challenges](#accessing-the-challenges)
  - [CodeSandbox](#codesandbox)
  - [Locally](#locally)
- [Local development](#local-development)

<!-- tocstop -->

## Structure of this Repository

A _challenge_ is any form of challenge, exercise, demo or starter that is used in the web bootcamps.

A _session_ is a collection of challenges that are used in a specific bootcamp session.

The folder structure of this repository is as follows:

```
sessions/<session-name>/<challenge-name>/
```

## Create a new challenge

To create a new challenge run the following command:

```
npm run create
```

> 💡 Make sure to run this command from the root of the repository and to run `npm i` before.

This will ask you for the session name, challenge name and challenge type.

> 💡 If you follow the branch naming convention (`session-name_challenge-name`), the create script will automatically detect the session and challenge name from the branch name.

This repository contains templates for most types of challenges. The following challenge types are available:

### Empty

This is a template for a challenge that does not contain any code.

### HTML, CSS and JS with jest support

This is a template for a challenge that contains HTML, CSS and JavaScript files with jest support. CodeSandbox bundles the code and runs the tests automatically. Locally you can run the tests with `npm test`.

### HTML, CSS and JS static

This is a template for a challenge that contains HTML, CSS and JavaScript files but has no bundler and therefore does not support tests.

### HTML and CSS static

This is a template for a challenge that contains HTML and CSS files.

### JS with jest support

This is a template for a challenge that contains only JavaScript files with jest support. CodeSandbox bundles the code and runs the tests automatically. Locally you can run the tests with `npm test`.

### React minimal

This is a template for a challenge that contains a minimal React app. It uses `react-scripts` but only contains the bare minimum files from Create React App.

### Create React App

This is not a template but instead executes `npx create-react-app` to create a new React app.

## Challenge requirements

All challenges must at least contain a `README.md` and a `package.json` file.

The `README.md` file must contain the following information:

- A title
- A description of how to solve the challenge

The `package.json` file must at least contain the following information:

- A `name` field that follows the naming convention (`session-name_challenge-name`)

## Review new or changed challenges

All challenges must be reviewed before they are merged into the `main` branch. Create a pull request on GitHub and add the `needs review` label.

Challenges can be reviewed by any neue fische web coach.

## Accessing the challenges

There a two ways to access the challenges:

### CodeSandbox

Open the the folder of the challenge on GitHub. Change the URL from `github.com` to `githubbox.com`. This will open the challenge in CodeSandbox. Copy the URL you are redirected to and share it. You can also select a spefic file and share the URL to that file. We recommend sharing the URL to the `README.md` file.

```diff
- https://github.com/neuefische/web-exercises/tree/main/sessions/js-array-methods/map
+ https://githubbox.com/neuefische/web-exercises/tree/main/js-array-methods/map
```

> 💡 While reviewing a challenge, you can share the link pointing to the respective branch. This way challenges can be reviewed on CodeSandbox before they are merged into the main branch.

### Locally

We are using [`ghcd`](https://github.com/djfarly/ghcd#readme) (GitHub Clone Directory) which is a tool that "clones" (or rather downloads) a subdirectory of a GitHub repository. You can share the command containing the URL to the challenge folder on GitHub.

```
npx ghcd@latest neuefische/web-exercises/tree/main/js-array-methods/map -i
```

> 💡 While reviewing a challenge, you can share the command pointing to the respective branch. This way challenges can be reviewed locally before they are merged into the main branch.

> ❗️ `ghcd` does not support branches containing slashes.

You can append the `-i` flag to the command to let `ghcd` initialize a new git repository in the "cloned" folder. This is recommended for all challenges in from the curriculum after git has been introduced.

## Local development

To run commands in a workspace of the monorepo (a challenge folder) on your local machine:

1. make sure you have run `npm i` in the root of this repository
2. `cd` into the folder (`cd sessions/session-name/challenge-name`)
3. run the script of you choice (`npm run test`)
