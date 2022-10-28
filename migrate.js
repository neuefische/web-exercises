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

  // if the folder does not contain any html, css or js files, skip it
  const files = await globby("*.html|*.css|*.js", {
    cwd: challengeFolder,
    onlyFiles: true,
    expandDirectories: false,
  });
  if (files.length === 0) {
    console.log("skip", challengeFolder);
    continue;
  }

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
      console.log("html-css-js", challengeFolder);
    } else {
      // use the js template
      console.log("js", challengeFolder);
    }
  } else {
    // this will require a static template
    // we need to figure out if we need the html-css-js-static template or the html-css-static template

    // if the challenge folder includes any files matching "**/*.js"
    if ((await globby("**/*.js", { cwd: challengeFolder })).length) {
      // use the html-css-js-static template
      console.log("html-css-js-static", challengeFolder);
    } else {
      // use the html-css-static template
      console.log("html-css-static", challengeFolder);
    }
  }
}

function applyTemplate(challengeFolder, template) {
  const templateFolder = path.join(__dirname, "templates", template);

  // copy the .eslintrc.json and sandbox.config.json file from the template folder to the challenge folder
  fs.copyFileSync(
    path.join(templateFolder, ".eslintrc.json"),
    path.join(challengeFolder, ".eslintrc.json")
  );
  fs.copyFileSync(
    path.join(templateFolder, "sandbox.config.json"),
    path.join(challengeFolder, "sandbox.config.json")
  );

  // delete the .eslintrc.json from the challenge folder if the template doesn't have it
  if (!fs.existsSync(path.join(templateFolder, ".eslintrc.json"))) {
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
    scripts: templatePackage?.scripts,
    dependencies: templatePackage?.dependencies,
    devDependencies: templatePackage?.devDependencies,
    type: templatePackage?.type,
  };

  fs.writeJsonSync(
    path.join(challengeFolder, "package.json"),
    newChallengePackage,
    { spaces: 2 }
  );
}
