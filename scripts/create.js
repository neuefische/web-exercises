import fs from "fs-extra";
import inquirer from "inquirer";
import slugify from "slugify";
import branchName from "branch-name";
import { titleCase } from "title-case";
import { globby } from "globby";
import ora from "ora";
import { execa } from "execa";
import path, { join } from "node:path";

function titleCaseName(name) {
  return name === "main" || !name
    ? undefined
    : titleCase(name.replaceAll("-", " "))
        // fix some common terms
        .replace(/Js/g, "JS")
        .replace(/Css/g, "CSS")
        .replace(/Html/g, "HTML")
        .replace(/Dom/g, "DOM")
        .replace(/Mongodb/g, "MongoDB")
        .replace(/Nextjs/g, "Next.js")
        .replace(/Npm/g, "npm")
        .replace(/Github/g, "GitHub")
        .replace(/Cli/g, "CLI");
}

const spinner = ora("Creating exercise…");

try {
  const templates = (
    await globby("./templates/*", {
      onlyDirectories: true,
      expandDirectories: false,
    })
  ).map((template) => ({
    dir: template,
    name: template.replace("./templates/", ""),
    pkg: fs.readJsonSync(`${template}/package.json`, { throws: false }),
    get description() {
      return this.pkg?.description;
    },
  }));

  const currentBranch = await branchName.get();

  const [maybeSessionName, maybeExerciseName] = currentBranch.split("_");

  // ask user for session name
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "sessionName",
      message: "What is the name of the session?",
      default: titleCaseName(maybeSessionName),
      // make required
      validate: (input) => (!input ? "Please enter the session name" : true),
    },
    {
      type: "input",
      name: "exerciseName",
      message: "What is the name of the exercise?",
      default: titleCaseName(maybeExerciseName),
      // make required
      validate: (input) => (!input ? "Please enter the exercise name" : true),
    },
    {
      type: "list",
      name: "template",
      message: "Which template do you want to use?",
      choices: templates.map((template) => ({
        value: template.name,
        name: template.description
          ? `${template.description} (${template.name})`
          : template.name,
      })),
    },
  ]);

  spinner.start();

  // convert names to slug
  const sessionSlug = slugify(input.sessionName, {
    lower: true,
  }).replaceAll(".", "");

  const exerciseSlug = slugify(input.exerciseName, {
    lower: true,
  }).replaceAll(".", "");

  const title = `${input.sessionName}: ${input.exerciseName}`;

  const template = templates.find(
    (template) => template.name === input.template
  );

  const exerciseDir = `./sessions/${sessionSlug}/${exerciseSlug}`;

  try {
    // copy the sessions/_template dir to the exercise dir
    await fs.copy(template.dir, exerciseDir, {
      overwrite: false,
      filter: (src) => {
        // don't copy any node_modules
        return !src.includes("node_modules");
      },
    });
  } catch {
    spinner.fail("Exercise already exists");
    process.exit(1);
  }

  // update the package.json
  const pkg = await fs.readJson(`${exerciseDir}/package.json`);
  pkg.name = `${sessionSlug}_${exerciseSlug}`;
  pkg.description = title;
  await fs.writeJson(`${exerciseDir}/package.json`, pkg, { spaces: 2 });

  // try to copy exercise overrides from recipe for this template
  const recipeDir = join("recipes", template.name);
  const exerciseOverrides = join(recipeDir, "exercise-overrides");
  if (await fs.pathExists(exerciseOverrides)) {
    await fs.copy(exerciseOverrides, exerciseDir, {
      overwrite: true,
      filter: (src) => {
        // don't copy any node_modules
        return !src.includes("node_modules");
      },
    });
  }

  // find all files in the exercise dir
  const files = await globby(`${exerciseDir}/**/*`, {
    onlyFiles: true,
    expandDirectories: false,
  });

  // replace all instances of "TITLE" with the exercise name
  await Promise.all(
    files.map(async (file) => {
      const contents = await fs.readFile(file, "utf8");
      const newContents = contents.replaceAll("TITLE", title);
      await fs.writeFile(file, newContents, "utf8");
    })
  );

  // make sure dependencies are installed
  if (pkg.dependencies || pkg.devDependencies) {
    spinner.text = "Installing dependencies…";
    try {
      await execa("npm", ["i"], { stdout: undefined });
    } catch {
      // ignore
    }
  }

  try {
    await execa("code", [path.resolve(exerciseDir, "README.md")]);
  } catch {
    // ignore
  }

  spinner.succeed("Exercise created at " + exerciseDir);
} catch (error) {
  spinner.fail("Exercise creation failed");
  console.error(error);
  process.exit(1);
}

process.exit(0);
