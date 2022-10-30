import fs from "fs-extra";
import path from "node:path";
import { globby } from "globby";

// find all challenge folders inside sessions/*/<challenge>
const challengeFolders = await globby("sessions/*/*", {
  onlyDirectories: true,
  expandDirectories: false,
});

// for every challenge folder
for (const challengeFolder of challengeFolders) {
  // if the folder name contains the word "react", skip it
  if (challengeFolder.includes("react")) continue;

  let template;

  // if the folder does not contain any html, css or js files
  const files = await globby("*.html|*.css|*.js", {
    cwd: challengeFolder,
    onlyFiles: true,
    expandDirectories: false,
  });
  if (files.length === 0) {
    template = "empty";
  } else {
    // if the challenge folder includes any files matching "**/*.test.js"
    if ((await globby("**/*.test.js", { cwd: challengeFolder })).length) {
      // this will require a non static template, we still need to figure out if
      // we need the html-css-js template or the js template

      // if the challenge folder includes any files matching "**/*.html" or "**/*.css"
      if (
        (await globby("**/*.html", { cwd: challengeFolder })).length ||
        (await globby("**/*.css", { cwd: challengeFolder })).length
      ) {
        // use the html-css-js template
        // console.log("html-css-js", challengeFolder);
        template = "html-css-js";
      } else {
        // use the js template
        // console.log("js", challengeFolder);
        template = "js";
      }
    } else {
      // this will require a static template
      // we need to figure out if we need the html-css-js-static template or the html-css-static template

      // if the challenge folder includes any files matching "**/*.js"
      if ((await globby("**/*.js", { cwd: challengeFolder })).length) {
        // use the html-css-js-static template
        // console.log("html-css-js-static", challengeFolder);
        template = "html-css-js-static";
      } else {
        // use the html-css-static template
        // console.log("html-css-static", challengeFolder);
        template = "html-css-static";
      }
    }
  }

  applyTemplate(challengeFolder, template);
}

function applyTemplate(challengeFolder, template) {
  const templateFolder = path.join("templates", template);

  // get session and challenge name from the folder name
  const [sessionName, challengeName] = challengeFolder.split("/").slice(1);

  // copy the .eslintrc.json and sandbox.config.json file from the template folder to the challenge folder
  fs.copyFileSync(
    path.join(templateFolder, "sandbox.config.json"),
    path.join(challengeFolder, "sandbox.config.json")
  );

  // delete the .eslintrc.json from the challenge folder if the template doesn't have it
  if (fs.existsSync(path.join(templateFolder, ".eslintrc.json"))) {
    fs.copyFileSync(
      path.join(templateFolder, ".eslintrc.json"),
      path.join(challengeFolder, ".eslintrc.json")
    );
  } else {
    fs.removeSync(path.join(challengeFolder, ".eslintrc.json"));
  }

  // patch the package.json file in the challenge folder by replacing the following fields:
  // - scripts
  // - dependencies
  // - devDependencies
  // - type

  const templatePackage = fs.readJsonSync(
    path.join(templateFolder, "package.json")
  );

  const challengePackage = fs.readJsonSync(
    path.join(challengeFolder, "package.json")
  );

  const newChallengePackage = {
    ...challengePackage,
    name: `${sessionName}_${challengeName}`,
    version: templatePackage?.version,
    scripts: templatePackage?.scripts,
    type: templatePackage?.type,
    dependencies: templatePackage?.dependencies,
    devDependencies: templatePackage?.devDependencies,
    nf: templatePackage?.nf,
    keywords: undefined,
    author: undefined,
    repository: undefined,
    license: undefined,
    bugs: undefined,
    homepage: undefined,
  };

  // if the challenge folder does not include a README.md file,
  // log a warning with the challenge folder name to the console
  // if (!fs.existsSync(path.join(challengeFolder, "README.md"))) {
  //   console.warn("missing README.md", challengeFolder);
  // }

  fs.writeJsonSync(
    path.join(challengeFolder, "package.json"),
    newChallengePackage,
    { spaces: 2 }
  );
}
