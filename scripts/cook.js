import { execa } from "execa";
import fs from "fs-extra";
import { join } from "node:path";
import ora from "ora";

const TEMPLATES_DIR = "templates";

// get recipe to cook
const recipeName = process.argv[2];

if (!recipeName) {
  console.error("No recipe specified");
  process.exit(1);
}

if (!fs.existsSync(join("recipes", recipeName, "recipe.js"))) {
  console.error(`Recipe ${recipeName} does not exist`);
  process.exit(1);
}

// load recipe
const recipe = (await import(join("..", "recipes", recipeName, "recipe.js")))
  .default;

if (!recipe) {
  console.error(`Recipe ${recipeName} does not export a recipe`);
  process.exit(1);
}

const spinner = ora();
spinner.start(`Cooking ${recipe.name}…`);

try {
  // create exercise template for recipe
  await cookRecipe(recipe, spinner);
} catch (error) {
  spinner.fail(`Failed to cook ${recipeName}`);
  console.error(error);
} finally {
  // …
}

async function cookRecipe(recipe, spinner) {
  const recipeName = recipe.name;
  const cwd = join(".temp", recipeName);

  await fs.ensureDir(".temp");

  // delete temp folder if it exists
  if (fs.existsSync(cwd)) {
    await fs.rm(cwd, { recursive: true, force: true });
  }

  // create temp folders
  await fs.mkdir(cwd);

  // run recipe cmd
  if (recipe.cmd) {
    spinner.text = `Running ${recipe.cmd[0] + " " + recipe.cmd[1].join(" ")}…`;
    await execa(recipe.cmd[0], recipe.cmd[1], { cwd: cwd });
  }

  // post process
  if (recipe.beforeFiles) {
    spinner.text = `Post processing…`;
    await recipe.beforeFiles({ cwd: cwd, spinner });
  }
  // copy files
  spinner.text = `Copying files…`;
  await fs.copy(join("recipes", recipeName, "files"), cwd, {
    overwrite: true,
  });

  spinner.text = `Updating package.json…`;

  // set package.json fields
  const pkgJson =
    (await fs.readJSON(join(cwd, "package.json"), {
      throws: false,
    })) ?? {};
  pkgJson.name = `template-${recipeName}`;
  pkgJson.description = `${recipe.description}`;
  pkgJson.version = "0.0.0-unreleased";
  pkgJson.private = true;
  pkgJson.nf = { template: recipeName };
  await fs.writeJSON(join(cwd, "package.json"), pkgJson);

  spinner.text = `Formatting files…`;
  await execa("npx", ["prettier", "--write", "."], { cwd: cwd });

  spinner.text = `Cleaning up…`;
  await fs.rm(join(cwd, "package-lock.json"), { force: true });
  await fs.rm(join(cwd, "node_modules"), {
    force: true,
    recursive: true,
  });

  // move temp folders to templates folder
  spinner.text = `Moving files into template folder…`;
  if (fs.existsSync(join(TEMPLATES_DIR, recipeName))) {
    await fs.rm(join(TEMPLATES_DIR, recipeName), {
      recursive: true,
      force: true,
    });
  }
  await fs.move(cwd, join(TEMPLATES_DIR, recipeName));

  spinner.succeed(`Cooked ${recipe.name}`);
}
