/* 
1. list all session for migration
2. create new package.json with dynamic project name.
  - use template
  - parse old package.json and extract dependencies remove react-scripts
  - add type: module
  - add vite, vite-plugin-eslint, vite-plugin-react devDependencies
  - remove react scripts
3. ✅ rename .js files to .jsx 
4. create new index.html in root, delete old one in /public
5. create vite.config.js
*/
import { $, Glob, write } from "bun";
import { readdir } from "fs-extra";

const glob = new Glob("src/**/*.js");
const sessions = ["react-basics"];

for (const session of sessions) {
  const sessionPath = `./sessions/${session}`;
  const challenges = (await readdir(sessionPath)).slice(0, 1);

  for (const challenge of challenges) {
    const challengePath = `${sessionPath}/${challenge}`;
    console.log("--------");
    console.log("Path: ", challengePath);

    // rename files
    // const files = [...glob.scanSync(challengePath)];

    // files.forEach(async (file) => {
    //   const oldPath = `${challengePath}/${file}`;
    //   const newPath = oldPath + "x";
    //   await $`mv ${oldPath} ${newPath}`;
    // });

    // create new index.html
    const challengeName = challenge
      .replaceAll("-", " ")
      .replaceAll("_", " ")
      .split(" ")
      .map((name) => name[0].toUpperCase() + name.slice(1))
      .join(" ");
    console.log(challengeName);
    await write(
      challengePath + "/index.html",
      generateIndexHtml(challengeName)
    );
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
