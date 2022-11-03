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
  let template;

  let packageJson;
  try {
    packageJson = fs.readJsonSync(path.join(challengeFolder, "package.json"));
  } catch (error) {
    console.log("non project folder (no package.json)", challengeFolder);
    continue;
  }

  // if the folder does not contain any html, css or js files
  const files = await globby("*.html|*.css|*.js|**/*.html|**/*.css|**/*.js", {
    cwd: challengeFolder,
    onlyFiles: true,
    expandDirectories: false,
  });
  if (files.length === 0) {
    console.log("no files", challengeFolder);
    template = "empty";
  } else {
    // if the folder contains a package.json file and the package.json file contains a react dependency
    if (packageJson.dependencies?.react) {
      // if it has an eject script, it's a CRA project
      if (packageJson.scripts?.eject) {
        console.log(
          "cra migration not implemented yet. skipping",
          challengeFolder
        );
        continue;
      } else {
        template = "react-minimal";
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

        // if the challenge folder does not include any files matching "**/*.html" or "**/*.css"
        if (
          !(await globby("**/*.html", { cwd: challengeFolder })).length &&
          !(await globby("**/*.css", { cwd: challengeFolder })).length
        ) {
          // use the js template
          // console.log("js", challengeFolder);
          template = "js";
        } else {
          template = "html-css-js-static";
        }
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

  // delete .stylelintrc.json file from the challenge folder
  fs.removeSync(path.join(challengeFolder, ".stylelintrc.json"));

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

  // copy the .gitignore file from the template folder to the challenge folder
  fs.copyFileSync(
    path.join(templateFolder, ".gitignore"),
    path.join(challengeFolder, ".gitignore")
  );

  // copy the .prettierrc.json file from the template folder to the challenge folder
  if (fs.existsSync(path.join(templateFolder, ".prettierrc.json"))) {
    fs.copyFileSync(
      path.join(templateFolder, ".prettierrc.json"),
      path.join(challengeFolder, ".prettierrc.json")
    );
  } else {
    fs.removeSync(path.join(challengeFolder, ".prettierrc.json"));
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
  // copy the README.md file from the template folder to the challenge folder
  if (!fs.existsSync(path.join(challengeFolder, "README.md"))) {
    fs.copyFileSync(
      path.join(templateFolder, "README.md"),
      path.join(challengeFolder, "README.md")
    );

    let readme = fs.readFileSync(path.join(challengeFolder, "README.md"), {
      encoding: "utf-8",
    });
    // replace the string TITLE with the challenge name in the README.md file
    readme = readme.replace(
      /TITLE/g,
      challengePackage.description.includes("template")
        ? challengeName
        : challengePackage.description || challengeName
    );
    // remove comments from the README.md file
    readme = readme.replace(/<!--[\s\S]*?-->/g, "");
    fs.writeFileSync(path.join(challengeFolder, "README.md"), readme, {
      encoding: "utf-8",
    });
  } else {
    // if the challenge folder includes a README.md file,
    // add in the development section from the template README.md file
    let readme = fs.readFileSync(path.join(challengeFolder, "README.md"), {
      encoding: "utf-8",
    });

    const templateReadme = fs.readFileSync(
      path.join(templateFolder, "README.md"),
      {
        encoding: "utf-8",
      }
    );

    if (templateReadme.includes("## Development")) {
      const developmentSection =
        templateReadme.match(/(## Development.*$)/ms)[0];

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

    fs.writeFileSync(path.join(challengeFolder, "README.md"), readme, {
      encoding: "utf-8",
    });
  }

  fs.writeJsonSync(
    path.join(challengeFolder, "package.json"),
    newChallengePackage,
    { spaces: 2 }
  );
}
