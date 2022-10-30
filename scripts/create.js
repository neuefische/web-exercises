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

const spinner = ora("Creating challenge…");

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
      cmd: ["npx", ["create-react-app", "."]],
      description: "Create React App (via npx create-react-app)",
      sandboxConfig: { template: "create-react-app" },
    });

  const currentBranch = await branchName.get();

  const [maybeSessionName, maybeChallengeName] = currentBranch.split("_");

  // ask user for session name
  const input = await inquirer.prompt([
    {
      type: "input",
      name: "sessionName",
      message: "What is the name of the session?",
      default: titleCaseName(maybeSessionName),
    },
    {
      type: "input",
      name: "challengeName",
      message: "What is the name of the challenge/demo/starter/etc.?",
      default: titleCaseName(maybeChallengeName),
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

  const challengeSlug = slugify(input.challengeName, {
    lower: true,
  }).replaceAll(".", "");

  const template = templates.find(
    (template) => template.name === input.template
  );

  const challengeDir = `./sessions/${sessionSlug}/${challengeSlug}`;
  const tempChallengeDir = `.create-temp/${sessionSlug}_${challengeSlug}`;

  if (template.type === "dir") {
    try {
      // copy the sessions/_template dir to the challenge dir
      await fs.copy(template.dir, challengeDir, {
        overwrite: false,
        errorOnExist: true,
        filter: (src) => {
          // don't copy any node_modules
          return !src.includes("node_modules");
        },
      });
    } catch {
      spinner.fail("Challenge already exists");
      process.exit(1);
    }

    // update the package.json
    const pkg = await fs.readJson(`${challengeDir}/package.json`);
    pkg.name = `${sessionSlug}_${challengeSlug}`;
    pkg.description = input.challengeName;
    await fs.writeJson(`${challengeDir}/package.json`, pkg, { spaces: 2 });

    // find all files in the challenge dir
    // replace all instances of "TITLE" with the challenge name

    const files = await globby(`${challengeDir}/**/*`, {
      onlyFiles: true,
      expandDirectories: false,
    });

    await Promise.all(
      files.map(async (file) => {
        const contents = await fs.readFile(file, "utf8");
        const newContents = contents.replaceAll("TITLE", input.challengeName);
        await fs.writeFile(file, newContents, "utf8");
      })
    );

    try {
      await execa("npm", ["i"], { stdout: undefined });
    } catch {
      // ignore
    }

    try {
      await execa("code", [path.resolve(challengeDir, "README.md")]);
    } catch {
      // ignore
    }
  } else if (template.type === "cmd") {
    try {
      if (fs.existsSync(challengeDir)) {
        throw new Error("Challenge already exists");
      }
      await fs.mkdir(tempChallengeDir, { recursive: true });
    } catch (e) {
      spinner.fail("Challenge already exists");
      process.exit(1);
    }

    await execa(template.cmd[0], template.cmd[1], {
      cwd: tempChallengeDir,
      stdout: undefined,
    });

    await fs.move(path.resolve(tempChallengeDir), path.resolve(challengeDir), {
      overwrite: true,
    });

    // update the package.json
    const pkg = await fs.readJson(`${challengeDir}/package.json`);
    pkg.name = `${sessionSlug}_${challengeSlug}`;
    pkg.description = input.challengeName;
    pkg.version = "0.0.0-unreleased";
    pkg.nf = { template: template.name };
    await fs.writeJson(`${challengeDir}/package.json`, pkg, { spaces: 2 });

    // update the README.md
    const newReadme =
      "# " + input.challengeName + "\n\nThis is the description.";
    await fs.writeFile(`${challengeDir}/README.md`, newReadme, "utf8");

    // create sandbox config
    if (template.sandboxConfig) {
      await fs.writeJson(
        `${challengeDir}/sandbox.config.json`,
        template.sandboxConfig,
        { spaces: 2 }
      );
    }

    try {
      await execa("code", [path.resolve(challengeDir, "README.md")]);
    } catch {
      // ignore
    }
  }

  spinner.succeed("Challenge created");
} catch (error) {
  if (fs.existsSync(".create-temp")) {
    fs.rmdirSync(".create-temp", { recursive: true, force: true });
  }
  spinner.fail("Challenge creation failed");
  console.error(error);
  process.exit(1);
} finally {
  if (fs.existsSync(".create-temp")) {
    fs.rmdirSync(".create-temp", { recursive: true, force: true });
  }
}

process.exit(0);
