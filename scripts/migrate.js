import fs from "fs-extra";
import path from "node:path";
import { globby } from "globby";
import { execa } from "execa";
import ora from "ora";

// get <foldername> argument from cli
const folder = process.argv[2] || "*";

// find all challenge folders inside sessions/*/<challenge>
const challengeFolders = await globby(`sessions/${folder}/*`, {
  onlyDirectories: true,
  expandDirectories: false,
});

const spinner = ora("Migrating challenges").start();

// for every challenge folder
for (const challengeFolder of challengeFolders) {
  let template, packageJson;

  try {
    packageJson = fs.readJSONSync(path.join(challengeFolder, "package.json"));
  } catch (error) {
    // console.log("non project folder (no package.json)", challengeFolder);
    continue;
  }

  // trust the package.json…
  if (packageJson.nf?.template) {
    template = packageJson.nf.template;
  } else {
    template = await detectTemplate({ challengeFolder, packageJson });
  }

  await applyTemplate(challengeFolder, template, packageJson);
}

spinner.text = "Formatting files";

await execa("npx", [
  "prettier",
  "--write",
  `sessions${folder !== "*" ? `/${folder}` : ""}`,
]);

spinner.succeed("Migrated challenges");

// =================================================================================================

async function applyTemplate(challengeFolder, template, packageJson) {
  spinner.text = `Migrating ${challengeFolder} to ${template}`;

  const templateFolder = path.join("templates", template);

  async function copyFileIfExistsElseRemove(file, patch) {
    // copy the .prettierrc.json file from the template folder to the challenge folder
    if (fs.existsSync(path.join(templateFolder, file))) {
      if (!patch || !fs.existsSync(path.join(challengeFolder, file))) {
        await fs.copyFile(
          path.join(templateFolder, file),
          path.join(challengeFolder, file)
        );
      } else {
        const isJson = file.endsWith(".json");
        if (isJson) {
          const current = await fs.readJSON(path.join(challengeFolder, file));
          const template = await fs.readJSON(path.join(templateFolder, file));
          await fs.writeJSON(
            path.join(challengeFolder, file),
            await patch(current, template),
            { spaces: 2 }
          );
        } else {
          const current = await fs.readFile(
            path.join(challengeFolder, file),
            "utf-8"
          );
          const template = await fs.readFile(
            path.join(templateFolder, file),
            "utf-8"
          );
          await fs.writeFile(
            path.join(challengeFolder, file),
            await patch(current, template),
            { encoding: "utf-8" }
          );
        }
      }
    } else {
      await fs.remove(path.join(challengeFolder, file));
    }
  }

  async function copyFilesIfExistsOrRemove(files) {
    return await Promise.all(
      files.map((file) => copyFileIfExistsElseRemove(file))
    );
  }

  // get session and challenge name from the folder name
  const [sessionName, challengeName] = challengeFolder.split("/").slice(1);

  copyFilesIfExistsOrRemove([
    ".gitignore",
    ".prettierrc.json",
    "jest.config.js",
    "jest.setup.js",
    "sandbox.config.json",
    "stylelint.config.js",
    path.join("pages", "_document.js"),
    path.join(".storybook", "main.js"),
    path.join(".storybook", "preview.js"),
    ".npmrc",
  ]);

  copyFileIfExistsElseRemove(".eslintrc.json", async (current, template) => {
    return {
      ...current,
      ...template,
      extends: mergeArray(current.extends, template.extends),
      plugins: mergeArray(current.plugins, template.plugins),
      rules: mergeObject(current.rules, template.rules),
    };
  });

  // patch the package.json file in the challenge folder

  copyFileIfExistsElseRemove("package.json", async (current, template) => {
    return {
      ...current,
      name: `${sessionName}_${challengeName}`,
      version: template?.version,
      scripts: mergeObject(current.scripts, template.scripts),
      type: template?.type,
      dependencies: mergeObject(current.dependencies, template.dependencies),
      devDependencies: mergeObject(
        current.devDependencies,
        template.devDependencies
      ),
      browserslist: template.browserslist,
      nf: template.nf,
      keywords: undefined,
      author: undefined,
      repository: undefined,
      license: undefined,
      bugs: undefined,
      homepage: undefined,
    };
  });

  copyFileIfExistsElseRemove("README.md", async (current, template) => {
    let readme = current;

    readme = readme.replace(
      /TITLE/g,
      packageJson.description.includes("template")
        ? challengeName
        : packageJson.description || challengeName
    );
    // remove comments from the README.md file
    readme = readme.replace(/<!--[\s\S]*?-->/g, "");

    if (template.includes("## Development")) {
      const developmentSection = template.match(/(## Development.*$)/ms)[0];

      const readmeDevelopmentSection =
        readme.match(/(## Development.*$)/ms)?.[0];

      if (
        readmeDevelopmentSection &&
        readmeDevelopmentSection !== developmentSection
      ) {
        readme = readme.replace(readmeDevelopmentSection, developmentSection);
      }
      if (!readmeDevelopmentSection) {
        readme = readme + "\n" + developmentSection;
      }
    }

    return readme;
  });
}

async function detectTemplate({ challengeFolder, packageJson }) {
  // if the folder does not contain any html, css or js files
  const files = await globby("*.html|*.css|*.js|**/*.html|**/*.css|**/*.js", {
    cwd: challengeFolder,
    onlyFiles: true,
    expandDirectories: false,
  });
  if (files.length === 0) {
    // console.log("no files", challengeFolder);
    return "empty";
  } else {
    // console.log("unknown template", challengeFolder);
    // console.log("trying to guess template");
    // if the folder contains a package.json file and the package.json file contains a react dependency
    if (packageJson.dependencies?.react) {
      // if it has an eject script, it's a CRA project
      if (packageJson.scripts?.eject) {
        return "cra";
      } else if (packageJson.dependencies?.next) {
        return "next";
      } else {
        return "react-minimal";
      }
    } else if (
      (await globby("**/*.test.js", { cwd: challengeFolder })).length
    ) {
      // if the challenge folder includes any files matching "**/*.test.js"
      // this will require a non static template, we still need to figure out if
      // we need the html-css-js template or the js template

      // if the challenge folder includes any files matching "**/*.html" or "**/*.css"
      if (
        (await globby("**/*.html", { cwd: challengeFolder })).length ||
        (await globby("**/*.css", { cwd: challengeFolder })).length
      ) {
        // use the html-css-js template
        // console.log("html-css-js", challengeFolder);
        return "html-css-js";
      } else {
        // use the js template
        // console.log("js", challengeFolder);
        return "js";
      }
    } else {
      // this will require a static template
      // we need to figure out if we need the html-css-js-static template or the html-css-static template

      // if the challenge folder includes any files matching "**/*.js"
      if ((await globby("**/*.js", { cwd: challengeFolder })).length) {
        // use the html-css-js-static template
        // console.log("html-css-js-static", challengeFolder);

        // if the challenge folder does not include any files matching "**/*.html" or "**/*.css"
        if (
          !(await globby("**/*.html", { cwd: challengeFolder })).length &&
          !(await globby("**/*.css", { cwd: challengeFolder })).length
        ) {
          // use the js template
          // console.log("js", challengeFolder);
          return "js";
        } else {
          return "html-css-js-static";
        }
      } else {
        // use the html-css-static template
        // console.log("html-css-static", challengeFolder);
        return "html-css-static";
      }
    }
  }
}

function asArray(array) {
  return array != null ? (Array.isArray(array) ? array : [array]) : [];
}

function mergeArray(array1, array2) {
  if (!array1 && !array2) return undefined;
  return [...new Set([...asArray(array1), ...asArray(array2)])];
}

function mergeObject(object1, object2) {
  if (!object1 && !object2) return undefined;
  return {
    ...object1,
    ...object2,
  };
}
