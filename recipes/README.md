# 🍝 Recipes

This directory contains recipes that can be used to create templates and starters.

## Templates vs. Starters

- **Templates** are used to create **new exercises, challenges, etc. directly in this repository** using the `npm run create` command.
- **Starters** are used to create **new projects outside of this repository** using the `npx ghcd neuefische/web-exercises/starters/<starter> my-app -i` command.

The main difference content-wise is in regards to the `README.md` file: in templates, it contains an instructions template for the exercise, while in starters, it is very bare-bones. See [How?](#how) for more details.

> **Warning**  
> Never edit the files in the `starters` and `templates` directories directly. Instead, edit the recipe in this folder and then [cook it using the `npm run cook <recipe>` command](#cooking-a-recipe).

## Why?

Basic templates and starters only contain files. But we want some more advanced variants for Create React App and Next.js that are created via automation. The `cook` script automates the creation of all templates and starters from recipes.

## How?

For each recipe, we have a `files` directory that contains the files that should be copied to the template and starter. There is a `template-overrides` directory that contains files that should be copied to the template but not to the starter. This allows us to have a template that has a different `README.md` (and other files) than the starter.

Each recipe has a `recipe.js` file that exports a default object. This object contains the following properties:

- `name`: The name of the recipe. This is used to create the template and starter directories. This should match the name of the recipe directory.
  - Example: `"cra"`
  - Type: `string`
- `description`: A short description of the recipe. This will be used for the `package.json` of the template and starter.
  - Example: `"Create React App"`
  - Type: `string`
- `cmd`: An optional command that should be executed before the files are copied. This is useful if you want to generate files before they are copied to the template and starter. The command is executed directly inside the directory in which the template/starter is created. Check out the [`cra` recipe](./cra/recipe.js) for an example.
  - Example: `['npx', ['create-react-app@latest', '.']]`
  - Type: `[string, string[]]`
- `beforeFiles`: An optional function that is executed before the files are copied and after the command has been run. This is useful if you want to modify the files before they are copied to the template and starter. Check out the [`next` recipe](./next/recipe.js) for an example, where it is used to install styled components, jest and storybook, as well as to delete some unnecessary files.
  - Example: `async beforeFiles({ cwd, spinner }) { { /* ... */ }`
  - Type: `(options: { cwd: string, spinner: OraSpinner }) => Promise<void>`

## Cooking a recipe

To cook a recipe, run the following command:

```sh
npm run cook <recipe>
```

Cooking a recipe will create a template and starter in the `templates` and `starters` directories. The template and starter will have the same name as the recipe and will overwrite existing templates and starters with the same name.

After cooking a recipe, make sure to commit all changes.

You'll want to run `npm run cook` after you've made changes to a recipe.

## Available recipes

See the [main README](../README.md#templates--starters--recipes) for a list of available recipes.
