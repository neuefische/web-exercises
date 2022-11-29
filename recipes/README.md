# 🍝 Recipes

This directory contains recipes that can be used to create templates.

## Templates

Templates are used to create new **exercises, challenges, etc. directly in this repository** using the `npm run create` command.

They can also be used to create new **projects outside of this repository** using the `npx ghcd neuefische/web-exercises/tree/main/templates/<template> my-app -i` command.

> **Warning**  
> Never edit the files in the `templates` directory directly. Instead, edit the recipe in this folder and then [cook it using the `npm run cook <recipe>` command](#cooking-a-recipe).

## Why?

Basic templates only contain files. But we want to do more advanced things for Create React App and Next.js: Those templates are created using `create-react-app` and `create-next-app` and then we modify them to our needs by adding and modifiying files as well as running additional commands.

## How?

For each recipe, we have a `files` directory that contains the files that should be copied to the template.

There is a `exercise-overrides` directory that contains files that should be overriden by the `create` script, when the template is used to create a new exercise. This allows us to have a different `README.md` (and other files) for exercises.

Each recipe has a `recipe.js` file that exports a default object. This object contains the following properties:

- `name`: The name of the recipe. This is used to create the template directory. This should match the name of the recipe directory.
  - Example: `"cra"`
  - Type: `string`
- `description`: A short description of the recipe. This will be used for the `package.json` of the template.
  - Example: `"Create React App"`
  - Type: `string`
- `cmd`: An optional command that should be executed before the files are copied. This is useful if you want to generate files before the contents of the `files` directory are copied to the template. The command is executed directly inside the directory in which the template is created. Check out the [`cra` recipe](./cra/recipe.js) for an example.
  - Example: `['npx', ['create-react-app@latest', '.']]`
  - Type: `[string, string[]]`
- `beforeFiles`: An optional function that is executed before the files are copied and after the command has been run. This is useful if you want to modify things before the contents of the `files` directory are copied to the template. Check out the [`next` recipe](./next/recipe.js) for an example, where it is used to install styled components, jest and storybook, as well as to delete some unnecessary files.
  - Example: `async beforeFiles({ cwd, spinner }) { { /* ... */ }`
  - Type: `(options: { cwd: string, spinner: OraSpinner }) => Promise<void>`

## Cooking a recipe

To cook a recipe, run the following command:

```sh
npm run cook <recipe>
```

Cooking a recipe will create or overwrite a template in the `templates` directory. The template will have the same name as the recipe.

After cooking a recipe, make sure to commit all changes.

You'll want to run `npm run cook` after you've made changes to a recipe.

## Available recipes / templates

See the [main README](../README.md#templates) for a list of all available templates created from these recipes.
