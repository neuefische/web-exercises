/*
1. list all session for migration
2.✅ create new package.json with dynamic project name.
  - ✅ use template
  - ✅ parse old package.json and extract dependencies remove react-scripts
  - ✅ add type: module
  - ✅ add vite, vite-plugin-eslint, vite-plugin-react devDependencies
  - ✅ remove react scripts
3. ✅ rename .js files to .jsx
4. ✅ create new index.html in root, delete old one in /public
5. ✅ create vite.config.js
6. ✅ create eslintrc.json
*/
import { $, Glob, write, file, argv } from "bun";
import { existsSync, readdir } from "fs-extra";

const glob = new Glob("src/**/*.js");

const session = argv[2];

const sessions = await readdir("./sessions");

if (!sessions.includes(session)) {
  console.error(`${session} no found.`);
  process.exit(1);
}

const sessionPath = `./sessions/${session}`;
const challenges = await readdir(sessionPath);

for (const challenge of challenges) {
  const challengePath = `${sessionPath}/${challenge}`;
  console.log("--------");
  console.log("Path: ", challengePath);

  try {
    // rename files
    const files = [...glob.scanSync(challengePath)];

    files.forEach(async (file) => {
      const oldPath = `${challengePath}/${file}`;
      const newPath = oldPath + "x";
      await $`mv ${oldPath} ${newPath}`;
    });

    // create new index.html
    const challengeName = challenge
      .replaceAll("-", " ")
      .replaceAll("_", " ")
      .split(" ")
      .map((name) => name[0].toUpperCase() + name.slice(1))
      .join(" ");

    await write(
      challengePath + "/index.html",
      generateIndexHtml(challengeName)
    );

    // remove old index.html
    if (existsSync(`${challengePath}/public/index.html`)) {
      await $`rm "${challengePath}/public/index.html"`;
    }

    // create vite.config.js and .eslintrc.json
    await $`cp -f ./scripts/vite-assets/.eslintrc.json ./scripts/vite-assets/vite.config.js ${challengePath}`;

    // create package.json
    const packageFile = await file("./scripts/vite-assets/package.json");
    const templatePackageJson = await packageFile.json();

    const currentPackageFile = await file(`${challengePath}/package.json`);
    const { dependencies, name } = await currentPackageFile.json();

    let sanitizedDepedencies = {};
    const excludedDependencies = [
      "react",
      "react-dom",
      "react-scripts",
      "web-vitals",
    ];

    for (const dependency in dependencies) {
      if (
        excludedDependencies.includes(dependency) ||
        dependency.includes("@testing-library")
      ) {
        continue;
      }

      sanitizedDepedencies[dependency] = dependencies[dependency];
    }

    const newPackageJson = {
      ...templatePackageJson,
      name,
      dependencies: {
        ...templatePackageJson.dependencies,
        ...sanitizedDepedencies,
      },
    };

    await write(
      `${challengePath}/package.json`,
      JSON.stringify(newPackageJson, null, 2)
    );
  } catch (error) {
    console.log(error);
  }
}

function generateIndexHtml(name) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>${name}</title>
    <script type="module" src="/src/index.jsx"></script>
  </head>

  <body>
    <div id="root" class="root"></div>
  </body>
</html>`;
}
