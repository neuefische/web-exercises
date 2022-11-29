import { execa } from "execa";
import fs from "fs-extra";
import { join } from "node:path";
import ora from "ora";

const TEMPLATES_DIR = "templates";
const STARTERS_DIR = "starters";

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
  const tempDirStarter = join(".temp", recipeName);
  const tempDirTemplate = tempDirStarter + "-template";

  await fs.ensureDir(".temp");

  // delete temp folder if it exists
  if (fs.existsSync(tempDirStarter)) {
    await fs.rm(tempDirStarter, { recursive: true, force: true });
  }
  if (fs.existsSync(tempDirTemplate)) {
    await fs.rm(tempDirTemplate, { recursive: true, force: true });
  }

  // create temp folders
  await fs.mkdir(tempDirStarter);
  await fs.mkdir(tempDirTemplate);

  // run recipe cmd
  if (recipe.cmd) {
    await execa(recipe.cmd[0], recipe.cmd[1], { cwd: tempDirStarter });
  }

  // post process
  if (recipe.beforeFiles) {
    spinner.text = `Post processing…`;
    await recipe.beforeFiles({ cwd: tempDirStarter, spinner });
  }
  // copy files
  spinner.text = `Copying files…`;
  await fs.copy(join("recipes", recipeName, "files"), tempDirStarter, {
    overwrite: true,
  });

  spinner.text = `Split template and starter…`;

  // create copy of temp folder for template
  await fs.copy(tempDirStarter, tempDirTemplate);

  // copy template template files
  spinner.text = `Copying template files…`;
  await fs.copy(
    join("recipes", recipeName, "template-overrides"),
    tempDirTemplate,
    {
      overwrite: true,
    }
  );

  spinner.text = `Updating package.json…`;

  // set package.json fields
  const pkgStarter =
    (await fs.readJSON(join(tempDirStarter, "package.json"), {
      throws: false,
    })) ?? {};
  pkgStarter.name = `starter-${recipeName}`;
  pkgStarter.description = `Starter for ${recipe.description}`;
  pkgStarter.version = "0.0.0-unreleased";
  pkgStarter.private = true;
  pkgStarter.nf = { starter: recipeName };
  await fs.writeJSON(join(tempDirStarter, "package.json"), pkgStarter);

  const pkgTemplate =
    (await fs.readJSON(join(tempDirTemplate, "package.json"), {
      throws: false,
    })) ?? {};
  pkgTemplate.name = `template-${recipeName}`;
  pkgTemplate.description = `${recipe.description}`;
  pkgTemplate.version = "0.0.0-unreleased";
  pkgTemplate.private = true;
  pkgTemplate.nf = { template: recipeName };
  await fs.writeJSON(join(tempDirTemplate, "package.json"), pkgTemplate);

  spinner.text = `Formatting files…`;
  await execa("npx", ["prettier", "--write", "."], { cwd: tempDirStarter });
  await execa("npx", ["prettier", "--write", "."], { cwd: tempDirTemplate });

  spinner.text = `Cleaning up…`;
  await fs.rm(join(tempDirStarter, "package-lock.json"), { force: true });
  await fs.rm(join(tempDirStarter, "node_modules"), {
    force: true,
    recursive: true,
  });
  await fs.rm(join(tempDirTemplate, "package-lock.json"), { force: true });
  await fs.rm(join(tempDirTemplate, "node_modules"), {
    force: true,
    recursive: true,
  });

  // move temp folders to templates and starters folder
  spinner.text = `Move template and starter into position…`;

  if (fs.existsSync(join(STARTERS_DIR, recipeName))) {
    await fs.rm(join(STARTERS_DIR, recipeName), {
      recursive: true,
      force: true,
    });
  }
  await fs.move(tempDirStarter, join(STARTERS_DIR, recipeName));

  if (fs.existsSync(join(TEMPLATES_DIR, recipeName))) {
    await fs.rm(join(TEMPLATES_DIR, recipeName), {
      recursive: true,
      force: true,
    });
  }
  await fs.move(tempDirTemplate, join(TEMPLATES_DIR, recipeName));

  spinner.succeed(`Cooked ${recipe.name}`);
}
