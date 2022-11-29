# web exercises

A monorepo containing exercises, challenges, demos and starters for the neue fische web bootcamps.
All of the exercises are designed to work locally as well as on CodeSandbox.

<!-- toc -->

- [web exercises](#web-exercises)
  - [Structure of this Repository](#structure-of-this-repository)
    - [Sessions and Exercises](#sessions-and-exercises)
    - [Templates](#templates)
    - [Recipes](#recipes)
  - [Branch Naming Convention](#branch-naming-convention)
  - [Create a new exercise](#create-a-new-exercise)
    - [Creating a PR](#creating-a-pr)
    - [Getting Markdown for Curriculum](#getting-markdown-for-curriculum)
  - [Templates](#templates-1)
    - [Empty](#empty)
    - [HTML, CSS and JavaScript (with Jest support)](#html-css-and-javascript-with-jest-support)
    - [Static HTML, CSS and JavaScript](#static-html-css-and-javascript)
    - [Static HTML and CSS](#static-html-and-css)
    - [JavaScript (with Jest support)](#javascript-with-jest-support)
    - [Minimal React](#minimal-react)
    - [Create React App](#create-react-app)
    - [Next.js (incl. Styled Components, Jest, Storybook)](#nextjs-incl-styled-components-jest-storybook)
  - [Exercise requirements](#exercise-requirements)
  - [Review new or changed exercises](#review-new-or-changed-exercises)
  - [Access exercises or templates](#access-exercises-or-templates)
    - [CodeSandbox](#codesandbox)
    - [Locally](#locally)
  - [Local development](#local-development)

<!-- tocstop -->

## Structure of this Repository

### Sessions and Exercises

A _session_ is a collection of exercises that are used in a specific bootcamp session.

An _exercise_ is any form of exercise, challenge, demo or starter that is used in the web bootcamps.

The folder structure is as follows:

```
sessions/<session-name>/<exercise-name>
```

> **Warning**  
> Avoid nesting exercises in folders below this level. It makes it harder to discover exercises and to update them using tooling.

### Templates

A _template_ is a folder from which [a new exercise can be created](#create-a-new-exercise) but than can also be used as a starter for a new project outside of this repository.

The folder structure is as follows:

```
templates/<template-name>
```

> **Warning**  
> Never edit templates directly. They are created from [recipes](#recipes).

### Recipes

A _recipe_ is used to create (cook) templates. It contains instructions and files that are used by the `cook` script. If you want to change a template, you have to change its recipe instead.

The folder structure is as follows:

```
recipes/<recipe-name>
```

Read more about [recipes](./recipes/README.md) to learn how to create and edit them.

## Branch Naming Convention

The branches in this repository follow the following naming convention:

```
<session-name>_<exercise-name>
```

> **Info**  
> You can do multiple exercises in one branch (e.g. `demo-start` and `demo-end`) if it makes sense. Just pick a unique branch like `<session-name>_demo`. Note that the `create` script will not be able to automatically detect the correct exercise name in that case.

## Create a new exercise

To create a new exercise run the following command:

```
npm run create
```

> **Info**  
> Make sure to run this command from the root of the repository and to run `npm i` before.

This will ask you for the session name, exercise name and exercise type.

> **Info**  
> If you follow the branch naming convention (`session-name_exercise-name`), the create script will automatically detect the session and exercise name from the branch name.

This repository contains [templates for most types of exercises](#templates--starters--recipes).

### Creating a PR

To make it less cumbersome to create a PR for a new exercise once you're done, you can use the following command that copies all the necessary information to your clipboard. (You just have to select the session and exercise folder.)

```
npm run get-pr
```

### Getting Markdown for Curriculum

You can obtain a copyable markdown snippet for an exercise by running the following command:

```
npm run get
```

> **Info**  
> You usally don't need this command as the markdown for the curriculum is already included in the PR markdown.

## Templates

The following types of templates and starters are available.

### Empty

created via [`recipes/empty`](./recipes/empty)

A template that does not contain any code.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `Empty`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/empty my-app -i
> ```

### HTML, CSS and JavaScript (with Jest support)

created via [`recipes/html-css-js`](./recipes/html-css-js)

A template that contains HTML, CSS and JavaScript files with jest support. CodeSandbox bundles the code and runs the tests automatically. Locally you can run the tests with `npm test`.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `HTML, CSS and JavaScript (with Jest support)`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/html-css-js my-app -i
> ```

### Static HTML, CSS and JavaScript

created via [`recipes/html-css-js-static`](./recipes/html-css-js-static)

A template that contains HTML, CSS and JavaScript files but has no bundler and therefore does not support tests.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `Static HTML, CSS and JavaScript`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/html-css-js-static my-app -i
> ```

### Static HTML and CSS

created via [`recipes/html-css-static`](./recipes/html-css-static)

A template that contains HTML and CSS files.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `Static HTML and CSS`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/html-css-static my-app -i
> ```

### JavaScript (with Jest support)

created via [`recipes/js`](./recipes/js)

A template that contains only JavaScript files with jest support. CodeSandbox bundles the code and runs the tests automatically. Locally you can run the tests with `npm test`.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `JavaScript (with Jest support)`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/js my-app -i
> ```

### Minimal React

created via [`recipes/react-minimal`](./recipes/react-minimal)

A template that contains a minimal React app. It uses `react-scripts` but only contains the bare minimum files from Create React App.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `Minimal React`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/react-minimal my-app -i
> ```

### Create React App

created via [`recipes/cra`](./recipes/cra)

A template from executing `create-react-app` to create a new React app.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `Create React App`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/cra my-app -i
> ```

> **Warning**  
> An exercise based on `create-react-app` might not be able to build in CodeSandbox. The `create-react-app` setup includes the package `web-vitals`. The adblocker browser extension [uBlock Origin might block](https://github.com/codesandbox/codesandbox-client/issues/6035) requests to load this package. Please make sure to add the domain `codesandbox.io` and the pattern `/.*csb.app.*/` to the trusted sites ("Ausnahmeregeln") in the uBlock Origin settings.

### Next.js (incl. Styled Components, Jest, Storybook)

created via [`recipes/next`](./recipes/next)

A template from executing `npx create-next-app` to create a new Next.js app. Our variant also includes Styled Components, Jest and Storybook.

> 📝 Create a new exercise inside this repository:
>
> `npm run create` → Select type `Next.js (incl. Styled Components, Jest, Storybook)`

> ✨ Use template as a starter:
>
> ```
> npx ghcd@latest neuefische/web-exercises/tree/main/templates/next my-app -i
> ```

> **Warning**  
> Next.js only works "moderately" well on CodeSandbox. We recommend using it locally.

## Exercise requirements

All exercises must at least contain:

- A `README.md` file with title and a description how to solve the exercise
- A `package.json` file with the `name` field that follows the naming convention (`session-name_exercise-name`)

## Review new or changed exercises

All exercises must be reviewed before they are merged into the `main` branch. Create a pull request on GitHub and add the `needs review` label.

Exercises must be reviewed by at least one neue fische web coach.

> **Info**  
> Exercises deliberately do not have to have passing tests to be merged. It is also fine to merge exercises with linting errors. Failing tests and linting errors can be part of the exercise itself.

## Access exercises or templates

There a two ways to access the exercises or templates:

### CodeSandbox

Open the the folder of the exercise on GitHub. Change the URL from `github.com` to `githubbox.com`. This will open the exercise in CodeSandbox. Select the README.md file and copy the URL directly to this file.

```diff
- https://github.com/neuefische/web-exercises/tree/main/sessions/js-array-methods/map
+ https://githubbox.com/neuefische/web-exercises/tree/main/sessions/js-array-methods/map
```

The shareable link you need to copy looks like this:

```
https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods/map?file=/README.md
```

> **Info**  
> While reviewing an exercise, you can share the link pointing to the respective branch. This way exercises can be reviewed on CodeSandbox before they are merged into the main branch.

### Locally

We are using [`ghcd`](https://github.com/djfarly/ghcd#readme) (GitHub Clone Directory) which is a tool that "clones" (or rather downloads) a subdirectory of a GitHub repository. You can share the command containing the URL to the exercise folder on GitHub.

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods/map -i
```

> **Info**  
> While reviewing an exercise, you can share the command pointing to the respective branch. This way exercises can be reviewed locally before they are merged into the main branch.

> **Warning**  
> `ghcd` does not support branch names containing slashes.

You can append the `-i` flag to the command to let `ghcd` initialize a new git repository in the "cloned" folder. This is recommended for all exercises in from the curriculum after git has been introduced.

## Local development

To run commands in a workspace of the monorepo (an exercise folder) on your local machine:

1. make sure you have run `npm i` in the root of this repository
2. `cd` into the folder (`cd sessions/session-name/exercise-name`)
3. run the script of you choice (`npm run test`)
