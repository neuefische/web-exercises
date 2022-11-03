import fs from "fs-extra";
import inquirer from "inquirer";
import slugify from "slugify";
import branchName from "branch-name";
import { titleCase } from "title-case";
import { globby } from "globby";
import ora from "ora";
import { execa } from "execa";
import path from "node:path";

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
  if (fs.existsSync(".create-temp")) {
    fs.rmdirSync(".create-temp", { recursive: true, force: true });
  }

  const templates = (
    await globby("./templates/*", {
      onlyDirectories: true,
      expandDirectories: false,
    })
  )
    .map((template) => ({
      type: "dir",
      dir: template,
      name: template.replace("./templates/", ""),
      pkg: fs.readJsonSync(`${template}/package.json`, { throws: false }),
      get description() {
        return this.pkg?.description;
      },
    }))
    .concat({
      type: "cmd",
      name: "cra",
      cmd: ["npx", ["create-react-app@latest", "."]],
      description: "Create React App (via npx create-react-app)",
      sandboxConfig: { template: "create-react-app" },
      readme: `# TITLE

<!--

Describe the exercise in a few sentences. E.g.:

This challenge offers a simple form with three input fields. Let's make it interactive using React!

-->

## Task

<!--

Explaining the task in detail. E.g.:

Use an event handler to react to the form submission.

Log all form data (in object form) into the console in the submit event handler.

You can use the following hints as guideline:

- Hint 1
- Hint 2
- ...

Switch to the [\`src/App.js\`](./src/App.js) file and make something great happen!

-->

## Notes

- You only have to touch the [\`src/App.js\`](./src/App.js) file.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

### Local development

To run project commands locally, you need to install the dependencies using \`npm i\` first.

You can then use the following commands:

- \`npm run start\` to start the development server
- \`npm run build\` to create a production build
- \`npm run test\` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use \`npm run start\` to start the development server. You can then view the project in the browser at \`http://localhost:3000\`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
`,
    });

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
        name: template.description ?? template.name,
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

  const template = templates.find(
    (template) => template.name === input.template
  );

  const exerciseDir = `./sessions/${sessionSlug}/${exerciseSlug}`;
  const tempExerciseDir = `.create-temp/${sessionSlug}_${exerciseSlug}`;

  if (template.type === "dir") {
    try {
      // copy the sessions/_template dir to the exercise dir
      await fs.copy(template.dir, exerciseDir, {
        overwrite: false,
        errorOnExist: true,
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
    pkg.description = input.exerciseName;
    await fs.writeJson(`${exerciseDir}/package.json`, pkg, { spaces: 2 });

    // find all files in the exercise dir
    // replace all instances of "TITLE" with the exercise name

    const files = await globby(`${exerciseDir}/**/*`, {
      onlyFiles: true,
      expandDirectories: false,
    });

    await Promise.all(
      files.map(async (file) => {
        const contents = await fs.readFile(file, "utf8");
        const newContents = contents.replaceAll("TITLE", input.exerciseName);
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
  } else if (template.type === "cmd") {
    spinner.text = `Creating exercise via \`${
      template.cmd[0]
    } ${template.cmd[1].join(" ")}\`… (this may take a minute)`;

    try {
      if (fs.existsSync(exerciseDir)) {
        throw new Error("Exercise already exists");
      }
      await fs.mkdir(tempExerciseDir, { recursive: true });
    } catch (e) {
      spinner.fail("Exercise already exists");
      process.exit(1);
    }

    await execa(template.cmd[0], template.cmd[1], {
      cwd: tempExerciseDir,
      stdout: undefined,
    });

    await fs.move(path.resolve(tempExerciseDir), path.resolve(exerciseDir), {
      overwrite: true,
    });

    // update the package.json
    const pkg = await fs.readJson(`${exerciseDir}/package.json`);
    pkg.name = `${sessionSlug}_${exerciseSlug}`;
    pkg.description = input.exerciseName;
    pkg.version = "0.0.0-unreleased";
    pkg.nf = { template: template.name };
    await fs.writeJson(`${exerciseDir}/package.json`, pkg, { spaces: 2 });

    // update the README.md
    const newReadme = (template?.readme ?? "# TITLE\n").replaceAll(
      "TITLE",
      input.exerciseName
    );
    await fs.writeFile(`${exerciseDir}/README.md`, newReadme, "utf8");

    // create sandbox config
    if (template.sandboxConfig) {
      await fs.writeJson(
        `${exerciseDir}/sandbox.config.json`,
        template.sandboxConfig,
        { spaces: 2 }
      );
    }

    try {
      await execa("code", [path.resolve(exerciseDir, "README.md")]);
    } catch {
      // ignore
    }
  }

  spinner.succeed("Exercise created at " + exerciseDir);
} catch (error) {
  if (fs.existsSync(".create-temp")) {
    fs.rmdirSync(".create-temp", { recursive: true, force: true });
  }
  spinner.fail("Exercise creation failed");
  console.error(error);
  process.exit(1);
} finally {
  if (fs.existsSync(".create-temp")) {
    fs.rmdirSync(".create-temp", { recursive: true, force: true });
  }
}

process.exit(0);
